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
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongo_sanitize_1 = __importDefault(require("mongo-sanitize"));
var dotenv = __importStar(require("dotenv"));
var sequelize_1 = require("sequelize");
var auth_route_1 = __importDefault(require("./routes/auth.route"));
dotenv.config();
if (process.env.EXPRESS_PORT &&
    process.env.MYSQL_HOST &&
    process.env.MYSQL_DB &&
    process.env.MYSQL_USERNAME &&
    process.env.MYSQL_PASSWORD &&
    process.env.SECRET_JWT &&
    process.env.ALLOW_ORIGIN) {
    var config_1 = {
        expressPort: process.env.EXPRESS_PORT,
        mysqlHost: process.env.MYSQL_HOST,
        mysqlDb: process.env.MYSQL_DB,
        mysqlUsername: process.env.MYSQL_USERNAME,
        mysqlPassword: process.env.MYSQL_PASSWORD,
        allowOrigin: process.env.ALLOW_ORIGIN
    };
    var app = express_1.default();
    app.listen(config_1.expressPort, function () {
        console.log("Le serveur vient de d\u00E9marrer sur le port " + config_1.expressPort + ".");
    });
    var sequelize = new sequelize_1.Sequelize(config_1.mysqlDb, config_1.mysqlUsername, config_1.mysqlPassword, {
        host: config_1.mysqlHost,
        dialect: 'mysql'
    });
    sequelize.authenticate()
        .then(function () {
        console.log('Connection has been established successfully.');
    }).catch(function (error) {
        console.error('Unable to connect to the database:', error);
    });
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', config_1.allowOrigin);
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    });
    app.use(function (req, res, next) {
        req.body = mongo_sanitize_1.default(req.body);
        req.query = mongo_sanitize_1.default(req.query);
        req.params = mongo_sanitize_1.default(req.params);
        next();
    });
    app.use('/images', express_1.default.static('images'));
    app.use('/api/auth', auth_route_1.default.router);
}
else {
    console.log("Le fichier de configuration \".env\" se trouvant \u00E0 la racine du projet est incomplet, il doit contenir les champs suivants:\n   EXPRESS_PORT, MYSQL_HOST, MYSQL_DB, MYSQL_USERNAME, MYSQL_PASSWWORD, SECRET_JWT, ALLOW_ORIGIN");
}
