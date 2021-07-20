const router = require('express').Router()
const {Reservation, Schedule} = require('../../models')

router.post('/', async (req, res) => {
    try {
        const reserveData = await Reservation.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          pet_name: req.body.pet_name,
          phone_number: req.body.phone_number,
          notes: req.body.notes,
          schedule: 1
        });
        
        res.render("homepage");

      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})

router.put('/:id', async (req, res) => {
    try {
        const updateSchedule = Schedule.update({
            available: false
        },
        {
            where: {
                id: req.params.id
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
module.exports = router