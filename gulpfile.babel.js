import gulp from 'gulp';
var $ = require('gulp-load-plugins')(); // 加载所有的插件

gulp.task("compile", () => {
	return gulp.src("src/**/*.js")
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

var watcher = gulp.watch('src/**/*.js', ['compile']);
watcher.on('change', (event) => {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task("default", ['compile'])
