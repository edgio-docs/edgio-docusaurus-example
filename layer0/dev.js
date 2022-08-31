const { createDevServer } = require('@layer0/core/dev')

module.exports = function () {
  return createDevServer({
    label: '[Docusaurus]',
    command: (port) => `npx docusaurus start --no-open --port ${port}`,
    ready: [/compiled successfully/i],
  })
}
