var gulp = require("gulp");
var sass = require("gulp-sass");
var pleeease = require("gulp-pleeease");
var pleeeaseOpt = {
  browsers: ["last 4 versions"],
  minifier: false
};
var browserSync = require("browser-sync");
var reload = browserSync.reload;
var concat = require("gulp-concat");
var moduleImporter = require("sass-module-importer");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");

/**
 * Watch assets for changes
 */
gulp.task("serve", ["process_sass"], function() {
  browserSync.init({
    browser: "google chrome",
    proxy: "altera.local:8888",
    port: 8080,
    open: true,
    notify: true
  });
  gulp.watch("src/scss/**/*.scss", ["process_sass"]);
  // gulp.watch("_assets/js/*.js", ["script"]);
  gulp.watch("_assets/js/*.js").on("change", reload);
  gulp.watch("**/*.html").on("change", reload);
  gulp.watch("**/*.php").on("change", reload);
});

gulp.task("process_sass", function() {
  return gulp
    .src("src/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({importer: moduleImporter()}))
    .pipe(pleeease(pleeeaseOpt))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream({match: "**/*.css"}));
});

/**
 * Concat js files. DO NOT ALTER ORDER OF FILES BELOW!
 */
// gulp.task("scripts", function() {
//   gulp
//     .src([
//       "_assets/js/foundation.js",
//       "_assets/js/jquery.foundation.orbit.js",
//       "_assets/js/jquery.foundation.tabs.js",
//       "_assets/js/respond.js",
//       "_assets/js/jquery.fittext.js",
//       "_assets/js/jquery.cookie.js",
//       "_assets/js/jquery.maskedinput.js",
//       "_assets/js/jquery.customSelect.js",
//       "_assets/js/jquery.fancybox.js",
//       "_assets/js/jquery.validate.js",
//       "_assets/js/additional-methods.js",
//       "_assets/js/accept.js",
//       "_assets/js/jquery.ui.widget.js",
//       "_assets/js/jquery.iframe-transport.js",
//       "_assets/js/jquery.fileupload.js",
//       "_assets/js/jquery-ui.js",
//       "_assets/js/parsley.js",
//       "_assets/js/slick.js",
//       "_assets/js/testimonials.js",
//       "_assets/js/app.js",
//       "_assets/js/speedbumps.js",
//       "_assets/js/treasury.js",
//       "_assets/js/sba-cookie.js",
//       "_assets/js/meet-the-team.js",
//       "_assets/js/landing.js"
//     ])
//     .pipe(concat("core.js"))
//     .pipe(gulp.dest("_assets/js/min"));
// });

gulp.task("default", ["serve"]);
