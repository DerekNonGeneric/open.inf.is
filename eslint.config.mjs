/**
 * @file ESLint configuration (flat format).
 *
 * @author The OpenINF Authors & Friends
 * @module {type ES6Module} /eslint.config
 * @license MIT OR Apache-2.0 OR BlueOak-1.0.0
 * @see https://eslint.org/docs/latest/use/configure/plugins
 * @see https://github.com/SrBrahma/eslint-config-biome
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import markdown from 'eslint-plugin-markdown';
import eslintConfigBiome from 'eslint-config-biome';

import {FlatCompat} from '@eslint/eslintrc';
import pluginJS from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: pluginJS.configs.recommended,
});

export default [
	/* {languageOptions: {globals: globals.browser}}, */

	// other configs,
    eslintConfigBiome,
	...compat.extends('eslint-plugin-prettier'),

	// Applies to all JavaScript files
	{
		rules: {
			strict: 'error',
		},
	},

	// Applies to Markdown files
	{
		files: ['**/*.md'],
		plugins: {
			markdown,
		},
		processor: 'markdown/markdown',
	},

	// Applies only to JavaScript blocks inside of Markdown files
	{
		files: ['**/*.md/*.js'],
		rules: {
			strict: 'off',
		},
	},
];