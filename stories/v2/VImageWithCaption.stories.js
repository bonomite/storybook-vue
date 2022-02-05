import VImageWithCaption from './VImageWithCaption.vue'

export default {
    title: 'Components-V2/VImageWithCaption',
    component: VImageWithCaption,
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
    components: { VImageWithCaption },
    setup() {
        return { args }
    },
    template: '<v-image-with-caption v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
    // variation: 'gothamist',
    altText: 'Fallback alt text here',
    image: 'https://cms.prod.nypr.digital/images/328822/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/',
    credit: 'Credit Text Here',
    creditUrl: 'https://www.Credit-URL-Here.com',
    caption: 'Caption Text Here',
    title: 'Title Text Here',
    description: 'Description Text Here',
    width: 600,
    height: 400,
    allowPreview: true,
    // imageUrl: 'https://www.google.com',
}
