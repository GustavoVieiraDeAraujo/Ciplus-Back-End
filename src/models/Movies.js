import { Model, DataTypes} from "sequelize";
import { sequelize } from "../config/ConfigDataBase.js";

export class Movies extends Model{}

Movies.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: true,
        },
    },
    creation_date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate:{
            isDate:true,
            notNull: true,
        },
    },
    synopsis:{
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate:{
            notNull: true
        },
    },
    classification:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: true
        },
    },
    genre:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: true
        },
    },
    duration_minutes:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    movie_sessions:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            is: /([01]?[0-9]|2[0-3]):[0-5][0-9][/]/g,
            notNull: true
        },
    }
},{
    sequelize,
    modelName: "Movies",
    timestamps: false
})
