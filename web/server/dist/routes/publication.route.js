"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const multer_middleware_1 = __importDefault(require("../middleware/multer.middleware"));
const publication_controller_1 = __importDefault(require("../controllers/publication.controller"));
class PublicationRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/get-my-publications', auth_middleware_1.default, publication_controller_1.default.getMyPublications);
        this.router.post('/add-comment', auth_middleware_1.default, publication_controller_1.default.addComment);
        this.router.get('/get-comment/:id/:offset/:limit', publication_controller_1.default.getComment);
        this.router.post('/add-vote', auth_middleware_1.default, publication_controller_1.default.addVote);
        this.router.delete('/delete-comment/:idPublication/:idComment', auth_middleware_1.default, publication_controller_1.default.deleteComment);
        this.router.delete('/delete-vote/:id', auth_middleware_1.default, publication_controller_1.default.deleteVote);
        this.router.delete('/:id', auth_middleware_1.default, publication_controller_1.default.deletePublication);
        this.router.get('/:offset/:limit', publication_controller_1.default.getPublications);
        this.router.post('/', auth_middleware_1.default, multer_middleware_1.default, publication_controller_1.default.postPublication);
    }
}
exports.default = new PublicationRoute();
