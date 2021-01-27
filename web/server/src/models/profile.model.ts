import { DataTypes, Model } from 'Sequelize';
import sequelize from '../db';

interface IProfile {
    userId: number;
    lastName: string;
    firstName: string;
    birthDate?: Date;
    picture?: string;
}

class Profile extends Model<IProfile> {
    public id!: number;
    public userId!: number;
    public lastName!: string;
    public firstName!: string;
    public birthDate!: Date;
    public picture!: string;
}

Profile.init({
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
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

Profile.sync();

export default Profile;
