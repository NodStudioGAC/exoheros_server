const express = require('express');

const Heros = require('../heros/routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Test');
});

Heros.routes(router);

module.exports = router;
