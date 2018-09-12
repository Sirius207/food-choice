module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "Launch",
      script    : "main.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        TIME: '50 11 * * *',
      }
    },
    {
      name      : "Dinner",
      script    : "main.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        TIME: '30 17 * * *',
      }
    },
    {
      name      : "API",
      script    : "bin/www",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production",
        PROD_PORT: 3000,
      }
    }
  ]
}
