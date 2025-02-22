/**
 * @file Format Markdown files to adhere to autofixable style guidelines.
 * @author The OpenINF Authors & Friends
 * @license MIT OR Apache-2.0 OR BlueOak-1.0.0
 * @module {type ES6Module} build/tasks/format/format-md
 */

import { exec, glob } from '@openinf/portal/build/utils';

const markdownFiles = await glob([
  '**.md',
  '!node_modules/',
  '!**/COPYING.md',
  '!_site/',
]);

let exitCode = 0;
const scripts = [
  `prettier --write ${markdownFiles.join(' ')}`,
  `markdownlint-cli2 --fix ${markdownFiles.join(' ')}`,
];

for (const element of scripts) {
  exitCode = await exec(element);

  if (exitCode !== 0) process.exitCode = exitCode;
}
