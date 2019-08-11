const path = require('path');
module.exports = {
  mode: 'development',
  // devtool:'source-map',
  entry: path.join(__dirname, 'lib', 'index'),
  // watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".js",".ts", ".tsx"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test:/\.css$/,
        use:[{
          loader:'style-loader',
        },{
          loader:'css-loader',
        }]
      }
    ]
  }
};