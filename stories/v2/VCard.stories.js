import VCard from './VCard.vue'

export default {
    title: 'Components-V2/VCard',
    component: VCard,
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
    components: { VCard },
    setup() {
        return { args }
    },
    template: '<v-card v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
    image: 'https://cms.prod.nypr.digital/images/328822/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/',
    title: "Title with some <em>HTML</em>",
    titleLink: 'https://www.google.com',
    subtitle: 'Subtitle',
    imageWidth: 175,
    imageHeight: 175,
}
