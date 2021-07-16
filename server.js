const express = require('express');
const app = express();
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/api'))

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:3001/'));
});
