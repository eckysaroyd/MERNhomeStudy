const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
module.export = {
  entry: path.join(_dirname, "src", "index.js"),
  output: {
    path: path.join(_dirname, "build"),
    filename: "index.bundle.js"
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    modules: [path.resolve(_dirname, "src"), "node_modules"]
  },
  devServer: {
    ContentBase: path.join(_dirname, "src")
  },
  plugins: [
    new htmlwebpackplugin({
      template: path.join(_dirname, "src", "index.html")
    })
  ]
};
