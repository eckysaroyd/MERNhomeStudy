const path = require("path");

const  htmlWebpackPlugin = require("html-webpack-plugin");

module.export ={
  entry: path.join(_dirname,"src","index.js"),
  output: {
    path: path.join(_dirname,"build"),
    filename: "index.bundle.js"
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    modules: [path.resolve(_dirname,"src"),"node_modules"]
  },
  devServer: {
    contentBase: path.join(_dirname,"src")
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(_dirname,"src","index.html")
    })
  ]
};
