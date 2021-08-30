const express = require('express');

/* Apps Routers import */
/* End Routers Import */

const router = express.Router();

const { Test } = require('../apps/handlers');

router.get('/test/', Test.test);

module.exports = router;
