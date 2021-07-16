const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
class Reservation extends Model {
}
Reservation.init(
    {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        schedule_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'schedule',
              key: 'id',
            },        
        },
       booked: {
           type: DataTypes.BOOLEAN,
           defaultValue: false,
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservation',
    
    }
);

module.exports = Reservation;

