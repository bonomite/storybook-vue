<script setup>

import { ref, computed, useSlots, onBeforeMount } from 'vue'
import breakpoint from '../../src/assets/library/breakpoints.module.scss'
import VTag from './VTag'
import VFlexibleLink from './VFlexibleLink'
import VSimpleResponsiveImage from './VSimpleResponsiveImage'
import GalleryIcon from '../assets-shared/icons/GalleryIcon'

const props = defineProps({
  alt: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  imageHeight: {
    type: Number,
    default: null,
  },
  imageWidth: {
    type: Number,
    default: null,
  },
  showGalleryIcon: {
    type: Boolean,
    default: false,
  },
  sponsored: {
    type: Boolean,
    default: false,
  },
  subtitle: {
    type: String,
    default: null,
  },
  tags: {
    type: Array,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  titleLink: {
    type: String,
    default: null,
  },
  imageMaxHeight: {
    type: Number,
    default: Infinity,
  },
  imageMaxWidth: {
    type: Number,
    default: Infinity,
  },
  /**
   * does not allow the vertical effect to happen
   */
  allowVerticalEffect: {
    type: Boolean,
    default: false,
  },
  /**
   * Switches to vertical layout on 'sm' mobile breakpoint
   */
  responsive: {
    type: Boolean,
    default: false,
  },
  /**
   * will control the scale of the image on 'sm' mobile breakpoint
   */
  mobileImageScale: {
    type: Number,
    default: 1,
  },
  /**
   * what breakpoint to be mobile breakpoint
   */
  bp: {
    type: String,
    default: 'sm',
  },
  /**
   * ratio (in landscape)
   */
  ratio: {
    type: String,
    default: '3:2',
  },
})
const slots = useSlots()

let currentWidth = ref(null)

const emit = defineEmits(['componentEvent'])

const hasDetails = computed(() => {
  return !!props.title || !!props.subtitle || !!slots.default
})

const getMobileImageScale = computed(() => {
  return currentWidth.value < breakpoint.sm ? props.mobileImageScale : 1
})

const getRatio = computed(() => {
  const verticalImage = props.imageMaxWidth < props.imageMaxHeight
  const hRatio = Number(props.ratio.charAt(0))
  const vRatio = Number(props.ratio.charAt(props.ratio.length - 1))
  return verticalImage ? vRatio / hRatio : hRatio / vRatio
})

onBeforeMount(() => {
  currentWidth.value = Math.round(window.innerWidth)
})
</script>

<template>
  <div class="card" :class="{ [`flex-column ${bp}:flex-row`]: responsive }">
    <template v-if="image">
      <v-flexible-link
        class="card-image-link card-image-wrapper"
        :class="{ 'disabled': !titleLink, [`w-full ${bp}:w-max`]: responsive }"
        :to="titleLink"
        aria-hidden="true"
        role="presentation"
        tabindex="-1"
        @click="$emit('componentEvent', titleLink)"
      >
        <!-- mobile, uses window width to load the image size-->
        <v-simple-responsive-image
          class="card-image w-full"
          :class="responsive ? `${bp}:hidden ${bp}:w-max` : 'hidden'"
          :src="image"
          :width="currentWidth"
          :height="Math.round(currentWidth * getRatio)"
          :max-width="imageMaxWidth || Infinity"
          :max-height="imageMaxHeight || Infinity"
          :alt="title"
          :allow-vertical-effect="allowVerticalEffect"
          role="presentation"
        />
        <!-- desktop, uses width and height props -->
        <v-simple-responsive-image
          class="card-image w-full"
          :class="{ [`hidden ${bp}:w-max ${bp}:block`]: responsive }"
          :src="image"
          :width="Math.round(imageWidth * getMobileImageScale)"
          :height="Math.round(imageHeight * getMobileImageScale)"
          :max-width="imageMaxWidth || Infinity"
          :max-height="imageMaxHeight || Infinity"
          :alt="title"
          role="presentation"
        />
      </v-flexible-link>
    </template>
    <div v-if="hasDetails" class="card-details">
      <div v-if="tags || sponsored" class="card-tags">
        <v-tag v-for="(tag, index) in tags" :key="index" :name="tag.name" :slug="tag.slug" />
        <v-tag v-if="sponsored" name="sponsored" />
      </div>
      <div v-if="title" class="card-title" role="heading" aria-level="3">
        <v-flexible-link
          class="card-title-link"
          :class="{ 'disabled': !titleLink }"
          :to="titleLink"
        >
          <h2 v-html="title" />
          <gallery-icon v-if="showGalleryIcon" title="Gallery" />
        </v-flexible-link>
      </div>
      <p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>
      <div v-if="$slots.default" class="card-slot">
        <slot />
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.card {
  display: flex;
  align-items: flex-start;
  background: $cardBackground;
  color: $textColor;
  box-shadow: $cardShadow;
  -webkit-box-shadow: $cardShadow;
  border-radius: $borderRadius;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  a.disabled {
    pointer-events: none;
  }
  .card-image-link {
    img {
      cursor: pointer;
    }
  }
  .card-details {
    align-self: flex-start;
    flex: 1;
    padding: var(--space-3);
    overflow: hidden;
    .card-tags {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: spacing(2);
      margin-bottom: spacing(2);
    }
    .card-title-link {
      display: inline-flex;
      text-decoration: none;
      overflow-wrap: anywhere;
      word-break: break-word;
      .o-gallery-icon {
        width: 1.5rem;
        height: auto;
        margin-left: spacing(2);
        margin-bottom: 2px;
        path {
          fill: $linkButtonColor;
        }
      }
    }
  }
  .card-slot {
    margin-top: spacing(5);
  }
}

// .card.mod-large .o-gallery-icon {
//   width: 30px;
//   height: 30px;
//   margin-bottom: 3px;
// }

// .card-subtitle {
//   font-family: var(--font-family-subheader);
//   font-size: var(--font-size-4);
// }

// .card.mod-large {
//   --card-image-width: 360px;
//   --card-image-height: 306px;
// }

// .card.mod-large .card-title {
//   font-size: var(--font-size-10);
// }

// .card.mod-large .card-subtitle {
//   font-size: var(--font-size-7);
// }

// .card.mod-large:not(.mod-vertical) .card-image-wrapper,
// .card.mod-large:not(.mod-vertical) .card-image .image {
//   @include media("<medium") {
//     min-width: 100px;
//     width: 100px;
//     height: 100px;
//   }
// }
</style>
