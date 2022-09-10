import { Model, DataTypes} from "sequelize";
import { sequelize } from "../config/ConfigDataBase.js";

export class Tickets extends Model{}

Tickets.init({
    type:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: true,
        },
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            notNull: true,
        },
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            notNull: true,
        },
    },
    score:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            notNull: true,
        },
    }
},{
    sequelize,
    modelName: "Tickets",
    timestamps: false
})

