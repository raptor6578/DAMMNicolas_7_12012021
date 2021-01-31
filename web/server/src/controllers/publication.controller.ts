import express from 'express';
import PublicationModel from '../models/publication.model';
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
    public getAllPublications(req: express.Request, res: express.Response) {
        PublicationModel.findAll({order:[ ['createdAt', 'DESC'] ],  include: ['Profile']})
            .then(profile => res.json(profile))
            .catch((error) => {
                console.log(error);
                res.status(500);
                res.json({message: error});
            });
    }
    public postPublication(req: express.Request, res: express.Response) {
        if (!req.body.content) {
            res.status(400);
            return res.json({message: 'Votre publication ne contient aucun contenu.'});
        }
        const publication = new PublicationModel();
        publication.UserId = res.locals.UserId;
        publication.content = req.body.content;
        if (req.file) {
            publication.picture = req.file.filename;
        }
        publication.save()
            .then(() => {
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

}

export default new ProfileController();
