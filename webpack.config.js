const path = require('path');

module.exports = {
  // Entry point for your React application
  entry: './src/index.js',

  output: {
    // Output directory for bundled files
    path: path.resolve(__dirname, 'public'),
    // Name of the output bundle file
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        // Rule to process JavaScript and JSX files
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // Rule to process CSS files
        test: /\.css$/,
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader',   // Interprets @import and url()
        ],
      },
      // You might need more rules here for other file types like images, fonts, etc.
      // Example for images:
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      // },
    ],
  },

  resolve: {
    // Automatically resolve these file extensions
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    // Serve static files from the 'public' directory
    static: path.join(__dirname, 'public'),
    // Port for the development server
    port: 3000,
    // Enable Hot Module Replacement (HMR)
    hot: true,
    // Fallback to index.html for client-side routing
    historyApiFallback: true,
    // Disable host check to allow access from anywhere in dev (useful for some environments)
    // This was already in your config, kept it here.
    allowedHosts: 'all',
  },
};
