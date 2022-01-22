const path = require('path')
module.exports = {
  "stories": ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-scss"],
  "framework": "@storybook/vue3",
  core: {
    builder: "webpack5"
  },
  webpackFinal: async (config, { configType }) => {

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: '@import "~/stories/assets/scss/variables.module.scss";',
            // additionalData: '@import "./assets/scss/main.scss";',
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })

    return config
  },
}
