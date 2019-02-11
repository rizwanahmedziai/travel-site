var gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested');

gulp.task('default', function() {
  console.log('Gulp Task found!');
});

gulp.task('html', function() {
  console.log('Something Usefull with HTML!');
});
// Tree important concepts: gulp.src(), gulp.dest()
// and gulp.pipe();

gulp.task('styles', function() {
  // console.log('Styles Task runing here!');
  return gulp
    .src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/tmp/styles.css'));
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
