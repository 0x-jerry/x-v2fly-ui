const { defineConfig } = require('@exyz/glib')

module.exports = defineConfig({
  release: {
    steps: {
      build: false,
      publish: false,
    },
  },
})
