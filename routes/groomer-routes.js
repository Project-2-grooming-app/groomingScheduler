const router = require('express').Router();
const { User, Reservation, Schedule } = require('../models');

router.get('/', async (req, res) => {
    try {
        const reserveData = await Reservation.findAll({
            include: [
                {
                    model: Schedule,
                    attributes: ['id', 'date_time']
                }
            ]
        })
        
        const reservations = reserveData.map((reserve => 
            reserve.get({ plain: true}))
        )
        console.log(reservations)
        res.render('groomers', { reservations, loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router