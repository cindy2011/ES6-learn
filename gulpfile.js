var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); // 加载所有的插件

gulp.task("default", function() {
    return gulp.src("src/**/*.js")
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});
