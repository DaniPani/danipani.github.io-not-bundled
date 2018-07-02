const gulp = require('gulp')
const image = require('gulp-image')
const {
  exec
} = require('child_process');

gulp.task('image', () => gulp.src('./build/default/src/image/*').pipe(image()).pipe(gulp.dest('./build/default/src/image/')))

gulp.task('serve', () => exec('polymer serve build/default', (err, stdout) => console.log(stdout)))
gulp.task('build', () => exec('polymer build', (err, stdout) => console.log(stdout)))

gulp.task('clean', () => exec('d: & cd D:\\Projects\\Web\\danipani.github.io\\ &  git rm ./** -f -q --ignore-unmatch'))
gulp.task('move', () => gulp.src('./build/default/**/*').pipe(gulp.dest('D:/Projects/Web/danipani.github.io/')))
gulp.task('commit', () => exec(`d: & cd D:\\Projects\\Web\\danipani.github.io\\ & git add -A --no-ignore-removal & git commit -m ${Math.random().toString(36).replace(/[^a-z0-9]+/g, '').substr(0, 128)} & git push`))

gulp.task('default', gulp.series('build', gulp.parallel('image', 'serve')))

gulp.task('deploy', gulp.series('build', gulp.parallel('image', 'clean'), 'move', 'commit'))