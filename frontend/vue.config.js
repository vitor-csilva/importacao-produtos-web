const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all", // Allows any host, fixing "Invalid Host header" error
  },
});
