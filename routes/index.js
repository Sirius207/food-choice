const express = require('express');
const router = express.Router();

const UTILS = require('../utils');


router.get('/food', (req, res, next) => {
  const filter = {
    price: req.query.price || 'low',
  }
  const store = UTILS.randomPickAStore(filter);
  const msg = {
    "messages": [{
      "text": store
    }, ]
  }
  res.json(msg)
});

module.exports = router;