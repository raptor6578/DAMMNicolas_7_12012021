"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const publication_model_1 = __importDefault(require("../models/publication.model"));
class ProfileController {
    getMyPublications(req, res) {
        publication_model_1.default.findOne({ where: { UserId: res.locals.userId } })
            .then(profile => res.json(profile))
            .catch((error) => {
            res.status(500);
            res.json({ message: error });
        });
    }
    getAllPublications(req, res) {
        publication_model_1.default.findAll({ order: [['createdAt', 'DESC']], include: 'Profile' })
            .then(profile => res.json(profile))
            .catch((error) => {
            console.log(error);
            res.status(500);
            res.json({ message: error });
        });
    }
    postPublication(req, res) {
        if (!req.body.content) {
            res.status(400);
            return res.json({ message: 'Votre publication ne contient aucun contenu.' });
        }
        const publication = new publication_model_1.default();
        publication.UserId = res.locals.userId;
        publication.content = req.body.content;
        if (req.file) {
            publication.picture = req.file.filename;
        }
        publication.save()
            .then(() => {
            res.status(201);
            res.json({ message: `Votre publication a bien été enregistré.` });
        })
            .catch((error) => {
            res.status(400);
            res.json({ message: error });
        });
    }
}
exports.default = new ProfileController();
