var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

gulp.task('styles', function() {

    gulp.src('css/*.scss')
        .pipe(sass({
            errLogToConsole: true

        }))

        .pipe(autoprefixer(
            {
                browsers: [
                    '> 1%',
                    'last 2 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
                cascade: false
            }
        ))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload())

});



//Watch task
gulp.task('default',function() {
    livereload.listen();
    gulp.watch('css/*.scss',['styles']);
});