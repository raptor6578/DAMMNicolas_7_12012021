import { DataTypes, Model } from 'Sequelize';
import sequelize from '../db';

class Comment extends Model {
    public id!: number;
    public UserId!: number;
    public PublicationId!: number;
    public content!: string;
}

Comment.init({
    content: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Comment',
});

export default Comment;
