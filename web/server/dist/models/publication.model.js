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
    userId: {
        type: Sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    content: {
        type: Sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db_1.default,
    modelName: 'Publication',
});
Publication.sync();
exports.default = Publication;
