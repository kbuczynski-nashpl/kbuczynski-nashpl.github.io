'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var scss = require('gulp-scss');
 
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/styles.css'));
});

gulp.task("scss", function () {
        gulp.src("./scss/*.scss")
	.pipe(scss())
	.pipe(gulp.dest("./css/styles.css"));
    });
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
