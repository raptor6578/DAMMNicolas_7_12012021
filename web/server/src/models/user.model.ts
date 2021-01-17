import { DataTypes, Model } from 'Sequelize';
import sequelize from '../db';
import bcrypt from 'bcrypt';

interface IUser {
    email: string
    password: string
    admin?: boolean
}

class User extends Model<IUser> {
    public id!: number;
    public email!: string;
    public password!: string;
    public admin!: boolean;
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

User.sync();

export default User;
