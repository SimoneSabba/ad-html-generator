var gulp = require('gulp'),
	notify = require('gulp-notify'),
	del = require('del'),
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
    connect.server();
});

// =======================================================================
// Copy index.html
// =======================================================================
gulp.task('copyIndex', function() {
    return gulp.src(filePath.copyIndex.src)
    .pipe(gulp.dest(filePath.build.dest))
    .pipe(notify({
        message: 'index.html successfully copied'
    }))
    .pipe(connect.reload());
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
    }))
    .pipe(connect.reload());
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
    }))
    .pipe(connect.reload());
});

// =======================================================================
// Copy index.html
// =======================================================================
gulp.task('json', function() {
    return gulp.src(filePath.assets.json.src)
    .pipe(gulp.dest(filePath.assets.json.dest))
    .pipe(notify({
        message: 'JSON successfully copied'
    }))
    .pipe(connect.reload());
});

// =======================================================================
// Clean out dist folder contents on build
// =======================================================================

gulp.task('clean', function() {
    del(['./dist/*']);
});

gulp.task('default', ['connect']);

gulp.task('build', ['clean', 'images', 'productImages', 'copyIndex', 'json', 'connect']);
