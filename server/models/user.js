import { Model, DataTypes } from "sequelize";
import {sequelize} from '../utils/db.js'

class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [4, 10]}
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        validate: {len: [5, 10]},
        allowNull: false,  
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profileImage: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        allowNull: true
    }
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'user'
})

export default User