var gulp         = require('gulp');
var prefix       = require('gulp-autoprefixer');
var sass         = require('gulp-sass');
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function() {
  return gulp.src('./src/sass/*.scss')
    .on('error', handleErrors)
    .pipe(sass({ includePaths: ['./node_modules/sass-list-maps'] }))
    .pipe(prefix())
    .pipe(gulp.dest('./build'));
});
