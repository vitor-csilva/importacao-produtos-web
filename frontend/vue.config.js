const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all", // Allows any host, fixing "Invalid Host header" error
    host: "0.0.0.0",      // Accept external connections
    port: 8080,           // Frontend server port
    client: {
      webSocketURL: 'auto://import-products.demo.com/ws', // Fix WebSocket issues
    }
  },
});
