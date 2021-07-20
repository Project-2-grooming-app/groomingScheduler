const router = require('express').Router()
const userRoute = require('./userRoutes')
const reserveRoutes = require('./reserveRoutes')
const scheduleRoutes = require('./scheduleRoutes')

router.use('/user',userRoute)
router.use('/reserve',reserveRoutes)
router.use('/schedule',scheduleRoutes)

module.exports = router;