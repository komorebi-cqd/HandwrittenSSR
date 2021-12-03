const path = require("path");
const baseConfig = require("./webpack.server");
const webpackMerge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const clientConfig = {
    devtools: "source-map",
    entry: "./src/client",
    output:{
        filename: "js/bundle.[hash:5].js",
        path: path.resolve(__dirname,"./public")
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:["**/*","!favicon.ico"]
        })
    ]
}

module.exports = webpackMerge(baseConfig,clientConfig);