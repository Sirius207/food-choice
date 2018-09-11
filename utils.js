const CONFIG = require('./config');

function randomPickAStore(price = 'low') {
  const id = Math.floor(Math.random() * CONFIG.stores[price].length);
  return CONFIG.stores[price][id];
}

module.exports = {randomPickAStore};