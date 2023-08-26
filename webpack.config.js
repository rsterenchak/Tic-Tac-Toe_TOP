const path = require("path");

module.exports = {
    entry: './src/gamelogic.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),

    },
    mode: 'production'


}