const path = require('path')
module.exports = {
  "stories": ["../stories/v2/**/*.stories.mdx", "../stories/v2/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-docs", "@storybook/preset-scss"],
  "framework": "@storybook/vue3",
  core: {
    builder: "webpack5"
  },
  staticDirs: ['../stories/assets-shared'],
  webpackFinal: async (config, { configType }) => {

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        // 'style-loader',
        // 'css-loader',
        'sass-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: '@import "~/src/assets/library/primeflex.min.css"; @import "~/src/assets/themes/white-paper/_theme.scss"; @import "primevue/resources/primevue.min.css"; @import "primeicons/primeicons.css"; ',
            // additionalData: '@import "./assets/scss/main.scss";',
            //@import "primeflex/primeflex.scss";
            //@import "primevue/resources/themes/lara-light-blue/theme.css";
            // @import "~/stories/assets-shared/scss/main.scss";
            // @import "~/stories/assets-shared/scss/variables.module.scss";
          },
        },
      ],
      // include: path.resolve(__dirname, '../'),
    })
    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: [
    //     'style-loader',
    //     'css-loader',
    //     {
    //       loader: 'css-loader',
    //     },
    //   ],
    // })
    return config
  },
}
