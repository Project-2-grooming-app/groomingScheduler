const User = require('./user');
const Schedule = require('./schedule')
const Reservation = require('./reservation')

Schedule.belongsTo(User,{
    foreignKey: 'user_id'
});

Reservation.belongsTo(Schedule,{
    foreignKey: 'schedule_id'
});

module.exports = {User, Schedule, Reservation };