var gulp = require('gulp'),
  	bundle = require('gulp-bundle-assets'),
  	del = require('del');


// How to configure:
//
// Notes: https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
gulp.task('clean', function () {
  return del([
  	'./dist/**/*'
    //'dist/report.csv',
    // here we use a globbing pattern to match everything inside the `mobile` folder
    //'dist/mobile/**/*',
    // we don't want to clean this file though so we negate the pattern
    //'!dist/mobile/deploy.json'
  ]);
});

// How to configure: 
//
// NPM: https://www.npmjs.com/package/gulp-bundle-assets
// CONFIG: https://github.com/dowjones/gulp-bundle-assets/blob/master/examples/full/bundle.config.js
gulp.task('bundle:resources', function() {
	return gulp.src('./bundle.config.js')
		.pipe(bundle())
		.pipe(gulp.dest('./dist/assets'));
});

gulp.task('copy', function(){
	return gulp.src([
			'./src/*.html',
			'./LICENSE',
			'./README.md'])
  		.pipe(gulp.dest('./dist'));
})

gulp.task('bundle', ['bundle:resources']);


// Clean, and then bundle
gulp.task('default', ['clean', 'bundle', 'copy']);