import { EleventyI18nPlugin } from '@11ty/eleventy';

export default async function (eleventyConfig) {
  // Configure Eleventy
  // Order matters, put this at the top of your configuration file.
  eleventyConfig.setLayoutsDirectory('_layouts'); // relative to your input dir
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addGlobalData('siteTitle', 'OpenINF');
  eleventyConfig.addGlobalData(
    'siteDescription',
    'Aggregate, curate, disseminate, and apply information derived from diverse sources.'
  );
  eleventyConfig.addGlobalData('siteUrl', 'https://open.inf.is');

  // Drafts, see also _data/eleventyDataSchema.js
  eleventyConfig.addPreprocessor('drafts', '*', (data, content) => {
    if (data.draft && process.env.ELEVENTY_ENV === 'production') {
      return false;
    }
  });

  eleventyConfig.addCollection('posts', (collectionApi) => {
    return collectionApi
      .getFilteredByGlob([
        'collections/_posts/*.md',
        'collections/_drafts/*.md',
      ])
      .sort(
        (a, b) => b.date - a.date // sort by date - descending
      );
  });

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: 'en', // Required, this site uses "en"

    // When to throw errors for missing localized content files
    errorMode: 'strict', // throw an error if content is missing at /en/slug
  });
}
