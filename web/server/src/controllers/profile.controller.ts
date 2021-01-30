import express from 'express';
import ProfileModel from '../models/profile.model';
import * as fs from "fs";

class ProfileController {
    public getProfile(req: express.Request, res: express.Response) {
        ProfileModel.findOne({ where: {UserId: res.locals.userId}})
            .then(profile => res.json(profile))
            .catch((error) => {
                res.status(500);
                res.json({message: error});
            });
    }
    public putProfile(req: express.Request, res: express.Response) {
        ProfileModel.findOne({ where: {UserId: res.locals.userId}})
            .then((profile: any) => {
                if (!profile) {
                    res.status(404);
                    return res.json({message: `Profil introuvable.`});
                }
                for (const key of Object.keys(req.body)) {
                    profile[key] = req.body[key];
                }
                if (req.file) {
                    fs.unlink(`images/upload/${profile.picture}`, () => {
                        return;
                    });
                    profile.picture = req.file.filename;
                }
                profile.save()
                    .then(() => {
                        res.status(200);
                        return res.json({message: 'Votre profil a bien été modifiée.'});
                    })
                    .catch((error: Error) => {
                        res.status(400);
                        return res.json({message: error});
                    });
            })
            .catch((error) => {
                res.status(500);
                res.json({message: error});
            });
    }
}

export default new ProfileController();
