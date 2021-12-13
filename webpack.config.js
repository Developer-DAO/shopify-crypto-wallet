const path = require("path");

module.exports = {
  entry: "./theme-app-extension/crypto-wallet.js",
  output: {
    path: path.resolve(__dirname, "./theme-app-extension/assets"),
    filename: "crypto-wallet.min.js",
    // publicPath,
  },
  plugins: [],
  mode: "production",
  module: {},
};
