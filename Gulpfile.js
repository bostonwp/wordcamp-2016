var gulp = require( 'gulp' );
var sass = require('gulp-sass');
var postcss = require( 'gulp-postcss' );
var autoprefixer = require( 'autoprefixer' );
var watch = require('gulp-watch');

gulp.task( 'css', function () {
	var processors = [
		autoprefixer( { browsers: ['last 2 versions'] } )
	];
	return gulp.src( './style.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( postcss( processors ) )
		.pipe( gulp.dest( './' ) );
} );

gulp.task( 'default', function (cb) {
	watch( './style.scss', function() {
		var processors = [
			autoprefixer( { browsers: ['last 2 versions'] } )
		];
		gulp.src( './style.scss' )
			.pipe( sass().on( 'error', sass.logError ) )
			.pipe( postcss( processors ) )
			.pipe( gulp.dest( './' ) )
			.on( 'end', cb );
	} );
} );
