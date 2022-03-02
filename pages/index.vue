<template>
  <div>
    <div>Home Page</div>
    <v-simple-responsive-image
      alt="Fallback alt text here"
      src="https://cms.prod.nypr.digital/images/328822/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/"
      :width="600"
      :height="400"
      :allow-vertical-effect="false"
      allow-preview
    />
    <v-card
      image="https://cms.demo.nypr.digital/images/212141/fill-%width%x%height%|format-jpeg|jpegquality-%quality%/"
      title="Title with some <em>HTML</em>"
      title-link="https://www.google.com"
      subtitle="Subtitle"
      :image-width="175"
      :image-height="175"
      :image-max-width="1440"
      :image-max-height="2560"
    >
      <template #customIcon>
        <gothamist-arrow />
      </template>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import VSimpleResponsiveImage from '../v2/src/components/VSimpleResponsiveImage.vue'
import VCard from '../v2/src/components/VCard.vue'
import GothamistArrow from '../assets-shared/icons/gothamist/GothamistArrow'


// import VAudioPlayerSystem from '~/v2/src/components/VAudioPlayerSystem'
// import VTag from '~/v2/src/components/VTag'
// import VSimpleResponsiveImage from '~/v2/src/components/VSimpleResponsiveImage'
// import VButton from '~/v1/src/components/src/components/VButton'
// import VPerson from '~/v1/src/components/src/components/VPerson'

const props = defineProps({})


</script>

<style lang="scss"></style>
