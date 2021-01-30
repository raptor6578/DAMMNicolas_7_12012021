import { DataTypes, Model } from 'Sequelize';
import sequelize from '../db';
import bcrypt from 'bcrypt';
import Publication from './publication.model';
import Profile from './profile.model';

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

User.hasMany(Publication, { onDelete: 'CASCADE' });
Publication.belongsTo(User);
Publication.belongsTo(Profile, {foreignKey: 'UserId'});

User.sync();
Profile.sync();
Publication.sync();

export default User;
