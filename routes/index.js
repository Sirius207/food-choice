const express = require('express');
const router = express.Router();

const UTILS = require('../utils');


router.get('/food', (req, res, next) => {
  const store = UTILS.randomPickAStore(req.query.price);
  const msg = {
    "messages": [
      {"text": store},
    ]
   }
  res.json(msg)
});

module.exports = router;
