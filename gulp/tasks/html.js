const browserSync = require('browser-sync');
const del = require('del');
const gulp = require('gulp');
const changed = require('gulp-changed');

const config = require('../config');

// ----------------------------------------
//   Task: Build: html
// ----------------------------------------

gulp.task('build:html', () => {
    return gulp.src(config.paths.html.src)
        .pipe(changed(config.paths.html.dest))
        .pipe(gulp.dest(config.paths.html.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ----------------------------------------
//   Task: Watch: html
// ----------------------------------------

gulp.task('watch:html', () => {
    return gulp.watch(config.paths.html.watch, gulp.series('build:html'));
});

// ----------------------------------------
//   Task: Clean: html
// ----------------------------------------

gulp.task('clean:html', () => {
    return del(config.paths.html.clean);
});