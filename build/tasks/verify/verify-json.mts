/**
 * @file Verify JSON files are valid & adhere to checkable style guidelines.
 * @author The OpenINF Authors & Friends
 * @license MIT OR Apache-2.0 OR BlueOak-1.0.0
 * @module {type ES6Module} build/tasks/verify/verify-json
 */

import { exec, glob } from '@openinf/portal/build/utils';

const jsonFiles = await glob([
  '**.json',
  '**.json5',
  '**.jsonc',
  '!_site/',
  '!node_modules/',
]);

let exitCode = 0;
const scripts = [`biome check ${jsonFiles.join(' ')}`];

for (const element of scripts) {
  exitCode = await exec(element);

  if (exitCode !== 0) process.exitCode = exitCode;
}
