'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');



gulp.task('less', function () {
  return gulp.src('./less/django-internationalization.less')
    .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./css'));
});


gulp.task('minify-css', function() {
  return gulp.src(['./css/django-internationalization.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css'))
});

gulp.task('watch', function () {
  gulp.watch('./less/*.less', ['less']);
  gulp.watch('./css/django-internationalization.css', ['minify-css']);
});

gulp.task('dev', function(){
    runSequence('less', 'minify-css', 'watch')
})