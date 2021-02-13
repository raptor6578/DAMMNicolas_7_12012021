"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const publication_model_1 = __importDefault(require("./publication.model"));
const profile_model_1 = __importDefault(require("./profile.model"));
const comment_model_1 = __importDefault(require("./comment.model"));
const vote_model_1 = __importDefault(require("./vote.model"));
class User extends sequelize_1.Model {
}
User.init({
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: sequelize_1.DataTypes.BOOLEAN,
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
User.hasMany(comment_model_1.default, { onDelete: 'CASCADE' });
comment_model_1.default.belongsTo(User);
comment_model_1.default.belongsTo(publication_model_1.default);
User.hasMany(publication_model_1.default, { onDelete: 'CASCADE' });
publication_model_1.default.belongsTo(User);
publication_model_1.default.belongsTo(profile_model_1.default, { foreignKey: 'UserId' });
publication_model_1.default.hasMany(comment_model_1.default, { as: 'Comment', foreignKey: 'PublicationId', onDelete: 'CASCADE' });
publication_model_1.default.hasMany(vote_model_1.default, { as: 'Vote', foreignKey: 'PublicationId', onDelete: 'CASCADE' });
User.hasMany(vote_model_1.default, { onDelete: 'CASCADE' });
vote_model_1.default.belongsTo(User);
vote_model_1.default.belongsTo(publication_model_1.default);
exports.default = User;
