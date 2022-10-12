module.exports = {
    entry: './index.js'
};

const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'my-first-webpack.bundle.js',
    },
    module: {
        rules: [{ test: /\.js$/, exclude: 'raw-loader'}],
    }
}