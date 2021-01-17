"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("Sequelize");
const db_1 = __importDefault(require("../db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class User extends Sequelize_1.Model {
}
User.init({
    email: {
        type: Sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: Sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize: db_1.default,
    modelName: 'User',
});
User.beforeCreate((user) => {
    return bcrypt_1.default.hash(user.password, 10)
        .then(hash => {
        user.password = hash;
    })
        .catch(err => {
        throw new Error();
    });
});
User.sync();
exports.default = User;
