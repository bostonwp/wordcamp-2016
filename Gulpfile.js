var gulp = require( 'gulp' );
var sass = require('gulp-sass');
var postcss = require( 'gulp-postcss' );
var autoprefixer = require( 'autoprefixer' );

gulp.task( 'css', function () {
	var processors = [
		autoprefixer( { browsers: ['last 2 versions'] } )
	];
	return gulp.src( './sass/style.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( postcss( processors ) )
		.pipe( gulp.dest( '.' ) );
} );

gulp.task( 'watch', function() {
	gulp.watch( 'sass/**/*.scss', [ 'css' ] );
} );

gulp.task( 'default', [ 'watch', 'css' ] );
