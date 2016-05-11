'use strict';

var gulp            = require ('gulp');
var usemin          = require ('gulp-usemin');
var sass            = require ('gulp-sass');
var sassGlob        = require ('gulp-sass-glob');
var ngAnnotate      = require ('gulp-ng-annotate');
var angularFilesort = require ('gulp-angular-filesort');
var mod_rewrite     = require ('connect-modrewrite');
var minifyCss       = require ('gulp-cssnano');
var uglify          = require ('gulp-uglify');
var plumber         = require ('gulp-plumber');
var concat          = require ('gulp-concat');
var rename          = require ('gulp-rename');
var gutil           = require ('gulp-util');

var browserSync     = require('browser-sync').create();
var reload          = browserSync.reload;
var stream          = browserSync.stream;

gulp.task ('sass', function () {
  return  gulp.src ('./src/scss/angular-ui-swiper.scss')
          .pipe (plumber())
          .pipe (sassGlob())
          .pipe (sass().on('error', sass.logError))
          .pipe (gulp.dest('./dist/'));
});

gulp.task ('sass:production', function () {
    return  gulp.src ('./src/scss/angular-ui-swiper.scss')
            .pipe (rename('angular-ui-swiper.min.css'))
            .pipe (plumber())
            .pipe (sassGlob())
            .pipe (sass().on('error', sass.logError))
            .pipe (minifyCss({discardComments: {removeAll: true}}))
            .pipe (gulp.dest('./dist/'));
});

gulp.task ('js', function () {
  return  gulp.src ('./src/**/*.js')
          .pipe (plumber())
          .pipe (ngAnnotate().on('error', gutil.log))
          .pipe (angularFilesort())
          .pipe (concat('angular-ui-swiper.js'))
          .pipe (gulp.dest('./dist/'));
});

gulp.task ('js:production', function () {
    return  gulp.src ('./src/**/*.js')
            .pipe (plumber())
            .pipe (ngAnnotate().on('error', gutil.log))
            .pipe (angularFilesort())
            .pipe (concat('angular-ui-swiper.min.js'))
            .pipe (uglify().on('error', gutil.log))
            .pipe (gulp.dest('./dist/'));
});

// **********************************************************************
// **********************************************************************
// **********************************************************************
// RUNTIME RELATED TASKS

// Stop browser sync
gulp.task('stop', function() {
    browserSync.exit();
});

// refreshes the webpage
gulp.task('serve', ['default'], function() {

    browserSync.init({
        port: 9000,
        server : {
            baseDir : '.',
            // Make sure its getting the index.html file
            middleware: [
                mod_rewrite([
                    '^/bower_components/(.*) /bower_components/$1 [L]',
                    '^(.*)\.(gif|jpg|png|jpeg|css|js|swf|svg|woff.*|woff2.*|ttf.*)$ /$1.$2 [L,NC]',
                    '^(.*)$ /index.html [NE,L,QSD]'
                    //'^[^\\.]*$ /index.html [L]'
                ])
            ]
        },
        logLevel : 'debug',
        open : true,
        browser : 'google chrome'
    });

    gulp.watch(['src/**/*.js', 'js/**/*.js'], ['js', reload]);
    gulp.watch('src/**/*.scss', ['sass', reload]);
    gulp.watch('index.html', ['sass', reload]);
    gulp.watch('./gulpfile.js', ['stop']);

});

gulp.task ('default', ['sass', 'sass:production', 'js', 'js:production']);
gulp.task ('build', ['default']);
