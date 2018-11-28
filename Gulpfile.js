// var gulp = require('gulp');
//     minify = require('gulp-clean-css')
//     watch = require('gulp-watch');
//     uglify = require('gulp-uglify'),
// 		concat = require('gulp-concat'),
// 		notify = require('gulp-notify'),
//     sass = require('gulp-sass');
//
// gulp.task('styles', function() {
//     gulp.src('sass/**/*.scss')
//         .pipe(sass().on('error', notify.onError("SCSS compilation error"))
//         .pipe(gulp.dest('./css/'))
//         .pipe(notify("Stylesheets Compiled Successfully")));
//         return;
// });
//
// //Watch task
// gulp.task('default',function() {
//     gulp.watch('sass/**/*.scss',['styles']);
// });



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
