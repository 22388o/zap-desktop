/**
 * Webpack config for development builds.
 */

import CleanWebpackPlugin from 'clean-webpack-plugin'

import mainConfig from './dev/main.config'
import workersConfig from './dev/workers.config'
import rendererConfig from './dev/renderer.config'

mainConfig.plugins.unshift(
  new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*', '!config.json', '!preload.js'] })
)

export default [mainConfig, workersConfig, rendererConfig]
