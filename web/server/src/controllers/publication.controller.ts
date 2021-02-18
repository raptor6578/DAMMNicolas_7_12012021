import express from 'express';
import PublicationModel from '../models/publication.model';
import CommentModel from '../models/comment.model';
import UserModel from '../models/user.model';
import VoteModel from '../models/vote.model';
import * as fs from "fs";

class ProfileController {
    public getMyPublications(req: express.Request, res: express.Response) {
        PublicationModel.findOne({ where: {UserId: res.locals.UserId}})
            .then(profile => res.json(profile))
            .catch((error) => {
                res.status(500);
                res.json({message: error});
            });
    }
    public getPublications(req: express.Request, res: express.Response) {
        PublicationModel.findAll({
            offset: Number(req.params.offset),
            limit: Number(req.params.limit),
            order: [ ['createdAt', 'DESC'] ],
            include: [
                'Profile',
                'Vote',
                {
                    model: CommentModel,
                    as: 'Comment',
                    limit: 5,
                    order: [ ['createdAt', 'DESC'] ],
                    include: [
                        {
                            model: UserModel,
                            as: 'User',
                            attributes: {
                                exclude: ['password']
                            },
                            include: ['Profile']
                        }
                    ]
                }
            ]
        })
            .then(profile => res.json(profile))
            .catch((error) => {
                res.status(500);
                res.json({message: error});
            });
    }
    public postPublication(req: express.Request, res: express.Response) {
        if (!req.body.content) {
            res.status(400);
            return res.json({message: 'Votre publication ne contient aucun contenu.'});
        }
        const publication = PublicationModel.build({}, {
            include: [
                'Profile',
                'Vote',
                {
                    model: CommentModel,
                    as: 'Comment',
                    include: [
                        {
                            model: UserModel,
                            as: 'User',
                            attributes: {
                                exclude: ['password']
                            },
                            include: ['Profile']
                        }
                    ]
                }
            ]
        });
        publication.UserId = res.locals.UserId;
        publication.content = req.body.content;
        if (req.file) {
            publication.picture = req.file.filename;
        }
        publication.save()
            .then(() => {
                publication.reload()
                    .then(data => {
                        const io = req.app.get('io');
                        io.sockets.emit('newPublication', data);
                    });
                res.status(201);
                res.json({message: `Votre publication a bien été enregistré.`});
            })
            .catch((error) => {
                res.status(400);
                res.json({message: error});
            });
    }

