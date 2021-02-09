"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("Sequelize");
const db_1 = __importDefault(require("../db"));
class Comment extends Sequelize_1.Model {
}
Comment.init({
    content: {
        type: Sequelize_1.DataTypes.STRING(1000),
        allowNull: false
    },
}, {
    sequelize: db_1.default,
    modelName: 'Comment',
});
exports.default = Comment;
