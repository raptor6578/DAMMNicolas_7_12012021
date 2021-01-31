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
    getAllPublications(req, res) {
        publication_model_1.default.findAll({ order: [['createdAt', 'DESC']], include: ['Profile'] })
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
        publication.UserId = res.locals.UserId;
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
}
exports.default = new ProfileController();
