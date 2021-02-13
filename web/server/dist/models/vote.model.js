"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class Vote extends sequelize_1.Model {
}
Vote.init({}, {
    sequelize: db_1.default,
    modelName: 'Vote',
});
exports.default = Vote;
