import { DataTypes, Model } from 'Sequelize';
import sequelize from '../db';
import bcrypt from 'bcrypt';
import Publication from './publication.model';
import Profile from './profile.model';
import Comment from './comment.model';
import Vote from './vote.model';

class User extends Model {
    public id!: number;
    public email!: string;
    public password!: string;
    public admin!: boolean;
    public Profile!: Profile
}

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'User',
});

User.beforeCreate((user) => {
    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => {
            throw new Error();
        });
});

User.hasOne(Profile, { onDelete: 'CASCADE' });
Profile.belongsTo(User);

User.hasMany(Comment, {onDelete: 'CASCADE'});
Comment.belongsTo(User);
Comment.belongsTo(Publication);

User.hasMany(Publication, { onDelete: 'CASCADE' });
Publication.belongsTo(User);
Publication.belongsTo(Profile, {foreignKey: 'UserId'});
Publication.hasMany(Comment, {as: 'Comment', foreignKey: 'PublicationId', onDelete: 'CASCADE'});
Publication.hasMany(Vote, {as: 'Vote', foreignKey: 'PublicationId', onDelete: 'CASCADE'});

User.hasMany(Vote, { onDelete: 'CASCADE' });
Vote.belongsTo(User);
Vote.belongsTo(Publication);

export default User;
