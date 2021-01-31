import jwt from 'jsonwebtoken';
import express from 'express';

export default function(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (req.headers.authorization) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            // @ts-ignore
            const decodedToken: any = jwt.verify(token, process.env.SECRET_JWT);
            res.locals.UserId = decodedToken.id;
            res.locals.admin = decodedToken.admin;
            if (req.body.UserId && req.body.UserId !== res.locals.UserId) {
                res.status(401);
                return res.json({message: `Vous n'êtes pas autorisé à utiliser cet ID.`});
            }
            next();
        }
        catch (error) {
            res.status(401);
            return res.json({message: error.message});
        }
    } else {
        res.status(401);
        return res.json({message: `Vous devez être identifié pour accéder à ce contenu.`});
    }
}
