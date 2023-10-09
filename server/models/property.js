import { Model, DataTypes } from "sequelize";
import { sequelize } from "../utils/db.js";

class Property extends Model {}

Property.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'property'
})

export default Property