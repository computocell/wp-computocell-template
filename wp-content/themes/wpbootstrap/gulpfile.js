var gulp = require(`gulp`);
var sass = require('gulp-sass');

//task para o sass
gulp.task('sass', function() {
    return gulp.src('style.scss')
      .pipe(sass({outputStyle :'compressed'}).on('error',sass.logError) )
      .pipe(gulp.dest('css'))
});




gulp.task('default', done => {
console.log('Olá Mundo');
done();
});