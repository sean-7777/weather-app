const { join, resolve } = require("path");
module.exports = {
  entry: {
    main: "./src/index/",
  },
  output: {
    filename: "[name].bundle.js",
    path: join(__dirname, "public"),
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/i,
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ["node_modules", resolve(__dirname, "src")],
    alias: {
      "@": resolve(__dirname, "src/components/"),
    },
  },
  mode: "development",
  devtool: "eval-source-map",
  context: __dirname,
};
