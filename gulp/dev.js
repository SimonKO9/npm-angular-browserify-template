var gulp = require('gulp');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var browserify = require('browserify');
var watch = require('gulp-watch');
var source = require('vinyl-source-stream');
var minifyCSS = require('gulp-minify-css');
var less = require('gulp-less');
var concat = require('gulp-concat');
var path = require('path');


gulp.task('copy-static-dev', function () {
    gulp
        .src('src/**/*.{html,css}')
        .pipe(gulp.dest('./dev'));
});


gulp.task('watch-dev', function () {
    gulp.watch('src/js/**/*.js', ['browserify-dev', 'reload']);
    gulp.watch('src/less/**/*.less', ['less-dev', 'reload']);
});


gulp.task('browserify-dev', function () {
    return browserify('./src/js/app.js')
        .transform('bulkify')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dev/js/'));
});

gulp.task('copy-static-dev', function () {
    gulp
        .src('src/**/*.{html,css}')
        .pipe(gulp.dest('./dev'));
});

gulp.task('connect-dev', function () {
    connect.server({
        root: 'dev/',
        port: 8888,
        livereload: true
    });
});

gulp.task('less-dev', function () {
    gulp.src('./src/less/**/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dev/css'));
});