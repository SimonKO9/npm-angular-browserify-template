// gulp
var gulp = require('gulp');

// plugins
var requireDir = require('require-dir');
requireDir('gulp');

gulp.task('dev', ['copy-static-dev', 'browserify-dev', 'less-dev', 'connect-dev', 'watch-dev']);

gulp.task('dist', ['jshint', 'copy-static-dist', 'less-dist', 'browserify-dist']);

gulp.task('default', ['copy-static', 'browserify']);
