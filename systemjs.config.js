/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'app', 'dist',
        '@angular': './lib/@angular',
        'rxjs': './lib/rxjs',
        'components' : './app/components',
        'ng2-translate': './lib/ng2-translate',
         'moment' : './lib/moment/moment.min.js'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'ng2-translate': {defaultExtension: 'js'}
    };
    var ngPackageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/forms',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/upgrade',
        'components'
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages[pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = packIndex; //System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }
    System.config(config);
})(this);
