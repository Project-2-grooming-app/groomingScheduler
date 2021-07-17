const router = require('express').Router();
const { User, Reservation, Schedule } = require('../models');

// GET all reservations for homepage
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll()
        res.render('login')
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})

module.exports = router