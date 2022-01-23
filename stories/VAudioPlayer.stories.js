import VAudioPlayer from './VAudioPlayer.vue'

export default {
  title: 'Components/VAudioPlayer',
  component: VAudioPlayer,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    fixed: { control: 'boolean' },
  },
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VAudioPlayer },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<v-audio-player v-bind="args" />',
})


export const Inline_Only = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Inline_Only.args = {
  fixed: false,
}

