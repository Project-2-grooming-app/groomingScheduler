const router = require('express').Router()
const {User} = require('../../models')


// CREATE new user
router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id
      req.session.username = dbUserData.username
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/*
router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
    //   req.session.save(() => {
    //     req.session.loggedIn = true;
  console.log(req.body)
        res.status(200).json(dbUserData);
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll()
      res.status(200).json(userData)
    } catch (err) {
      res.status(500).json(err);
    }
  });
  */ 

  // Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await User.findOne( { where: {
      password: req.body.password,
    },
  }
);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userid = dbUserData.id
      req.session.username = dbUserData.username
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


  module.exports = router
  

