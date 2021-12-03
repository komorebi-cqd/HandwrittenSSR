const path = require("path");

const baseConfig = require("./webpack.base");
const nodeExternals = require("webpack-node-externals");
const {merge} = require("webpack-merge");
const serverConfig = {
    target: "node",
    devtool: false,
    entry: "./src/server",
    output: {
        filename: "server.js"
    },
    externals: [nodeExternals()],
}

module.exports = merge(baseConfig,serverConfig);