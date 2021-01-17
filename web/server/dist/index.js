"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongo_sanitize_1 = __importDefault(require("mongo-sanitize"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const db_1 = __importDefault(require("./db"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
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
    const app = express_1.default();
    app.listen(config.expressPort, () => {
        console.log(`Le serveur vient de démarrer sur le port ${config.expressPort}.`);
    });
    db_1.default.authenticate()
        .then(() => {
        console.log('Connexion à la base de données établie.');
    }).catch((error) => {
        console.error('Impossible de se connecter à la base de données:', error);
    });
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', config.allowOrigin);
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    });
    app.use((req, res, next) => {
        req.body = mongo_sanitize_1.default(req.body);
        req.query = mongo_sanitize_1.default(req.query);
        req.params = mongo_sanitize_1.default(req.params);
        next();
    });
    app.use('/images', express_1.default.static('images'));
    app.use('/api/auth', auth_route_1.default.router);
}
else {
    console.log(`Le fichier de configuration ".env" se trouvant à la racine du projet est incomplet, il doit contenir les champs suivants:
   EXPRESS_PORT, MYSQL_HOST, MYSQL_DB, MYSQL_USERNAME, MYSQL_PASSWWORD, SECRET_JWT, ALLOW_ORIGIN`);
}
