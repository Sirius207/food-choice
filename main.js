const cronJob = require('./cronjob');

const cronTime = process.event.TIME;
cronJob(cronTime);
