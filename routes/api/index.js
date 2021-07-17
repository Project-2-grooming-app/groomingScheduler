const router = require('express').Router()
const userRoute = require('./userRoutes')
const reserveRoutes = require('./reserveRoutes')

router.use('/user',userRoute)
router.use('/reserve',reserveRoutes)

module.exports = router;