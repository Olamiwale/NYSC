import { DataTypes, Model } from "sequelize"; 
import { sequelize } from "../config/db";
import { User } from "./user.model";


export class Post extends Model {
  public id!: number;
  public content!: string;
  public userId!: number;
}


Post.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true,},
    content: { type: DataTypes.STRING, allowNull: false, },
    userId: { type: DataTypes.INTEGER, allowNull: false, }
  },

{
    sequelize,
    modelName: "Post",
    tableName: "posts",
  }
);

Post.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE"});
User.hasMany(Post, { foreignKey: "userId"});