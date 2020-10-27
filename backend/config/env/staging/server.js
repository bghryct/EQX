module.exports = ({ env }) => ({
  host: process.env.APP_HOST || '0.0.0.0',
  port: process.env.PORT || 1337,
  production: true,
  proxy: {
    enabled: false
  },
  cron: {
    enabled: false
  },
  admin: {
    autoOpen: false
  }
});