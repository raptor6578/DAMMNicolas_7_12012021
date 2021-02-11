"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const publication_model_1 = __importDefault(require("../models/publication.model"));
const comment_model_1 = __importDefault(require("../models/comment.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const vote_model_1 = __importDefault(require("../models/vote.model"));
const fs = __importStar(require("fs"));
class ProfileController {
    getMyPublications(req, res) {
        publication_model_1.default.findOne({ where: { UserId: res.locals.UserId } })
            .then(profile => res.json(profile))
            .catch((error) => {
            res.status(500);
            res.json({ message: error });
        });
    }
    getPublications(req, res) {
        publication_model_1.default.findAll({
            offset: Number(req.params.offset),
            limit: Number(req.params.limit),
            order: [['createdAt', 'DESC']],
            include: [
                'Profile',
                'Vote',
                {
                    model: comment_model_1.default,
                    as: 'Comment',
                    limit: 5,
                    order: [['createdAt', 'DESC']],
                    include: [
                        {
                            model: user_model_1.default,
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
            res.json({ message: error });
        });
    }
    postPublication(req, res) {
        if (!req.body.content) {
            res.status(400);
            return res.json({ message: 'Votre publication ne contient aucun contenu.' });
        }
        const publication = publication_model_1.default.build({}, {
            include: [
                'Profile',
                'Vote',
                {
                    model: comment_model_1.default,
                    as: 'Comment',
                    include: [
                        {
                            model: user_model_1.default,
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
            res.json({ message: `Votre publication a bien été enregistré.` });
        })
            .catch((error) => {
            res.status(400);
            res.json({ message: error });
        });
    }
    deletePublication(req, res) {
        publication_model_1.default.findOne({ where: { id: req.params.id } })
            .then(publication => {
            if (!publication) {
                res.status(404);
                return res.json({ message: 'La publication que vous souhaitez supprimer n\'éxiste pas.' });
            }
            if (publication.UserId !== res.locals.UserId && !res.locals.admin) {
                res.status(403);
                return res.json({ message: 'Vous n\'êtes pas autorisé à supprimer cette publication.' });
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
                io.sockets.emit('deletePublication', { id: req.params.id });
                res.status(204);
                return res.send();
            })
                .catch((error) => {
                res.status(400);
                res.json({ message: error });
            });
        })
            .catch((error) => {
            res.status(500);
            res.json({ message: error });
        });
    }
    addComment(req, res) {
        if (!req.body.id || !req.body.content) {
            res.status(400);
            return res.json({ message: `Vous devez entrer l'id de la publication et un message.` });
        }
        publication_model_1.default.findOne({ where: { id: req.body.id } })
            .then(publication => {
            if (!publication) {
                res.status(404);
                return res.json({ message: 'La publication que vous souhaitez commenter n\'éxiste pas.' });
            }
            const commentaire = comment_model_1.default.build({
                PublicationId: req.body.id,
                UserId: res.locals.UserId,
                content: req.body.content
            }, {
                include: [
                    {
                        model: user_model_1.default,
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
                res.json({ message: `Votre commentaire a été publié.` });
            })
                .catch((error) => {
                res.status(400);
                res.json({ message: error });
            });
        })
            .catch((error) => {
            res.status(500);
            res.json({ message: error });
        });
    }
    getComment(req, res) {
        if (!req.params.id || !req.params.offset || !req.params.limit) {
            res.status(400);
            return res.json({ message: 'id, offset et limit requis.' });
        }
        comment_model_1.default.findAll({
            where: {
                PublicationId: req.params.id
            },
            offset: Number(req.params.offset),
            limit: Number(req.params.limit),
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: user_model_1.default,
                    as: 'User',
                    attributes: {
                        exclude: ['password']
                    },
                    include: ['Profile']
                }
            ]
        })
            .then(comment => {
            res.json(comment);
        })
            .catch((error) => {
            res.status(500);
            res.json({ message: error });
        });
    }
    addVote(req, res) {
        if (!req.body.id) {
            res.status(400);
            return res.json({ message: `Vous devez entrer l'id de la publication.` });
        }
        publication_model_1.default.findOne({ where: { id: req.body.id }, include: 'Vote' })
            .then(publication => {
            if (!publication) {
                res.status(404);
                return res.json({ message: 'La publication n\'éxiste pas.' });
            }
            const voteIndex = publication.Vote.findIndex(vote => vote.UserId === res.locals.UserId);
            if (voteIndex !== -1) {
                res.status(409);
                return res.json({ message: 'Vous avez déjà voté pour cette publication.' });
            }
            const vote = vote_model_1.default.build({ PublicationId: req.body.id, UserId: res.locals.UserId });
            vote.save()
                .then(() => {
                const io = req.app.get('io');
                io.sockets.emit('addVote', { PublicationId: req.body.id, UserId: res.locals.UserId });
                res.status(201);
                res.json({ message: `Votre vote a été enregistré.` });
            })
                .catch((error) => {
                res.status(400);
                res.json({ message: error });
            });
        });
    }
    deleteVote(req, res) {
        if (!req.params.id) {
            res.status(400);
            return res.json({ message: `Vous devez entrer l'id de la publication.` });
        }
        vote_model_1.default.findOne({ where: { UserId: res.locals.UserId, PublicationId: req.params.id } })
            .then(vote => {
            if (!vote) {
                res.status(404);
                return res.json({ message: 'Aucun vote pour cet ID de publication n\'a été trouvé.' });
            }
            vote.destroy()
                .then(() => {
                const io = req.app.get('io');
                io.sockets.emit('deleteVote', { PublicationId: req.params.id, UserId: res.locals.UserId });
                res.status(204);
                return res.send();
            })
                .catch((error) => {
                res.status(500);
                res.json({ message: error });
            });
        })
            .catch((error) => {
            res.status(500);
            res.json({ message: error });
        });
    }
}
exports.default = new ProfileController();
