import VShareTools from '../src/components/VShareTools.vue'
import VShareToolsItem from '../src/components/VShareToolsItem.vue'

export default {
    title: 'Components-V2/VShareTools',
    component: VShareTools,
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
    components: { VShareTools, VShareToolsItem },
    setup() {
        return { args }
    },
    template: `
        <v-share-tools label="Connect">
            <v-share-tools-item service="facebook" username="WNYC" />
            <v-share-tools-item service="twitter" username="WNYC" />
            <v-share-tools-item service="instagram" username="WNYC" />
            <v-share-tools-item service="youtube" username="UCbysmY4hyViQAAYEzOR-uCQ" />
        </v-share-tools>
    `,
})

export const Default = Template.bind({})
Default.args = {
    url: 'https://player.vimeo.com/video/90283590'
}


