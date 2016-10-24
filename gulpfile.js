// Modules
var gulp   = require('gulp')
,   uglify = require('gulp-uglify')
,   rename = require('gulp-rename')
,   sass   = require('gulp-sass')
,   less   = require('gulp-less')
;

// Build slick.js file
gulp.task('build-js', function(){
  gulp
    .src('slick/slick.js')
    .pipe(uglify({
      preserveComments: 'license'
    }))
    .pipe(rename('slick.min.js'))
    .pipe(gulp.dest('slick/'));
});

// Build slick.scss file
gulp.task('build-scss', function(){
  gulp
    .src('slick/slick.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('slick/'));
});

// Build slick.less file
gulp.task('build-less', function(){
  gulp
    .src('slick/slick.less')
    .pipe(less())
    .pipe(gulp.dest('slick/'));
});

gulp.task('default', ['build-js']);
