const gulp = require('gulp')
const sass = require('gulp-sass')

function styles (){
    return gulp.src('index.scss')
    .pipe(sass())
    .pipe(gulp.dest('/public'))
}

// gulp.task('styles', function() {
//     return gulp.src('index.scss')
//                .pipe(sass())
//                .pipe(gulp.dest('/public'))

// })


gulp.task('default', ['styles'])