import express from 'express';
import profileController from '../controllers/profile.controller';
import auth from '../middleware/auth.middleware';
import multer from '../middleware/multer.middleware';

class ProfileRoute {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.get('/', auth, profileController.getProfile);
        this.router.put('/', auth, multer, profileController.putProfile);
    }
}

export default new ProfileRoute();
