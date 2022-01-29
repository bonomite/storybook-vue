const path = require('path')
module.exports = {
  "stories": ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-scss"],
  "framework": "@storybook/vue3",
  core: {
    builder: "webpack5"
  },
  staticDirs: ['../stories/assets-shared'],
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
            additionalData: '@import "primevue/resources/themes/lara-light-blue/theme.css"; @import "primevue/resources/primevue.css"; @import "primeicons/primeicons.css"; @import "primeflex/primeflex.scss"; @import "~/stories/assets-shared/scss/variables.module.scss"; @import "~/stories/assets-shared/scss/main.scss";',
            // additionalData: '@import "./assets/scss/main.scss";',
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })

    return config
  },
}
