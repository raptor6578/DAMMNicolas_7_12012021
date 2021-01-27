"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_controller_1 = __importDefault(require("../controllers/profile.controller"));
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
class ProfileRoute {
    constructor() {
        this.router = express_1.default.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/', auth_middleware_1.default, profile_controller_1.default.getProfile);
    }
}
exports.default = new ProfileRoute();
