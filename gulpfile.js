const gulp = require('gulp')
const image = require('gulp-image')
const {
  exec
} = require('child_process');

gulp.task('image', () => gulp.src('./build/default/src/image/*').pipe(image()).pipe(gulp.dest('./build/default/src/image/')))
gulp.task('manifest', () => gulp.src('./manifest.json').pipe(gulp.dest('./build/default/')))

gulp.task('serve', () => exec('polymer serve build/default', (err, stdout) => console.log(stdout)))
gulp.task('build', () => exec('polymer build', (err, stdout) => console.log(stdout)))

gulp.task('clean', () => exec('for %i in (D:\\Projects\\Web\\danipani.github.io\\*) do if not %i == .gitignore del /Q /F %i'))
gulp.task('move', () => gulp.src('./build/default/**/*').pipe(gulp.dest('D:/Projects/Web/danipani.github.io/')))
gulp.task('commit', () => exec(`d: & cd D:\\Projects\\Web\\danipani.github.io\\ & git commit -a -m ${Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 128)} & git push`))

gulp.task('default', gulp.series('build', gulp.parallel('image', 'manifest', 'serve')))

gulp.task('deploy', gulp.series('build', gulp.parallel('image', 'manifest'), 'clean', 'move', 'commit'))