import express from 'express';
import PublicationModel from '../models/publication.model';

class ProfileController {
    public getMyPublications(req: express.Request, res: express.Response) {
        PublicationModel.findOne({ where: {UserId: res.locals.userId}})
            .then(profile => res.json(profile))
            .catch((error) => {
                res.status(500);
                res.json({message: error});
            });
    }
    public getAllPublications(req: express.Request, res: express.Response) {
        PublicationModel.findAll({order:[ ['createdAt', 'DESC'] ],  include: 'Profile'})
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
        publication.UserId = res.locals.userId;
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
}

export default new ProfileController();
