var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {
  browserSync({
    server: {
      baseDir: ['./']
    },
    files: [
      'index.html',
      './css/**'
    ]
  });
});
