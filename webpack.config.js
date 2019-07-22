const path = require('path');

module.exports = (env, argv) => ({
  entry: path.resolve(__dirname, 'src/containers/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public/assets/js/'),
    filename: argv.mode === 'development' ? 'app.js' : 'app.min.js'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react'],
              [
                '@babel/preset-env',
                {
                  debug: argv.mode === 'development',
                  useBuiltIns: 'usage',
                  corejs: 3,
                  targets: {
                    browsers: ['Android >= 4', 'last 3 versions', 'ie 11']
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
});
