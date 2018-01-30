'use strict'

module.exports = function() {

    $.gulp.task('pug', function() {
        //подать .css из папки css с любым уровнем уложенности
        return $.gulp.src('./sourse/template/*.pug')
        .pipe($.gp.pug({pretty: true}))
        .on('error', $.gp.notify.onError( function(error) {
            return {
                title: 'Pug',
                message: error.message
            }
        }))
        .pipe($.gulp.dest('./build/'));
    });

}


