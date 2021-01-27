"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function default_1(req, res, next) {
    if (req.headers.authorization) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            // @ts-ignore
            const decodedToken = jsonwebtoken_1.default.verify(token, process.env.SECRET_JWT);
            res.locals.userId = decodedToken.id;
            if (req.body.userId && req.body.userId !== res.locals.userId) {
                res.status(401);
                return res.json({ message: `Vous n'êtes pas autorisé à utiliser cet ID.` });
            }
            next();
        }
        catch (error) {
            res.status(401);
            return res.json({ message: error.message });
        }
    }
    else {
        res.status(401);
        return res.json({ message: `Vous devez être identifié pour accéder à ce contenu.` });
    }
}
exports.default = default_1;
