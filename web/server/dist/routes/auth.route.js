"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const admin_middleware_1 = __importDefault(require("../middleware/admin.middleware"));
class AuthRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post('/signup', auth_controller_1.default.signup);
        this.router.post('/login', auth_controller_1.default.login);
        this.router.post('/set-admin', auth_middleware_1.default, admin_middleware_1.default, auth_controller_1.default.setAdmin);
        this.router.get('/get-all-users', auth_controller_1.default.getAllUsers);
        this.router.delete('/delete/:id', auth_middleware_1.default, admin_middleware_1.default, auth_controller_1.default.delete);
    }
}
exports.default = new AuthRoute();
