import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

import { copy } from "./gulp/tasks/copy.js";
import { clean } from "./gulp/tasks/clean.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js"

global.app = {
    path,
    gulp,
    plugins,
};

const mainTasks = gulp.parallel(copy, html);
const devTasks = gulp.series(clean, mainTasks, gulp.parallel(watch, server));

function watch() {
    gulp.watch(path.watch.files, devTasks);
}

gulp.task("default", devTasks);
