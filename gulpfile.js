const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');


function style() {
    return gulp.src('./src/components/scss/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./src/components/css'))
}

function styleSrc() {
    return gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./src'))
}


exports.style = style;
exports.styleSrc = styleSrc;