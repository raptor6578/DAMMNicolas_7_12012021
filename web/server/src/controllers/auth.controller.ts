import express from 'express';
import UserModel from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
    public signup(req: express.Request, res: express.Response) {
        if (!req.body.email ||
            !req.body.password ||
            !req.body.Profile ||
            !req.body.Profile.lastName ||
            !req.body.Profile.firstName) {
            res.status(400);
            return res.json({message: `Vous devez entrer une adresse email, votre nom, prénom, et un mot de passe.` });
        }
        if (req.body.password.length < 8 || req.body.password.length > 30) {
            res.status(400);
            return res.json({message: `Votre mot de passe doit contenir entre 8 et 30 caractères.` });
        }
        if (!/\S+@\S+\.\S+/.test(req.body.email)) {
            res.status(400);
            return res.json({message: `Votre adresse email utilise un format invalide.` });
        }
        UserModel.findOne({ where: {email: req.body.email}})
            .then((result) => {
                if (result) {
                    res.status(409);
                    return res.json({message: `Un compte utilisant l'adresse email que vous avez entré existe déjà.`});
                }
                UserModel.create({
                    email: req.body.email,
                    password: req.body.password,
                    Profile: req.body.Profile
                }, {include: 'Profile'})
                .then(() => {
                    res.status(201);
                    res.json({message: `Votre compte a bien été enregistré.`});
                })
                .catch((error) => {
                    res.status(400);
                    res.json({message: error});
                });
            }).catch((error) => {
                res.status(500);
                res.json({message: error});
        });
    }
    public login(req: express.Request, res: express.Response) {
        if (!req.body.email || !req.body.password) {
            res.status(400);
            return res.json({message: `Vous devez entrer une adresse email et un mot de passe.` });
        }
        UserModel.findOne({ where: {email: req.body.email}})
            .then((user) => {
                if (!user) {
                    res.status(401);
                    return res.json({message: `Adresse email introuvable.`});
                }
                bcrypt.compare(req.body.password, user.password)
                    .then((isMatch) => {
                        if (!isMatch) {
                            res.status(401);
                            return res.json({message: 'Mot de passe incorrect.'});
                        }
                        // @ts-ignore
                        const token = jwt.sign(user.toJSON(), process.env.SECRET_JWT, {expiresIn: '24h'});
                        res.status(200);
                        res.json({token});
                        user.lastConnection = new Date();
                        user.save().then()
                    })
                    .catch(error => {
                        res.status(500);
                        res.json({message: error});
                    })
            }).catch((error) => {
                res.status(500);
                res.json({message: error});
        });
    }
    public delete(req: express.Request, res: express.Response) {
        if (!req.params.id) {
            res.status(400);
            return res.json({message: `Vous devez entrer l'id du compte à supprimer.` });
        }
        UserModel.findOne({where: {id: req.params.id}})
            .then((user) => {
                if (!user) {
                    res.status(401);
                    return res.json({message: `Id introuvable dans la base de données.`});
                }
                if (user.id !== res.locals.UserId && !res.locals.admin) {
                    res.status(403);
                    return res.json({message: 'Vous n\'êtes pas autorisé à supprimer cet utilisateur.'});
                }
                user.destroy()
                    .then(() => {
                        res.status(204);
                        return res.send();
                    })
                    .catch((error) => {
                        res.status(400);
                        res.json({message: error});
                    });
            })
            .catch((error) => {
                res.status(500);
                res.json({message: error});
            });
    }
    public getAllUsers(req: express.Request, res: express.Response) {
        UserModel.findAll({include: ['Profile']})
            .then((users) => {
                res.json(users);
            })
            .catch((error) => {
                res.status(500);
                res.json({message: error});
            });
    }
    public setAdmin(req: express.Request, res: express.Response) {
        if (!req.body.id || !req.body.admin) {
            res.status(400);
            return res.json({message: `Vous devez entrer l'id du compte à modifier et indiquer les droits.` });
        }
        UserModel.findOne({where: {id: req.body.id}})
            .then((user) => {
                if (!user) {
                    res.status(401);
                    return res.json({message: `Id introuvable dans la base de données.`});
                }
                user.admin = req.body.admin;
                user.save()
                    .then(() => {
                        res.status(200);
                        res.json({message: 'Les droits de l\'utilisateur ont été modifiés.'});
                    })
                    .catch((error) => {
                        res.status(400);
                        res.json({message: error});
                    });
            })
            .catch((error) => {
                res.status(500);
                res.json({message: error});
            });
    }
}

export default new AuthController();
