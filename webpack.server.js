const path = require("path");

const baseConfig = require("./webpack.base");
const nodeExternals = require("webpack-node-externals");
const webpackMerge = require("webpack-merge");
const serverConfig = {
    target: "node",
    devtool: false,
    entry: "./src/server",
    output: {
        filename: "server.js"
    },
    externals: [nodeExternals()],
}

module.exports = webpackMerge(baseConfig,serverConfig);