import VAudioPlayerSystem from './VAudioPlayerSystem.vue'

export default {
  title: 'Components/VAudioPlayerSystem',
  component: VAudioPlayerSystem,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    persistent: { control: 'boolean' },
  },
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VAudioPlayerSystem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<v-audio-player-system v-bind="args" /> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>',
})

export const Alone = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Alone.args = {
  persistent: false,
}

export const Persistent = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Persistent.args = {
  persistent: true,
}

export const AlwaysPersistent = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
AlwaysPersistent.args = {
  persistent: true,
  always: true,
}

