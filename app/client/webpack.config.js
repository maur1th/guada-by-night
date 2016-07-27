module.exports = {
  // context: `${__dirname}/common/ui/client`,
  entry: './index.js',
  output: {
    path: './static/js',
    filename: 'app.js',
  },
  module: {
    loaders: [
      { loader: 'babel-loader', exclude: /node_modules/ },
      { loader: 'eslint-loader', exclude: /node_modules/ },
      { loader: 'json-loader', include: /\.json$/ },
    ],
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx'],
  },
}
