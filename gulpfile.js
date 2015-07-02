var gulp = require('gulp'); 

// Include Our Plugins
var rename = require('gulp-rename');
var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
//var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(['app/css/main.scss'])
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(rename({suffix:'.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('app/css/'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['app/css/**/*.scss' ], ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);