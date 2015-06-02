var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var browserify = require('browserify');
var watch = require('gulp-watch');
var source = require('vinyl-source-stream');

gulp.task('jshint', function () {
    gulp
        .src(['./app/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('reload', function () {
    connect.reload();
});

gulp.task('clean', function () {
    gulp.src('./dist/*')
        .pipe(clean({force: true}));

    gulp.src('./dev/*')
        .pipe(clean({force: true}));
});