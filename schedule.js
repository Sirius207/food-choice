const cron = require('node-cron');
const pushNotify = require('./notify');

const cronTime = '54 23 * * *';

function cronJob(cronTime) {
  cron.schedule(cronTime, () => {
    console.log('push')
    pushNotify();
  });
}

cronJob(cronTime);
