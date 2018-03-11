module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // Telegram bot service
    {
      name      : 'bot',
      script    : 'bot/index.js',
      autorestart: true
    },

    // Web service
    {
      name      : 'web',
      script    : 'web/index.js',
      autorestart: true
    }
  ],
};
