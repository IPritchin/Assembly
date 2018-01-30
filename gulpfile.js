'use strict'

global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del : require('del'),
    gp  : require('gulp-load-plugins')()
};

//модули
$.path.task.forEach(function(taskPath) {
    require(taskPath)();
})
