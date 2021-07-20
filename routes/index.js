const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-route');
const groomerRoutes = require('./groomer-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/groomer', groomerRoutes)

module.exports = router;