
const path = require('path');
const webpack = require('webpack'); // Importamos webpack
require('dotenv').config(); // Cargamos las variables de entorno del archivo .env

module.exports = {
  // Punto de entrada de tu aplicación React
  entry: './src/index.js',

  output: {
    // Directorio de salida para los archivos empaquetados
    path: path.resolve(__dirname, 'public'),
    // Nombre del archivo de salida
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        // Regla para procesar archivos JavaScript y JSX
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // Regla para procesar archivos CSS
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Añadimos la sección de plugins
  plugins: [
    // DefinePlugin permite crear constantes globales que se pueden configurar en tiempo de compilación.
    new webpack.DefinePlugin({
      // Reemplazamos 'process.env' en el código del cliente con un objeto
      // que contiene las variables de entorno.
      'process.env': JSON.stringify(process.env)
    })
  ],

  resolve: {
    // Resuelve automáticamente estas extensiones de archivo
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000,
    hot: true,
    historyApiFallback: true,
    allowedHosts: 'all',
  },
};
