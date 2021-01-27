import express from 'express';
import ProfileModel from '../models/profile.model';

class ProfileController {
    public getProfile(req: express.Request, res: express.Response) {
        ProfileModel.findOne({ where: {userId: res.locals.userId}})
            .then(profile => res.json(profile))
            .catch((error) => {
                res.status(500);
                res.json({message: error});
            });
    }
}

export default new ProfileController();
