"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
var AuthRoute = /** @class */ (function () {
    function AuthRoute() {
        this.router = express_1.default.Router();
        this.initializeRoutes();
    }
    AuthRoute.prototype.initializeRoutes = function () {
        this.router.post('/signup', auth_controller_1.default.signup);
        this.router.post('/login', auth_controller_1.default.login);
    };
    return AuthRoute;
}());
exports.default = new AuthRoute();
