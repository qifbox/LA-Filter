const path = require('path');

module.exports = {
    mode: 'production',
    entry: '../js/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    }
}
