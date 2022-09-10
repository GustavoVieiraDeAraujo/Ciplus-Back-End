import { Model, DataTypes} from "sequelize";
import { sequelize } from "../config/ConfigDataBase.js";

export class Plans extends Model{}

Plans.init({
    type:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
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
    benefits:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            notNull: true,
        },
    },
    duration_months:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            notNull: true,
        },
    },
},{
    sequelize,
    modelName: "Plans",
    timestamps: false
})
