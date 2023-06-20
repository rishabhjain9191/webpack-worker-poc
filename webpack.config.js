const path = require("path");
const webpack = require("webpack");

module.exports = [
  {
    mode: "development",
    name: "my-worker",
    entry: "./worker.js",
    target: ["webworker", "es2020"],
    experiments: { outputModule: true },
    output: {
      module: true,
      libraryTarget: "module",
      filename: "worker-[contenthash].js",
      path: path.resolve(__dirname, "dist"),
    },
  },
  {
    mode: "development",
    dependencies: ["my-worker"],
    target: ["web"],
    entry: ["./main.js"],
    output: {
      path: path.resolve(__dirname, "dist"),
      clean: false,
      filename: "main.js",
      publicPath: "/dist/",
    },
    target: "browserslist: last 2 Chrome versions",
  },
];
