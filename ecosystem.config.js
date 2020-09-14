module.exports = {
  apps: [{
    name: "Hull Sellsy",
    script: "dist/index.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "200M",
    env: {
      NODE_ENV: "staging",
    },
    env_production: {
      NODE_ENV: "production",
    },
  }],
};
