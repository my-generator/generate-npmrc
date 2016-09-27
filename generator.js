/**
 * @file: generator
 * @author: gejiawen
 * @date: 9/27/16 15:59
 * @description: generator
 */
/**
 * @file: index.js
 * @author: gejiawen
 * @date: 9/27/16 15:40
 * @description: index.js
 */

var isValid = require('is-valid-app');

module.exports = function (app) {
    if (!isValid(app, 'generate-npmrc')) {
        return
    }

    app.task('default', ['npmrc'])

    app.task('npmrc', function (cb) {
        return app.src('templates/npmrc', {cwd: __dirname})
            .pipe(app.conflicts(app.cwd))
            .pipe(app.dest(function (file) {
                file.basename = '.npmrc'
                return app.cwd
            }))
    })
}
