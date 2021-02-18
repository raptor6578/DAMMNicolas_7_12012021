"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    if (!res.locals.admin) {
        res.status(401);
        return res.json({ message: `Vous n'êtes pas autorisé à accéder à ce contenu.` });
    }
    next();
}
exports.default = default_1;
