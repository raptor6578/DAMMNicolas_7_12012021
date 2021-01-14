"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.signup = function (req, res) {
        res.send('ok');
    };
    AuthController.prototype.login = function (req, res) {
        res.send('ok');
    };
    return AuthController;
}());
exports.default = new AuthController();
