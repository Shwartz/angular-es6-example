"use strict";

const PATH = require("path");
const gulp = require('gulp');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const PATHS = {
	sass: ['public/src/style/**/*.scss'],
	sassComp: ['public/src/app/**/*.scss'],
	es6: ['public/src/app/**/*.js']
};

/**
 * CSS TASKS
 */


gulp.task('sass-dev', function () {
	return gulp.src(PATHS.sass)
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('public/dev/css'));
});


gulp.task('sass-cmp', function () {
	return gulp.src(PATHS.sassComp, {base: './'})
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('.'));
});


gulp.task('sass-dist', function () {
	return gulp.src(PATHS.sass)
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('public/dist/css'));
});

/**
 * JAVASCRIPT TASKS
 */

gulp.task('js-dev', function () {
	webpack(webpackConfig, function (err, stats) {
		if (err) throw new gutil.PluginError('webpack', err);
		gutil.log('[webpack]', stats.toString({
			colors: true,
			progress: true
		}));
	});
});

gulp.task('js-dist', function () {
	webpackConfig.plugins = [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				dead_code: true,
				global_defs: {
					DEBUG: false
				}
			}
		})
	];

	webpackConfig.output = {
		path: PATH.resolve(__dirname, 'public/dist/js'),
		filename: 'bundle.min.js'
	};

	// run webpack
	webpack(webpackConfig, function (err, stats) {
		if (err) throw new gutil.PluginError('webpack', err);
		gutil.log('[webpack]', stats.toString({
			colors: true,
			progress: true
		}));
	});
});

/**
 * RUN GULP TASKS
 * default, watch, dist, prod
 */
gulp.task('default', ['watch']);

gulp.task('watch', ['sass-dev', 'js-dev'], function () {
	gulp.watch(PATHS.sass, ['sass-dev']);
	gulp.watch(PATHS.es6, ['js-dev']);
	// Other watchers can also be added here
});