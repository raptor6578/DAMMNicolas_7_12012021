import express from 'express';
import authController from '../controllers/auth.controller';
import auth from '../middleware/auth.middleware';

class AuthRoute {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.post('/signup', authController.signup);
        this.router.post('/login', authController.login);
        this.router.delete('/delete/:id', auth, authController.delete);
    }
}

export default new AuthRoute();
