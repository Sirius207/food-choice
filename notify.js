const request = require('request');
const CONFIG = require('./config');
const UTILS = require('./utils');

const BOT = CONFIG.bot;
const BASE_URL = `https://api.chatfuel.com/bots/${BOT.BOT_ID}/users/${BOT.USER_ID}/send?chatfuel_token=${BOT.chatfuel_token}&chatfuel_block_id=${BOT.PUSH_BLOCK_ID}`;



function getFullURL() {
  const store_1 = UTILS.randomPickAStore();
  const storeURL = `&store_1=${store_1}`;
  return BASE_URL + storeURL;
}

function sendRequest(url) {
  return new Promise((resolve, reject) => {
    request.post(encodeURI(url), (err, httpResponse, body) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        const res = JSON.parse(body);
        if (!res.success) {
          console.log(res);
        }
        resolve();
      }
    });
  });
}


async function pushNotify() {
  try {
    const FullURL = getFullURL();
    console.log(FullURL)
    sendRequest(FullURL)
  } catch (err) {
    console.log(err);
  }
}


module.exports = pushNotify;