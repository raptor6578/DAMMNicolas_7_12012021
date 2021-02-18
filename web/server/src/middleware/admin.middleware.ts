import express from 'express';

export default function(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!res.locals.admin) {
        res.status(401);
        return res.json({message: `Vous n'êtes pas autorisé à accéder à ce contenu.`});
    }
    next();
}
