const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./client/index.jsx",
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "client", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|jpeg|gif|woff|ttf|eot$/,
        use: ["file-loader"],
      },
    ]
  }
};

// module.exports = {
//   entry: __dirname + '/client/index.jsx',
//   output: {
//     filename: 'bundle.js',
//     path: __dirname + '/client/dist'
//   },
//   module: {
//     rules: [
//       {
//         test: [/\.jsx$/],
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//           }
//         }
//       },
//       // {
//       //   test: /\.css$/i,
//       //   use: ["style-loader", "css-loader"],
//       // },
//       // {
//       //   test: /\.png|svg|jpg|gif$/,
//       //   use: ["file-loader"]
//       // }
//     ],
//     loaders: [
//       { test: /\.css$/, loader: "style-loader!css-loader" },
//     ]
//   },
//   mode: 'development'
// };
