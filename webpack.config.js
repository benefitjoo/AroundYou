module.exports = {
    entry: './client/src/index.js',

    output: {
        path: __dirname + '/client/public/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080,
        contentBase: __dirname + '/client/public/'
    },
    module: {
            loaders: [
                {
                  test: /\.js$/,
                  loaders: ['react-hot', 'babel?' + JSON.stringify({
                      cacheDirectory: true,
                      presets: ['es2015', 'react']
                  })],
                  exclude: /node_modules/
                },
                // { 
                //     test: /\.css$/, 
                //     loader: "style-loader!css-loader" 
                // },
                // { 
                //     test: /\.png$/, 
                //     loader: "url-loader?limit=100000" 
                // },
                // { 
                //     test: /\.jpg$/, 
                //     loader: "file-loader" 
                // },
                // {
                //     test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                //     loader: 'url?limit=10000&mimetype=application/font-woff'
                //  },
                // {
                //     test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                //     loader: 'url?limit=10000&mimetype=application/octet-stream'
                // },
                // {
                //     test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                //     loader: 'file'
                // },
                // {
                //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                //     loader: 'url?limit=10000&mimetype=image/svg+xml'
                // }

            ]
        }
};
