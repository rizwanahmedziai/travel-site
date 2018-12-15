var gulp = require('gulp'),
  watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('Gulp Task found!');
});

gulp.task('html', function() {
  console.log('Something Usefull with HTML!');
});
gulp.task('styles', function() {
  console.log('Styles Task runing here!');
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
