/**
 * @file Optimize and scale images for web.
 * @author The OpenINF Authors & Friends
 * @license MIT OR Apache-2.0 OR BlueOak-1.0.0
 * @module {type ES6Module} build/tasks/compile/imagize
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { copyFile, mkdir } from 'node:fs/promises';
import {
  dirname as pathDirname,
  extname as pathExtname,
  join as pathJoin,
  relative as pathRelative,
  resolve as pathResolve,
} from 'node:path';
import Image from '@11ty/eleventy-img';
import { PATHS } from '@openinf/portal/build/constants';
import { glob } from '@openinf/portal/build/utils';

const imageFiles = await glob(PATHS.imageFilesGlob);

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

/**
 * Copies a file while preserving its directory structure.
 * @param {string} source The source file path.
 * @param {string} sourceBaseDir The base directory to remove from the source path to get the relative structure.
 * @param {string} targetBaseDir The base target directory where the relative path will be created.
 */
async function copyFileWithDirStructure(source, sourceBaseDir, targetBaseDir) {
  // Determine the relative path from the source base directory.
  const relativePath = pathRelative(sourceBaseDir, source);

  // Determine the full target path based on the relative path.
  const target = pathJoin(targetBaseDir, relativePath);

  // Ensure the target directory exists.
  const targetDir = pathDirname(target);
  await mkdir(targetDir, { recursive: true });

  // Copy the file.
  await copyFile(source, target);
}

// -----------------------------------------------------------------------------
// Task
// -----------------------------------------------------------------------------

export const imagize = async () => {
  for (const imageFile of imageFiles) {
    if (pathExtname(imageFile) === '.svg') {
      await copyFileWithDirStructure(
        imageFile,
        pathResolve(PATHS.assetsDir),
        pathResolve(PATHS.eleventyAssetsDir)
      );
    } else {
      const stats = await Image(imageFile, {
        widths: [48],
        formats: ['auto'],
        outputDir: PATHS.eleventyImageFiles,
        urlPath: `/${PATHS.eleventyImageFiles}/`,
      });

      console.log(stats);
    }
  }
};
