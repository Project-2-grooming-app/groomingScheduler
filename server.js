const express = require('express');
const app = express();
const sequelize = require('./config/connection');
/* const exphbs = require('express-handlebars');
*/
const PORT = process.env.PORT || 3306;

/*
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/api'))

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:3306/'));
});
