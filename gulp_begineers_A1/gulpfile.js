var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');

//Running via default
/**
gulp.task('default' , function() {
	gulp.src('source/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('destination'));
});
$ gulp
**/

//Running via script
/**
gulp.task('scripts' , function() {
	gulp.src('source/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('destination'));
});
// $ gulp scripts
**/

//Concatinate the output files
//npm install gulp-concat
/**
gulp.task('scripts' , function() {
	gulp.src('source/*.js')
	.pipe(concat('all.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('destination2'));
});
// gulp scripts
**/
// Now running two tasks simultaneously 

gulp.task('coffee' , function() {
	return gulp.src('source/*.coffee')
	.pipe(coffee())
	.pipe(gulp.dest('source'));
});

gulp.task('scripts',['coffee'] , function() {
	return gulp.src('source/*.js')
	.pipe(concat('min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('destination3'));
});





//  gulp.task('sass', function () {
// return gulp.src('./sass/**/*.scss')
//   .pipe(sass().on('error', sass.logError))
//    .pipe(gulp.dest('./css'));
// });
 
