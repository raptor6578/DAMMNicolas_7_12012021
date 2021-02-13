import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import Vote from "./vote.model";

class Publication extends Model {
    public id!: number;
    public UserId!: number;
    public content!: string;
    public picture!: string;
    public Vote!: Vote[];
}

Publication.init({
    content: {
        type: DataTypes.STRING(1000),
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
