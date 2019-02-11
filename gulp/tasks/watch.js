var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  //Set up the server and set the base Directory where index.html lives.
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    }
  });
  watch('./app/index.html', function() {
    // Disabled as I'm using VSCODE LiveServer. So no need to have two live servers running. But this one does the same thing.
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
});

// Create a task to automatically inject the saved CSS into the browser without reloading
// gulp.task('New Task', ['Dependency Task'], Callback Function() {});
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});
