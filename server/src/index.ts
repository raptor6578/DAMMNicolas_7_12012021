import express from 'express';
import bodyParser from "body-parser";
import sanitize from 'mongo-sanitize';
import * as dotenv from 'dotenv';

import authRoutes from './routes/auth.route';

dotenv.config();

if (process.env.EXPRESS_PORT &&
    process.env.SECRET_JWT &&
    process.env.ALLOW_ORIGIN) {

    const config = {
        expressPort: process.env.EXPRESS_PORT,
        allowOrigin: process.env.ALLOW_ORIGIN
    };

    const app = express();
    app.listen(config.expressPort, () => {
        console.log(`Le serveur vient de démarrer sur le port ${config.expressPort}.`);
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.setHeader('Access-Control-Allow-Origin', config.allowOrigin);
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    });

    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        req.body = sanitize(req.body);
        req.query = sanitize(req.query);
        req.params = sanitize(req.params);
        next();
    });

    app.use('/images', express.static('images'));
    app.use('/api/auth', authRoutes.router);

} else {
    console.log(`Le fichier de configuration ".env" se trouvant à la racine du projet est incomplet, il doit contenir les champs suivants:
   EXPRESS_PORT, SECRET_JWT, ALLOW_ORIGIN`);
}
