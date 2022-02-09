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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import VSimpleResponsiveImage from '../stories/v2/VSimpleResponsiveImage.vue'

// import VAudioPlayerSystem from '~/stories/v2/VAudioPlayerSystem'
// import VTag from '~/stories/v2/VTag'
// import VSimpleResponsiveImage from '~/stories/v2/VSimpleResponsiveImage'
// import VButton from '~/stories/v1/src/components/VButton'
// import VPerson from '~/stories/v1/src/components/VPerson'

const props = defineProps({})


</script>

<style lang="scss"></style>
