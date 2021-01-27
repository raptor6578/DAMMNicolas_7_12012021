import { DataTypes, Model } from 'Sequelize';
import sequelize from '../db';

interface IPublication {
    userId: number;
    content: string;
}

class Publication extends Model<IPublication> {
    public id!: number;
    public userId!: number;
    public content!: string;
}

Publication.init({
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Publication',
});

Publication.sync();

export default Publication;
