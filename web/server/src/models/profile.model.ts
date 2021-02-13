import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Profile extends Model {
    public id!: number;
    public lastName!: string;
    public firstName!: string;
    public birthDate!: Date;
    public picture!: string;
    public userId!: number;
}

Profile.init({
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Profile',
});

export default Profile;
