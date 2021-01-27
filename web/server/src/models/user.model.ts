import { DataTypes, Model } from 'Sequelize';
import sequelize from '../db';
import bcrypt from 'bcrypt';
import Publication from './publication.model';
import Profile from './profile.model';

interface IUser {
    email: string;
    password: string;
    admin?: boolean;
    Profile?: Profile;
}

class User extends Model<IUser> {
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

Publication.belongsTo(User, {
    foreignKey: 'id',
    as: 'users'
});

Profile.belongsTo(User, {
    foreignKey: 'id',
    as: 'users'
});

User.hasOne(Profile, {
    foreignKey: 'userId',
    as: 'Profile',
    onDelete: 'CASCADE'
});

User.hasMany(Publication, {
    foreignKey: 'userId',
    as: 'Publication',
    onDelete: 'CASCADE'
});

User.sync();

export default User;
