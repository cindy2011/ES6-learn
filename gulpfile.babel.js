import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';
var $ = require('gulp-load-plugins')(); // 加载所有的插件

gulp.task("compile", () => {
    return gulp.src("src/**/*.js")
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

gulp.task('watchES6', () => {
    var watcher = gulp.watch('src/**/*.js', ['compile']);
    watcher.on('change', (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// gh-pages 的demo的html的路径会问题
// gulp.task('demo', () => {
//     return gulp.src(['./dist/**/*', './src/**/*'])
//         .pipe(ghPages());
// });




gulp.task("default", ['compile', 'watchES6']);
