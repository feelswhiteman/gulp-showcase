import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { copy } from "./gulp/tasks/copy.js";
import { clean } from "./gulp/tasks/clean.js";
import { html } from "./gulp/tasks/html.js";

global.app = {
    path: path,
    gulp: gulp,
};

const mainTasks = gulp.parallel(copy, html);
const devTasks = gulp.series(clean, mainTasks, watch);

function watch() {
    gulp.watch(path.watch.files, devTasks);
}

gulp.task("default", devTasks);
