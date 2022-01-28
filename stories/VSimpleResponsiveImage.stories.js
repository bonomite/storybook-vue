import VSimpleResponsiveImage from './VSimpleResponsiveImage.vue'

export default {
    title: 'Components/VSimpleResponsiveImage',
    component: VSimpleResponsiveImage,
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
    components: { VSimpleResponsiveImage },
    setup() {
        return { args }
    },
    template: '<v-simple-responsive-image v-bind="args" />',
})

//     < simple - responsive - image
//          v -if= "image"
//         class="card-image"
//         : src = "image"
//         : width = "imageWidth"
//         : height = "imageHeight"
//         : max - width="imageMaxWidth || Infinity"
//         : max - height="imageMaxHeight || Infinity"
// alt = ""
// role = "presentation"
//     />

export const Default = Template.bind({})
Default.args = {
    alt: 'Fallback alt text here',
    src: 'https://cms.prod.nypr.digital/images/328822/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/',
    width: 600,
    height: 400,
    allowVerticalEffect: false,
}

export const Preview = Template.bind({})
Preview.args = {
    alt: 'Fallback alt text here',
    src: 'https://cms.prod.nypr.digital/images/328822/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/',
    width: 600,
    height: 400,
    allowVerticalEffect: false,
    allowPreview: true,
}


export const Vertical = Template.bind({})
Vertical.args = {
    alt: 'Fallback alt text here',
    src: 'https://cms.demo.nypr.digital/images/212136/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/',
    width: 600,
    height: 400,
    maxWidth: 616,
    maxHeight: 952,
    allowVerticalEffect: true,
}