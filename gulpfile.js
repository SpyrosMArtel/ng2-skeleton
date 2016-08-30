const gulp          = require('gulp');
const gulpSequence  = require('gulp-sequence');
const del           = require('del');
const merge2        = require('merge2');
const typescript    = require('gulp-typescript');
const tslint        = require('gulp-tslint');
const uglify        = require("gulp-uglify");
const tscConfig     = require('./tsconfig.json');
const sourcemaps    = require('gulp-sourcemaps');
const browserSync   = require('browser-sync');
const reload        = browserSync.reload;
const tsconfig      = require('tsconfig-glob');

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del(
        [
            'dist/**/*',
            'app/**/*.js',
            'app/**/*.map'
        ]
    );
});
// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', function () {
        return merge2(
            gulp.src([
                'app/**/*',
                'index.html',
                'styles.css',
                '!app/**/*.ts'],
                { base: './' })
                .pipe(browserSync.stream())
                .pipe(gulp.dest('dist')),
            gulp.src([
                'node_modules/flag-icon-css/css/flag-icon.min.css',
                'node_modules/flag-icon-css/flags/1x1/gb.svg',
                'node_modules/flag-icon-css/flags/1x1/se.svg',
                'node_modules/flag-icon-css/flags/4x3/gb.svg',
                'node_modules/flag-icon-css/flags/4x3/se.svg'
            ],{ base: 'node_modules/flag-icon-css' })
            .pipe(gulp.dest('dist/app/assets/flag-icons')),
            gulp.src([
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/bootstrap/dist/fonts/*']
            ,{ base: 'node_modules/bootstrap/dist/' })
            .pipe(gulp.dest('dist/app/assets/bootstrap'))
    );
});
gulp.task('copy:systemjs', function () {
    return gulp.src('systemjs.config.js',
        { base: './' })
        //.pipe(uglify())
        .pipe(gulp.dest('dist'))
});
// copy dependencies
gulp.task('copy:libs', function () {
    return merge2(
        gulp.src([
            'core-js/client/shim.min.js',

            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'webcomponentsjs/full.js',

            'reflect-metadata/Reflect.js',
            'ng2-translate/**',
            '!ng2-translate/{bundles, bundles/**/*}',
            'rxjs/**',
            '@angular/**',
            '!@angular/{'+
                'router-deprecated,upgrade,' +
                'router-deprecated/**/*,upgrade/**/*' +
            '}',
            'zone.js/dist/**'
            ], {cwd: "node_modules/**"})
            .pipe(gulp.dest('dist/lib')),

        gulp.src(['node_modules/ng2-bootstrap/bundles/ng2-bootstrap.min.js']
            ,{ base: 'node_modules/ng2-bootstrap/bundles' })
            .pipe(gulp.dest('dist/lib/ng2-bootstrap')),
        gulp.src(['node_modules/moment/min/moment.min.js']
            ,{ base: 'node_modules/moment/min/' })
            .pipe(gulp.dest('dist/lib/moment'))
    );
});
// linting
gulp.task('tslint', function () {
    return gulp.src('app/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});
// TypeScript compile
gulp.task('compile', function () {
    return gulp
        .src(tscConfig.files)
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        //.pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/app'));
});
// update the tsconfig files based on the glob pattern
gulp.task('tsconfig-glob', function () {
    return tsconfig({
        configPath: '.',
        indent: 2
    });
});
// Run browsersync for development
gulp.task('serve', ['build'], function () {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });
    gulp.watch(['app/**/*', 'index.html', 'styles.css'], ['buildAndReload']);
});
/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["app/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(
        [
            "app/**/*.html",
            "app/**/*.css",
            "app/assets/**/*",
            "index.html"
        ], ['copy:assets']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});
//gulp.task('build', ['tslint', 'compile', 'copy:libs', 'copy:assets', 'copy:systemjs']);
gulp.task('build', gulpSequence('clean', 'tslint', 'compile', 'copy:libs', 'copy:assets', 'copy:systemjs'));
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);