    public deletePublication(req: express.Request, res: express.Response) {
        PublicationModel.findOne({where: {id: req.params.id}})
            .then(publication => {
                if (!publication) {
                    res.status(404);
                    return res.json({message: 'La publication que vous souhaitez supprimer n\'éxiste pas.'});
                }
                if (publication.UserId !== res.locals.UserId && !res.locals.admin) {
                    res.status(403);
                    return res.json({message: 'Vous n\'êtes pas autorisé à supprimer cette publication.'});
                }
                const picture = publication.picture;
                publication.destroy()
                    .then(() => {
                        if (picture) {
                            fs.unlink(`images/upload/${picture}`, () => {
                                return;
                            });
                        }
                        const io = req.app.get('io');
                        io.sockets.emit('deletePublication', {id: req.params.id});
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

    public deleteComment(req: express.Request, res: express.Response) {
        if (!req.params.idPublication || !req.params.idComment) {
            res.status(400);
            return res.json({message: `Vous devez entrer l'id du commentaire et l'id de la publication.`});
        }
        CommentModel.findOne({where: {PublicationId: req.params.idPublication, id: req.params.idComment}})
            .then(comment => {
                if (!comment) {
                    res.status(404);
                    return res.json({message: 'Le commentaire est introuvable.'});
                }
                if (comment.UserId !== res.locals.UserId && !res.locals.admin) {
                    res.status(403);
                    return res.json({message: 'Vous n\'êtes pas autorisé à supprimer cette publication.'});
                }
                comment.destroy()
                    .then(() => {
                        const io = req.app.get('io');
                        io.sockets.emit('deleteComment', {
                            idPublication: req.params.idPublication,
                            idComment: req.params.idComment
                        });
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

    public addComment(req: express.Request, res: express.Response) {
        if (!req.body.id || !req.body.content) {
            res.status(400);
            return res.json({message: `Vous devez entrer l'id de la publication et un message.`});
        }
        PublicationModel.findOne({where: {id: req.body.id}})
            .then(publication => {
                if (!publication) {
                    res.status(404);
                    return res.json({message: 'La publication que vous souhaitez commenter n\'éxiste pas.'});
                }
                const commentaire = CommentModel.build({
                    PublicationId: req.body.id,
                    UserId: res.locals.UserId,
                    content: req.body.content
                }, {
                    include: [
                        {
                            model: UserModel,
                            as: 'User',
                            attributes: {
                                exclude: ['password']
                            },
                            include: ['Profile']
                        }
                    ]
                });
                commentaire.save()
                .then(() => {
                    commentaire.reload()
                        .then(data => {
                            const io = req.app.get('io');
                            io.sockets.emit('newComment', data);
                        });
                    res.status(201);
                    res.json({message: `Votre commentaire a été publié.`});
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

    public getComment(req: express.Request, res: express.Response) {
        if (!req.params.id || !req.params.offset || !req.params.limit) {
            res.status(400);
            return res.json({message: 'id, offset et limit requis.'});
        }
        CommentModel.findAll({
            where: {
                PublicationId: req.params.id
            },
            offset: Number(req.params.offset),
            limit: Number(req.params.limit),
            order: [ ['createdAt', 'DESC'] ],
            include: [
                {
                    model: UserModel,
                    as: 'User',
                    attributes: {
                        exclude: ['password']
                    },
                    include: ['Profile']
                }
            ]
        })
        .then(comment => {
            res.json(comment)
        })
        .catch((error) => {
            res.status(500);
            res.json({message: error});
        });
    }
    
    public addVote(req: express.Request, res: express.Response) {
        if (!req.body.id) {
            res.status(400);
            return res.json({message: `Vous devez entrer l'id de la publication.`});
        }
        PublicationModel.findOne({where: {id: req.body.id}, include: 'Vote'})
            .then(publication => {
                if (!publication) {
                    res.status(404);
                    return res.json({message: 'La publication n\'éxiste pas.'});
                }
                const voteIndex = publication.Vote.findIndex(vote => vote.UserId === res.locals.UserId);
                if (voteIndex !== -1) {
                    res.status(409);
                    return res.json({message: 'Vous avez déjà voté pour cette publication.'});
                }
                const vote = VoteModel.build({PublicationId: req.body.id, UserId: res.locals.UserId});
                vote.save()
                    .then(() => {
                        const io = req.app.get('io');
                        io.sockets.emit('addVote', {PublicationId: req.body.id, UserId: res.locals.UserId});
                        res.status(201);
                        res.json({message: `Votre vote a été enregistré.`});
                    })
                    .catch((error) => {
                        res.status(400);
                        res.json({message: error});
                    });
            })
    }

    public deleteVote(req: express.Request, res: express.Response) {
        if (!req.params.id) {
            res.status(400);
            return res.json({message: `Vous devez entrer l'id de la publication.`});
        }
        VoteModel.findOne({where: {UserId: res.locals.UserId, PublicationId: req.params.id}})
            .then(vote => {
                if (!vote) {
                    res.status(404);
                    return res.json({message: 'Aucun vote pour cet ID de publication n\'a été trouvé.'});
                }
                vote.destroy()
                    .then(() => {
                        const io = req.app.get('io');
                        io.sockets.emit('deleteVote', {PublicationId: req.params.id, UserId: res.locals.UserId});
                        res.status(204);
                        return res.send();
                    })
                    .catch((error) => {
                        res.status(500);
                        res.json({message: error});
                    });
            })
            .catch((error) => {
                res.status(500);
                res.json({message: error});
            });
    }

}

export default new ProfileController();
