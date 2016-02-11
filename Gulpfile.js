var gulp = require( 'gulp' );
var postcss = require( 'gulp-postcss' );
var autoprefixer = require( 'autoprefixer' );

gulp.task( 'css', function () {
    var processors = [
        autoprefixer( { browsers: ['last 1 version'] } )
    ];
    return gulp.src( './style.scss' )
        .pipe( postcss( processors ) )
        .pipe( gulp.dest( './' ) );
} );
