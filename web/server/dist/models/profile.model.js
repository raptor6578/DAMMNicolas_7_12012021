"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("Sequelize");
const db_1 = __importDefault(require("../db"));
class Profile extends Sequelize_1.Model {
}
Profile.init({
    userId: {
        type: Sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    lastName: {
        type: Sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: Sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: Sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    picture: {
        type: Sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: db_1.default,
    modelName: 'Profile',
});
Profile.sync();
exports.default = Profile;
