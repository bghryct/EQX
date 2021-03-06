module.exports = ({ env }) => ({
  host: env('APP_HOST', '0.0.0.0'),
  port: 1337,
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
