const express = require('express');
const router = express.Router();

const CONFIG = require('../config');

function pickAStore() {
  const id =  Math.floor(Math.random() * CONFIG.stores.length);
  return CONFIG.stores[id]
}

router.get('/food', (req, res, next) => {
  const store = pickAStore();
  const msg = {
    "messages": [
      {"text": store},
    ]
   }
  res.json(msg)
});

module.exports = router;
