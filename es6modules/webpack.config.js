const webpack = require('webpack'); //old-fashoined import (non ES6)
const nodeEnv = process.env.NODE_ENV || 'production'; //enviornment variable for production stage

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js' //where the scripting starts
  },
  output: {
    filename: '_build/bundle.js' //final compiled script
  },
  module: {
    rules: [{
      test: /\.js$/, //take all JS files
      exclude: /node_modules/, //ignore that big folder
      loader: 'babel-loader', //what's gonna process the script
      query: {
        presets: ['es2015-native-modules'] //declare loader settings/presets
      }
    }]
  },
  plugins: [
    //passes enviornment variable to other modules here
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
}
