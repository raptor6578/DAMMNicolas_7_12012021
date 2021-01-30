import express from 'express';
import bodyParser from "body-parser";
import sanitize from 'mongo-sanitize';
import * as dotenv from 'dotenv';
dotenv.config();
import db from './db';

import authRoutes from './routes/auth.route';
import profileRoutes from './routes/profile.route';
import publicationRoutes from './routes/publication.route';

if (process.env.EXPRESS_PORT &&
    process.env.MYSQL_HOST &&
    process.env.MYSQL_DB &&
    process.env.MYSQL_USERNAME &&
    process.env.MYSQL_PASSWORD &&
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

    db.authenticate()
        .then(() => {
            console.log('Connexion à la base de données établie.');
        }).catch((error) => {
            console.error('Impossible de se connecter à la base de données:', error);
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
    app.use('/api/profile', profileRoutes.router);
    app.use('/api/publication', publicationRoutes.router)

} else {
    console.log(`Le fichier de configuration ".env" se trouvant à la racine du projet est incomplet, il doit contenir les champs suivants:
   EXPRESS_PORT, MYSQL_HOST, MYSQL_DB, MYSQL_USERNAME, MYSQL_PASSWWORD, SECRET_JWT, ALLOW_ORIGIN`);
}
