const cron = require('node-cron');
const pushNotify = require('./notify');

function cronJob(cronTime) {
  cron.schedule(cronTime, () => {
    console.log('push')
    pushNotify();
  });
}

module.exports = cronJob;
