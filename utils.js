const CONFIG = require('./config');

function randomPickAStore(filter = {
  price: 'low'
}) {
  const id = Math.floor(Math.random() * CONFIG.stores[filter.price].length);
  return CONFIG.stores[filter.price][id];
}

module.exports = {randomPickAStore};