import { DataTypes, Model } from 'Sequelize';
import sequelize from '../db';

class Publication extends Model {
    public id!: number;
    public UserId!: number;
    public content!: string;
    public picture!: string;
}

Publication.init({
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Publication',
});

export default Publication;
