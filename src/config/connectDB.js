import { Sequelize } from 'sequelize'
require('dotenv').config()

const sequelize = new Sequelize('web-advanced', 'root', null, {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  logging: false,
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('-------------Connected!! Connection has been established successfully-------------');
    } catch (error) {
        console.error('!!!!!!!!!Connect Database Failed!! Unable to connect to the database:', error, "!!!!!!!!!");
    }
}

module.exports = connectDB;