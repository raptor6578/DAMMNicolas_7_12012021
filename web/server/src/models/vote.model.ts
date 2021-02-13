import { Model } from 'sequelize';
import sequelize from '../db';

class Vote extends Model {
    public id!: number;
    public UserId!: number;
    public PublicationId!: number;
}

Vote.init({}, {
    sequelize,
    modelName: 'Vote',
});

export default Vote;
