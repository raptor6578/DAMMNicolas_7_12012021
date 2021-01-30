import express from 'express';
import auth from '../middleware/auth.middleware';
import multer from '../middleware/multer.middleware';
import publicationController from '../controllers/publication.controller';

class PublicationRoute {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.get('/get-my-publications', auth, publicationController.getMyPublications);
        this.router.get('/', auth, publicationController.getAllPublications);
        this.router.post('/', auth, multer, publicationController.postPublication);
    }
}

export default new PublicationRoute();
