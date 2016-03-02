'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver');

gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/styles'))
    .pipe(livereload());
});

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      fallback: 'index.html'
    }));
});

gulp.task('watch', function() {
  livereload.listen({ basePath: 'dist' });
  gulp.watch('less/*.less', ['less']);
});

