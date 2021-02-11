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
        this.router.post('/add-comment', auth, publicationController.addComment);
        this.router.get('/get-comment/:id/:offset/:limit', auth, publicationController.getComment);
        this.router.post('/add-vote', auth, publicationController.addVote);
        this.router.delete('/delete-vote/:id', auth, publicationController.deleteVote);
        this.router.delete('/:id', auth, publicationController.deletePublication);
        this.router.get('/:offset/:limit', publicationController.getPublications);
        this.router.post('/', auth, multer, publicationController.postPublication);
    }
}

export default new PublicationRoute();
