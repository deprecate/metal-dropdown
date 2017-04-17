'use strict';

var metal = require('gulp-metal');
var gulp = require('gulp');

metal.registerTasks({
	bundleCssFileName: 'dropdown.css',
	bundleFileName: 'dropdown.js',
	moduleName: 'metal-dropdown',
	gulp: gulp,
});
