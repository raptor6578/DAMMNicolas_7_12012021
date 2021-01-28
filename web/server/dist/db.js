"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("Sequelize");
// @ts-ignore
exports.default = new Sequelize_1.Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: false
});
