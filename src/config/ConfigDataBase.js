import Sequelize from "sequelize";

export const sequelize = new Sequelize ("crud-db", "user", "password",{
    dialect:"sqlite",
    host:"./src/infra/DataBase.sqlite"
})