"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class Profile extends sequelize_1.Model {
}
Profile.init({
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    picture: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: db_1.default,
    modelName: 'Profile',
});
exports.default = Profile;
