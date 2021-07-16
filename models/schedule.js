const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Schedule extends Model {}

Schedule.init(
    {
        date_time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     },
        // },
        // reservation_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true,
        //     references: {
        //         model: 'reservation',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'schedule',
    }
)

module.exports = Schedule