'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Actor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Actor.init({
        actor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        last_update: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Actor',
        timestamps: false,
        tableName: 'actor'
    });
    return Actor;
};

// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('mysql::memory:');

// class Actor extends Model { }

// Actor.init({
//     actor_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true
//     },
//     first_name: DataTypes.STRING,
//     last_name: DataTypes.STRING,
//     last_update: DataTypes.DATE
// }, {
//     sequelize,
//     modelName: 'Actor',
//     timestamps: false,
//     tableName: 'actor'
// });

// export default Actor