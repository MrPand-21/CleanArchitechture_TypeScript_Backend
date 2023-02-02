const path = require('path');
const webpack = require('webpack');

require('dotenv').config({ path: './env/local.app.env' });

const lazyImports = [
  'class-transformer/storage'
];
module.exports = {

  entry: './src/Main.ts',
  mode: 'development',
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      "path": require.resolve("path-browserify"),
      "url": require.resolve("url/"),
      "util": require.resolve("util/"),
      "stream": false,
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "os": false,
      "zlib": false,
      "assert": require.resolve("assert/"),
      "fs": require.resolve("browserify-fs"),
      "timers": false,
      "https": require.resolve("https-browserify")
    },
    modules: ['node_modules']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new webpack.IgnorePlugin({
      checkResource(resource) {
        if (lazyImports.includes(resource)) {
          try {
            require.resolve(resource)
          } catch (err) {
            return true
          }
        }
        return false
      },
    }),

  ]
};