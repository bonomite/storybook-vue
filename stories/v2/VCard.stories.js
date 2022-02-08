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
    template: '<v-card v-bind="args"> slot content </v-card>',
})

export const Default = Template.bind({})
Default.args = {
    image: 'https://cms.demo.nypr.digital/images/212136/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/',
    title: "Title with some <em>HTML</em>",
    titleLink: 'https://www.google.com',
    subtitle: 'Subtitle',
    imageWidth: 175,
    imageHeight: 175,
    imageMaxWidth: 616,
    imageMaxHeight: 952,
    tags: [{ 'name': 'news', 'slug': 'news' }, { 'name': 'food', 'food': '' }],
    sponsored: true,
    allowVerticalEffect: true
}
