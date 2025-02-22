/**
 * @file Verify SVG files are valid & adhere to checkable style guidelines.
 * @author The OpenINF Authors & Friends
 * @license MIT OR Apache-2.0 OR BlueOak-1.0.0
 * @module {type ES6Module} build/tasks/verify/verify-svg
 */

import { exec, glob } from '@openinf/portal/build/utils';
import vnu from 'vnu-jar';

const svgFiles = await glob(['**.svg', '!_site/', '!node_modules/']);

let exitCode = 0;
const scripts = [
  `prettier --check ${svgFiles.join(' ')}`,
  `java -jar ${vnu} --svg ${svgFiles.join(' ')}`,
];

for (const element of scripts) {
  exitCode = await exec(element);

  if (exitCode !== 0) process.exitCode = exitCode;
}
