"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize_1 = require("Sequelize");
const db_1 = __importDefault(require("../db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const publication_model_1 = __importDefault(require("./publication.model"));
const profile_model_1 = __importDefault(require("./profile.model"));
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
User.hasOne(profile_model_1.default, { onDelete: 'CASCADE' });
profile_model_1.default.belongsTo(User);
User.hasMany(publication_model_1.default, { onDelete: 'CASCADE' });
publication_model_1.default.belongsTo(User);
publication_model_1.default.belongsTo(profile_model_1.default, { foreignKey: 'UserId' });
User.sync();
profile_model_1.default.sync();
publication_model_1.default.sync();
exports.default = User;
