/**
 * @file Constants that are used throughout the project.
 * @author The OpenINF Authors & Friends
 * @license MIT OR Apache-2.0 OR BlueOak-1.0.0
 * @module {type ES6Module} build/shared/constants
 */

const PATHS = {};

// Directory locations.
PATHS.assetsDir = '_assets/'; // The files Gulp will handle.
PATHS.eleventyAssetsDir = 'assets/'; // The asset files Jekyll will handle.
PATHS.eleventyCollectionsDir = 'collections/'; // The collections files Jekyll will handle.
PATHS.siteDir = '_site/'; // The resulting static site.
PATHS.siteAssetsDir = '_site/assets/'; // The resulting static site's assets.

// Folder naming conventions.
PATHS.dataFolder = '_data';
PATHS.draftsFolder = '_drafts';
PATHS.fontFolder = 'fonts';
PATHS.imageFolder = 'img';
PATHS.includesFolder = '_includes';
PATHS.layoutsFolder = '_layouts';
PATHS.pagesFolder = '_pages';
PATHS.pluginsFolder = '_plugins';
PATHS.postFolder = '_posts';
PATHS.scriptFolder = 'js';
PATHS.stylesFolder = 'styles';

// Asset file locations.
PATHS.sassFiles = PATHS.assetsDir + PATHS.stylesFolder;
PATHS.jsFiles = PATHS.assetsDir + PATHS.scriptFolder;
PATHS.imageFiles = PATHS.assetsDir + PATHS.imageFolder;
PATHS.fontFiles = PATHS.assetsDir + PATHS.fontFolder;

// Eleventy file locations.
PATHS.eleventyCssFiles = PATHS.eleventyAssetsDir + PATHS.stylesFolder;
PATHS.eleventyDataFiles = PATHS.dataFolder;
PATHS.eleventyDraftFiles = PATHS.eleventyCollectionsDir + PATHS.draftsFolder;
PATHS.eleventyFontFiles = PATHS.eleventyAssetsDir + PATHS.fontFolder;
PATHS.eleventyImageFiles = PATHS.eleventyAssetsDir + PATHS.imageFolder;
PATHS.eleventyJsFiles = PATHS.eleventyAssetsDir + PATHS.scriptFolder;
PATHS.eleventyPageFiles = PATHS.eleventyCollectionsDir + PATHS.pagesFolder;
PATHS.eleventyPostFiles = PATHS.eleventyCollectionsDir + PATHS.postFolder;

// Site file locations.
PATHS.siteCssFiles = PATHS.siteAssetsDir + PATHS.stylesFolder;
PATHS.siteJsFiles = PATHS.siteAssetsDir + PATHS.scriptFolder;
PATHS.siteImageFiles = PATHS.siteAssetsDir + PATHS.imageFolder;
PATHS.siteFontFiles = PATHS.siteAssetsDir + PATHS.fontFolder;

// Glob patterns by file type.
PATHS.dataPattern = '/**/*.json';
PATHS.htmlPattern = '/**/*.html';
PATHS.imagePattern = '/**/*.{jpg,svg}';
PATHS.jsPattern = '/**/*.js';
PATHS.liquidPattern = '/**/*.liquid';
PATHS.markdownPattern = '/**/*.md';
PATHS.sassPattern = '/**/*.scss';

// Asset file globs.
PATHS.sassFilesGlob = PATHS.sassFiles + PATHS.sassPattern;
PATHS.jsFilesGlob = PATHS.jsFiles + PATHS.jsPattern;
PATHS.imageFilesGlob = PATHS.imageFiles + PATHS.imagePattern;

// Eleventy file globs.
PATHS.eleventyDataFilesGlob = PATHS.eleventyDataFiles + PATHS.dataPattern;
PATHS.eleventyDraftFilesGlob = PATHS.eleventyDraftFiles + PATHS.markdownPattern;
PATHS.eleventyIncludesFilesGlob = PATHS.includesFolder + PATHS.liquidPattern;
PATHS.eleventyLayoutsFilesGlob = PATHS.layoutsFolder + PATHS.liquidPattern;
PATHS.eleventyPageFilesGlob = PATHS.eleventyPageFiles + PATHS.htmlPattern;
PATHS.eleventyPostFilesGlob = PATHS.eleventyPostFiles + PATHS.markdownPattern;
PATHS.eleventyImageFilesGlob = PATHS.eleventyImageFiles + PATHS.imagePattern;

// Site file globs.
PATHS.siteHtmlFilesGlob = PATHS.siteDir + PATHS.htmlPattern;

export { PATHS };
