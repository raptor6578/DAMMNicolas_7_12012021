"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("Sequelize");
const db_1 = __importDefault(require("../db"));
class Vote extends Sequelize_1.Model {
}
Vote.init({}, {
    sequelize: db_1.default,
    modelName: 'Vote',
});
exports.default = Vote;
