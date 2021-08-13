const router = require('express').Router();

router.use('/api', require('./user-routes'));
router.use('/api/games/mines', require('./mines-routes'));

module.exports = router;