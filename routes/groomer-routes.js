const router = require('express').Router();
const { User, Reservation, Schedule } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('groomers')
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router