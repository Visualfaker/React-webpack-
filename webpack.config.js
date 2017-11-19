const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    devtool:"eval-source-map",
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                use:{
                    loader:"babel-loader"
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        // options: {
                        //     modules: true
                        // }
                    }
                ]     
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin([__dirname + "/dist"]),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.tmpl.html",    //此处不能+.  
            minify:{
                removeComments:true,
                collapseWhitespace:true,
                minifyJS:true,
                minifyCSS:true
            },
        })
    ],
    devServer:{
        compress:true,
        port:8181   
    },
};