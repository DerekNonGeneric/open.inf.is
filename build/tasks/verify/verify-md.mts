/**
 * @file Verify Markdown files are valid & adhere to checkable style guidelines.
 * @author The OpenINF Authors & Friends
 * @license MIT OR Apache-2.0 OR BlueOak-1.0.0
 * @module {type ES6Module} build/tasks/verify/verify-md
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
  `prettier --check ${markdownFiles.join(' ')}`,
  `markdownlint-cli2 ${markdownFiles.join(' ')}`,
  `remark -f ${markdownFiles.join(' ')}`,
  `cspell lint ${markdownFiles.join(' ')}`,
];

for (const element of scripts) {
  exitCode = await exec(element);

  if (exitCode !== 0) process.exitCode = exitCode;
}
