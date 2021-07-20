const router = require('express').Router()
const { Schedule} = require('../../models')

router.post('/', async (req, res) => {
    try {
        const scheduleData = await Schedule.create({
            date_time: req.body.date_time,
            available: true,
            user_id: req.session.userid
        })
        res.status(200).json(scheduleData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})



module.exports = router