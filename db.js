import { DataTypes, Sequelize } from "sequelize";
import {username, password, database} from "./config.js"
const sequelize = new Sequelize({
  dialect: "postgres",
  username,
  password,
  database,
});
// Person model
const Person = sequelize.define("Person", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
// Post model
const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Person,
      key: "id",
    },
  },
});
export default sequelize;
