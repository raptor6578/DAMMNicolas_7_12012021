"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("Sequelize");
const db_1 = __importDefault(require("../db"));
class Publication extends Sequelize_1.Model {
}
Publication.init({
    content: {
        type: Sequelize_1.DataTypes.STRING(1000),
        allowNull: false
    },
    picture: {
        type: Sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: db_1.default,
    modelName: 'Publication',
});
exports.default = Publication;
