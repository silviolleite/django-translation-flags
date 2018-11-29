'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');



gulp.task('less', function () {
  return gulp.src('./assets/less/django-translation-flags.less')
    .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./django-translation-flags/static/css'));
});


gulp.task('minify-css', function() {
  return gulp.src(['./django-translation-flags/static/css/django-translation-flags.css'])
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./django-translation-flags/static/css'))
});

gulp.task('watch', function () {
  gulp.watch('./assets/less/*.less', ['less']);
  gulp.watch('./django-translation-flags/static/css/django-translation-flags.css', ['minify-css']);
});

gulp.task('dev', function(){
    runSequence('less', 'minify-css', 'watch')
})