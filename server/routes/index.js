const router = require('express').Router();

router.use('/express_backend', require('./user'));

module.exports = router;