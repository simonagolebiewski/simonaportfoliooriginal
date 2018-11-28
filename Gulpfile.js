var gulp = require('gulp');
    minify = require('gulp-clean-css')
    watch = require('gulp-watch');
    uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		notify = require('gulp-notify'),
    sass = require('gulp-sass');

//style paths
var sassFiles = 'assets/styles/sass/**/*.scss',
    cssDest = 'assets/styles/css/';

gulp.task('styles', function() {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest))
        .pipe(notify("Stylesheets Compiled Successfully"));
});

//Watch task
gulp.task('default',function() {
    gulp.watch(sassFiles,['styles']);
});

var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  runSequence('sass', 'images', 'fonts', callback);
});
