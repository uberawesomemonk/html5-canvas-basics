module.exports = {
    bundle: {
        main: {
            scripts: [
                './src/app.js'
            ],
            styles: './src/**/*.css',
            options: {
                rev: false
            }
        },
        vendor: {
            scripts: './node_modules/jquery/dist/jquery.js',
            options: {
                rev: false
            }
        }
    }
};
