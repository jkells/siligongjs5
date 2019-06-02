const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
    ],
};
