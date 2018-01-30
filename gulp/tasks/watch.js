"use strict"

module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch('./sourse/style/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./sourse/template/*.pug', $.gulp.series('pug'));
    });
};