var gulp = require('gulp');
//var handlebars = require('handlebars');
var ghPages = require('gulp-gh-pages');
var browserSync = require('browser-sync').create();

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('hello', function() {
  console.log('Hi!!');
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('app/css/*.css', browserSync.reload);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
