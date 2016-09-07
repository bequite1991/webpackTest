 var path = require('path');
 //import Path from 'path';
 var config = {
   entry: './app/main.js',
	
   output: {
      path:path.resolve(__dirname,'./build'),
      filename: 'index.js',
   },
	
   devServer: {
      port: 7777
   },
	
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         }
      }]
   }
	
}

module.exports = config;