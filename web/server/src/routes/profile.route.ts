import express from 'express';
import profileController from '../controllers/profile.controller';
import authMiddleware from '../middleware/auth.middleware';

class ProfileRoute {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.get('/', authMiddleware, profileController.getProfile);
    }
}

export default new ProfileRoute();
