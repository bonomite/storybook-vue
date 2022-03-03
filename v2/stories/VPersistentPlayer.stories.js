import VPersistentPlayer from '../src/components/VPersistentPlayer.vue'

export default {
    title: 'Components-V2/VPersistentPlayer',
    component: VPersistentPlayer,
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
    components: { VPersistentPlayer },
    setup() {
        return { args }
    },
    template: '<v-persistent-player v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
    title: "The Takeaway",
    station: "WNYC 93.9 FM",
    titleLink: "http://www.google.com",
    description: "This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre.",
    file: "http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
}

export const DescriptionLink = Template.bind({})
DescriptionLink.args = {
    title: "The Takeaway",
    station: "WNYC 93.9 FM",
    titleLink: "http://www.google.com",
    description: "This week, people in Tulsa filed a lawsuit demanding reparations for victims and descendants of the Tulsa Race Massacre.",
    descriptionLink: "http://www.bing.com",
    file: "http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
}
