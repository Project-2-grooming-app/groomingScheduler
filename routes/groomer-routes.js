const router = require('express').Router();
const { User, Reservation, Schedule } = require('../models');

router.get('/', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
      } else {
        try {
            const reserveData = await Reservation.findAll({
                include: [
                    {
                        model: Schedule,
                        attributes: ['id', 'date_time']
                    }
                ]
            })
            const scheduleData = await Schedule.findAll({
                where: {
                    available: true
                }
            })
            
            const reservations = reserveData.map((reserve => 
                reserve.get({ plain: true}))
            )
            const schedules = scheduleData.map((sched => 
                sched.get({ plain: true})))
            console.log(reservations)
            res.render('groomers', { reservations, schedules, loggedIn: req.session.loggedIn})
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
      }
})

module.exports = router