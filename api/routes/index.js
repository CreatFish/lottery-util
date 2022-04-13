const middleware = require('@blocklet/sdk/lib/middlewares');
const e = require('express');
const router = require('express').Router();

router.use('/user', middleware.user(), (req, res) => res.json(req.user || {}));
router.use('/did/sendPrize', middleware.user(), (req, res) => res.json(req.user || {}));

module.exports = router;
