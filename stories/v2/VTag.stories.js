import VTag from './VTag.vue'

export default {
    title: 'Components-V2/VTag',
    component: VTag,
    argTypes: {
        // alt: {
        //     control: { type: 'text' },
        //     type: { name: 'string' }
        // },
        // onClick: {},
        // size: {
        //     control: { type: 'select' },
        //     options: ['small', 'medium', 'large'],
        // },
    },
}

const Template = (args) => ({
    components: { VTag },
    setup() {
        return { args }
    },
    template: '<v-tag v-bind="args" /> <v-tag v-bind="args" /> <v-tag name="no link" />',
})

export const Default = Template.bind({})
Default.args = {
    name: 'news',
    slug: 'news',
}
