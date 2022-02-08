import VFlexibleLink from './VFlexibleLink.vue'

export default {
    title: 'Components-V2/VFlexibleLink',
    component: VFlexibleLink,
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
    components: { VFlexibleLink },
    setup() {
        return { args }
    },
    template: '<v-flexible-link v-bind="args" >Link to URL or NUXT route</v-flexible-link>',
})

export const Default = Template.bind({})
Default.args = {
    to: 'https://www.nypr.org/',
}

export const DefaultSelf = Template.bind({})
DefaultSelf.args = {
    to: 'https://www.nypr.org/',
    target: '_self',
}

export const NuxtLink = Template.bind({})
NuxtLink.args = {
    to: 'news',
}

