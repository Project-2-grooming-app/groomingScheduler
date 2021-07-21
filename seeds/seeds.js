const sequelize = require('../config/connection');
const { User, Schedule, Reservation } = require('../models');

const userData = require('./userData.json');
const reserveData = require('./reserveData.json');
const scheduleData = require('./scheduleData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Schedule.bulkCreate(scheduleData, {
    individualHooks: true,
    returning: true,
  });
  await Reservation.bulkCreate(reserveData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
