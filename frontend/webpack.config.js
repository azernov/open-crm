config = require('./config.js');
module.exports = {
    mode: 'development',
    entry: {
        app: './' + config.dir.source.js + 'app.js'
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
            test: /\.js/,
            use: 'import-glob'
        }]
    }
};
