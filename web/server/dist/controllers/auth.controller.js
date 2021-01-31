"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    signup(req, res) {
        if (!req.body.email ||
            !req.body.password ||
            !req.body.Profile ||
            !req.body.Profile.lastName ||
            !req.body.Profile.firstName) {
            res.status(400);
            return res.json({ message: `Vous devez entrer une adresse email, votre nom, prénom, et un mot de passe.` });
        }
        if (req.body.password.length < 8 || req.body.password.length > 30) {
            res.status(400);
            return res.json({ message: `Votre mot de passe doit contenir entre 8 et 30 caractères.` });
        }
        if (!/\S+@\S+\.\S+/.test(req.body.email)) {
            res.status(400);
            return res.json({ message: `Votre adresse email utilise un format invalide.` });
        }
        user_model_1.default.findOne({ where: { email: req.body.email } })
            .then((result) => {
            if (result) {
                res.status(409);
                return res.json({ message: `Un compte utilisant l'adresse email que vous avez entré existe déjà.` });
            }
            user_model_1.default.create({
                email: req.body.email,
                password: req.body.password,
                Profile: req.body.Profile
            }, { include: 'Profile' })
                .then(() => {
                res.status(201);
                res.json({ message: `Votre compte a bien été enregistré.` });
            })
                .catch((error) => {
                res.status(400);
                res.json({ message: error });
            });
        }).catch((error) => {
            res.status(500);
            res.json({ message: error });
        });
    }
    login(req, res) {
        if (!req.body.email || !req.body.password) {
            res.status(400);
            return res.json({ message: `Vous devez entrer une adresse email et un mot de passe.` });
        }
        user_model_1.default.findOne({ where: { email: req.body.email } })
            .then((user) => {
            if (!user) {
                res.status(401);
                return res.json({ message: `Adresse email introuvable.` });
            }
            bcrypt_1.default.compare(req.body.password, user.password)
                .then((isMatch) => {
                if (!isMatch) {
                    res.status(401);
                    return res.json({ message: 'Mot de passe incorrect.' });
                }
                // @ts-ignore
                const token = jsonwebtoken_1.default.sign(user.toJSON(), process.env.SECRET_JWT, { expiresIn: '24h' });
                res.status(200);
                res.json({ token, id: user.id, admin: user.admin });
            })
                .catch(error => {
                res.status(500);
                res.json({ message: error });
            });
        }).catch((error) => {
            res.status(500);
            res.json({ message: error });
        });
    }
}
exports.default = new AuthController();
