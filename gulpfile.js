const gulp = require('gulp')
const image = require('gulp-image')
const gulpSeo = require('gulp-seo')
const gulpSitemap = require('gulp-sitemap')
const gulpRobots = require('gulp-robots')

const {
  exec
} = require('child_process')

gulp.task('image', () =>
  gulp
    .src('./build/default/src/image/*')
    .pipe(image())
    .pipe(gulp.dest('./build/default/src/image/'))
)

gulp.task('serve', () =>
  exec('polymer serve build/default', (err, stdout) => console.log(err, stdout))
)
gulp.task('build', () =>
  exec('polymer build', (err, stdout) => {
    if (err) {
      console.log(stdout)
    }
  })
)

gulp.task('seo',
  gulp.parallel(
    () => gulp
      .src('build/default/index.html')
      .pipe(
        gulpSeo({
          list: ['og', 'se', 'schema', 'twitter'],
          meta: {
            title: "A DaniPani's (Daniel Panero) Portfolio",
            description: "Hi, I'm Daniel, a junior Developer and welcome to my Portfolio, which is completely written in ES6 Features with LitElement and Polymer.",
            author: 'DaniPani Portfolio',
            image: 'https://danipani.github.io/src/image/abstract-wallpaper-47342-48869-hd-wallpapers.jpg',
            site_name: 'DaniPani Portfolio',
            type: 'website',
            concact: 'panero.daniel@gmail.com',
            url: 'https://danipani.github.io'
          }
        })
      )
      .pipe(gulp.dest('build/default/')),
    () => gulp
      .src('build/default/**/*.html', {
        read: false
      })
      .pipe(gulpSitemap({
        siteUrl: 'https://danipani.github.io/'
      }))
      .pipe(gulp.dest('./build/default')),
    () => gulp
      .src('index.html')
      .pipe(gulpRobots({
        useragent: '*',
        allow: ['/'],
        disallow: []
      }))
      .pipe(gulp.dest('./build/default/'))
  )
)

gulp.task('clean', () =>
  exec(
    'd: & cd D:\\Projects\\Web\\danipani.github.io\\ &  git rm ./** -f -q --ignore-unmatch'
  )
)
gulp.task('move', () =>
  gulp
    .src('./build/default/**/*')
    .pipe(gulp.dest('D:/Projects/Web/danipani.github.io/'))
)
gulp.task('commit', () =>
  exec(
    `d: & cd D:\\Projects\\Web\\danipani.github.io\\ & git add -A --no-ignore-removal & git commit -m ${Math.random()
      .toString(36)
      .replace(/[^a-z0-9]+/g, '')
      .substr(0, 128)} & git push`
  )
)

gulp.task('default', gulp.series('build', 'seo', gulp.parallel('image', 'serve')))

gulp.task(
  'deploy',
  gulp.series('build', gulp.parallel('image', 'clean', 'seo'), 'move', 'commit')
)
