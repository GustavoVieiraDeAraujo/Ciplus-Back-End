import { sequelize } from "../config/ConfigDataBase.js";
import { Model, DataTypes } from "sequelize";
import { Plans } from "./Plans.js";

export class Users extends Model{}

Users.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
        },
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            notNull: true,
        },
    },
    birthday:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true,
            notNull: true,
        },
    },
    cell_phone_number:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            is: /\([0-9]{2}\) [9][1-9]{4}[-][1-9]{4}/
        },
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: true,
            is: /[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}/,
            len: 14
        },
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: true,
            isEmail: true,
        },
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            min: 10,
        },
    },
    amount_points:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: true,
            isInt: true,
        },
    }
},{
    sequelize,
    modelName:"Users",
    timestamps: false
})

// Estabelendo relação "Usuario tem somente 1 plano" => 1:1
Users.belongsTo(Plans,{
    constraints: true,
    foreignKey: "plan_id"
})

// Estabelendo relação "Planos tem varios usuarios" => 1:N
Plans.hasMany(Users,{
    foreignKey: "plan_id"
})

