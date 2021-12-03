
const path = require("path");
const baseConfig = require("./webpack.base");
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const serverConfig = {
    target: "node",
    devtool: "eval-cheap-module-source-map",
    entry: "./src/server",
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "isomorphic-style-loader", {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            esModule: false,
                        }
                    }
                ]
            }
        ]
    }
}

module.exports = merge(baseConfig, serverConfig);