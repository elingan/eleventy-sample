const yaml = require('js-yaml')

module.exports = function (eleventyConfig) {
  // Add a filter using the Config API

  eleventyConfig.addPassthroughCopy('src/assets')

  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents))

  return {
    dir: {
      input: 'src',
    },
  }
}
