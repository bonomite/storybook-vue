<template>
  <div>
    <div>Home Page</div>
    <v-person
      orientation="responsive"
      img-scale="40"
      image="./stories/assets-shared/images/default-user.jpg"
      full-name="Jen Chung"
      name-link="https://gothamist.com/staff/jen-chung"
      truncate="2"
      role="Executive Editor and Co-founder"
      blurb="Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order. Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order. Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order. Jen grew up in New Jersey and co-founded Gothamist in 2003 as a way to learn more about New York City beyond Law & Order. "
    />
    <v-button class="mod-secondary" label="version 1"></v-button>
    <Button label="prime button v2"></Button>
    <v-simple-responsive-image
      src="https://cms.demo.nypr.digital/images/212050/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/"
      :width="600"
      :height="400"
      :allow-preview="true"
    />
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Inject</div>
    <div class="inline"></div>
    <v-audio-player-system persistent always />
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
    <div>Home Page</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import VAudioPlayerSystem from '~/stories/v2/VAudioPlayerSystem'
import VSimpleResponsiveImage from '~/stories/v2/VSimpleResponsiveImage'
import VButton from '~/stories/v1/src/components/VButton'
import VPerson from '~/stories/v1/src/components/VPerson'

export default {
  name: 'NewComponent',
  components: { VAudioPlayerSystem, VSimpleResponsiveImage, VButton, VPerson },
  props: {},
  setup: (props) => {
    // props vars

    // local data vars

    // local vars

    // methods

    onMounted(() => {})
    //computed

    return {}
  },
}
</script>

<style lang="scss"></style>
