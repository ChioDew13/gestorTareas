const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', //punto de entrada de tu aplicacion
    output: {
        filename: 'bundle.js', //nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/, //estamos haciendo expresion regular regex para identificar archivos css
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.js$/, //para identificar archivos javascrip
                exclude: /node_module/, //exluyendo la carpeta nodemodules
                use: {
                    loader:'babel-loader', //loader para transpilar js moderno a js compatible con mas navegadores
                    options: {
                        presets: ['@babel/preset-env'], //preset de babel para convertir js modernos a versiones mas antiguas
                    }
                }
            }
        ]        
    },
    devtool: 'source-map', // facilitar la depuracion
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true, //habilitando comprension 
        port: 9000, //puerto del servidor de desarrollo
    }
}