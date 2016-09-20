var gulp = require('gulp'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	template = require('gulp-template-compile'),
	templateCache = require('gulp-angular-templatecache'),
	del = require('del'),
	runSequence = require('run-sequence'),
    connect = require('gulp-connect');

// =======================================================================
// File Paths
// =======================================================================
var filePath = {
    build: {
        dest: './dist'
    },
    assets: {
        images: {
            src: './img/**/*',
            dest: './dist/img/'
        },
        productImages: {
            src: './product-img/**/*',
            dest: './dist/product-img/'
        },
        json: {
            src: './api/products.json',
            dest: './dist/api/'
        },
    },
    copyIndex: {
        src: './index.html'
    },
    js: {
    	src: './js/**/*.js'
    },
    html: {
    	src: './js/**/*.html'
    },
    css: {
            src: './css/**/*',
            dest: './dist/css/'
        }
};

// =======================================================================
// Error Handling
// =======================================================================
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

// =======================================================================
// Connect server
// =======================================================================
gulp.task('connect', function() {
    connect.server({
    	root: filePath.build.dest,
        fallback: filePath.build.dest + '/index.html',
        port: 5000,
    });
});

// =======================================================================
// Concat JS
// =======================================================================
gulp.task('concatJS', function() {
    return gulp.src(filePath.js.src)
    .pipe(concat('bundle.js'))
    .on('error', handleError)
    .pipe(uglify({mangle:false}))
    .pipe(gulp.dest(filePath.build.dest))
    .pipe(notify({
        message: 'concatJS task complete'
    }));
});

// =======================================================================
// Concat HTML
// =======================================================================
gulp.task('concatHTML', function() {
    return gulp.src(filePath.html.src)
    .pipe(templateCache('templates.js', {standalone:true}))
    .on('error', handleError)
    .pipe(uglify({mangle:false}))
    .pipe(gulp.dest(filePath.build.dest))
    .pipe(notify({
        message: 'concatHTML task complete'
    }));
});

// =======================================================================
// Copy index.html
// =======================================================================
gulp.task('copyIndex', function() {
    return gulp.src(filePath.copyIndex.src)
    .pipe(gulp.dest(filePath.build.dest))
    .pipe(notify({
        message: 'index.html successfully copied'
    }));
});

// =======================================================================
// Copy images
// =======================================================================
gulp.task('images', function() {
    return gulp.src(filePath.assets.images.src)
    .on('error', handleError)
    .pipe(gulp.dest(filePath.assets.images.dest))
    .pipe(notify({
        message: 'Images copied'
    }));
});

// =======================================================================
// Copy CSS
// =======================================================================
gulp.task('css', function() {
    return gulp.src(filePath.css.src)
    .on('error', handleError)
    .pipe(gulp.dest(filePath.css.dest))
    .pipe(notify({
        message: 'css copied'
    }));
});

// =======================================================================
// Copy product images
// =======================================================================
gulp.task('productImages', function() {
    return gulp.src(filePath.assets.productImages.src)
    .on('error', handleError)
    .pipe(gulp.dest(filePath.assets.productImages.dest))
    .pipe(notify({
        message: 'Product images copied'
    }));
});

// =======================================================================
// Copy index.html
// =======================================================================
gulp.task('json', function() {
    return gulp.src(filePath.assets.json.src)
    .pipe(gulp.dest(filePath.assets.json.dest))
    .pipe(notify({
        message: 'JSON successfully copied'
    }));
});

// =======================================================================
// Clean out dist folder contents on build
// =======================================================================

gulp.task('clean', function() {
    del(['./dist/*']);
});

gulp.task('default', ['connect']);

gulp.task('build', function(callback) {
    runSequence(
        ['clean', 'images', 'productImages', 'copyIndex', 'json', 'concatJS', 'css', 'concatHTML'],
        ['connect'],
        callback
    );
});
