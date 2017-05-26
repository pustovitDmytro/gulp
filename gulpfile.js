'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rigger = require("gulp-rigger"),
    prefixer = require('gulp-autoprefixer'),
    del = require('del'),
    imagemin = require('gulp-imagemin');

var path = {
    build: {
        html: 'build/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src:{
        html:'src/*.html',
        style: 'src/style/main.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    libs:{
        css: 'src/style/libs/libs.*'
    },
    watch: {
        html: 'src/**/*.html',
        style: 'src/style/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

gulp.task('sass',function(){
    gulp.src(path.src.style)
        .pipe(sass().on('error',sass.logError))
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('css-lib',function(){
    gulp.src(path.libs.css)
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('html',function(){
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
});

gulp.task('img', function () {
    gulp.src(path.src.img) 
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
});

gulp.task('watch',function(){
    gulp.watch(path.watch.style,['sass']);
    gulp.watch(path.watch.html,['html']);
    gulp.watch(path.watch.img,['img']);
    gulp.watch(path.libs.css,['css-lib']);
});

gulp.task('clean', function () {
  return del([path.clean]);
});

gulp.task('build', ['img', 'sass', 'html','css-lib']);

gulp.task('default',['clean','build','watch']);