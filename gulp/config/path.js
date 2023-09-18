import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
    },
    src: {
        files: `${srcFolder}/files/**/*`,
        html: `${srcFolder}/*.html`,
    },
    watch: {
        files: `${srcFolder}/files/**/*`,
        html: `${srcFolder}/**/*.html`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,
};
