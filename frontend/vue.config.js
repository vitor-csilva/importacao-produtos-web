const { defineConfig } = require("@vue/cli-service");
const dotenv = require("dotenv");
const webpack = require("webpack");

// Load environment variables
dotenv.config();

// Extract only the domain from VUE_APP_API_URL
const VERSION_IMPORT_PRODUCTS = process.env.VUE_APP_VERSION_IMPORT_PRODUCTS || "1.0.0";
const API_URL = process.env.VUE_APP_API_URL || "";
const DOMAIN = API_URL.replace(/https?:\/\//, "").split("/")[0]; // Get only "import-products.demo.com"

console.log("🚀 Extracted WebSocket Domain:", DOMAIN);
console.log("📦 Version Import Products:", VERSION_IMPORT_PRODUCTS);

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    host: "0.0.0.0",
    port: 8080,
    client: {
      webSocketURL: `auto://${DOMAIN}/ws`, // Correct WebSocket URL
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.VUE_APP_VERSION_IMPORT_PRODUCTS": JSON.stringify(VERSION_IMPORT_PRODUCTS),
      }),
    ],
  },
});
