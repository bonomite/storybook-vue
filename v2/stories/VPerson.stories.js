import VPerson from '../src/components/VPerson.vue'

export default {
    title: 'Components-V2/VPerson',
    component: VPerson,
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

const social = [
    {
        service: 'facebook',
        profileUrl: 'https://www.facebook.com/WNYC',
    },
    {
        service: 'twitter',
        profileUrl: 'https://twitter.com/WNYC'
    },
    {
        service: 'instagram',
        profileUrl: 'https://www.instagram.com/WNYC/'
    },
    {
        service: 'linkedin',
        profileUrl: 'https://www.linkedin.com/company/wnyc-radio/'
    },
    {
        service: 'youtube',
        profileUrl: 'https://www.youtube.com/channel/UCbysmY4hyViQAAYEzOR-uCQ'
    }
]

const Template = (args) => ({
    components: { VPerson },
    setup() {
        return { args }
    },
    template: '<v-person v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
    image: 'https://cms.prod.nypr.digital/images/328822/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/',
    fullName: 'Jen Chung',
    role: 'Executive Editor and Co-founder',
}

export const ResponsiveLayout = Template.bind({})
ResponsiveLayout.args = {
    orientation: 'responsive',
    image: 'https://cms.prod.nypr.digital/images/328822/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/',
    fullName: 'Jen Chung',
    role: 'Executive Editor and Co-founder',
}


export const Everything = Template.bind({})
Everything.args = {
    orientation: 'responsive',
    image: 'https://c.tenor.com/l6wUDFLSnfQAAAAC/square-animation.gif',
    video: 'https://www.youtube.com/watch?v=LOS5WB75gkY',
    imgScale: '40',
    circle: false,
    animate: true,
    fullName: 'Jen Chung',

    role: 'Executive Editor and Co-founder',
    organization: 'Gothamist',
    organizationLink: 'https://gothamist.com/',
    blurb: 'Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order. Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order. Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order. Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order. Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order. Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order.',
    truncate: '2',
    websiteUrl: 'https://www.google.com',
    websiteLabel: 'Website',
    email: 'jchung@nypr.com',
    onAuthorPage: false,
    phoneNumbers: [
        { phoneNumber: '1-973-615-6339' },
        { phoneNumber: '1-973-123-1234' }
    ],
    social: social,
}
