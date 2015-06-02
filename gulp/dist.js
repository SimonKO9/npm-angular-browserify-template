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

gulp.task('browserify-dist', function () {
    return browserify('./src/js/app.js')
        .transform('bulkify')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy-static-dist', function () {
    gulp
        .src('src/**/*.{html,css}')
        .pipe(gulp.dest('./dist'));
});

gulp.task('connectDist', function () {
    connect.server({
        root: 'dist/',
        port: 9999,
        livereload: false
    });
});

gulp.task('less-dist', function () {
    gulp.src('./src/less/**/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/css'));
});