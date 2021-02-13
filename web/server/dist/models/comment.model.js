"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class Comment extends sequelize_1.Model {
}
Comment.init({
    content: {
        type: sequelize_1.DataTypes.STRING(1000),
        allowNull: false
    },
}, {
    sequelize: db_1.default,
    modelName: 'Comment',
});
exports.default = Comment;
