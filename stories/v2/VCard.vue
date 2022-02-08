<template>
  <!-- :class="[responsive ? `flex-column ${bp}:flex-row` : '']" -->
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
          <!-- eslint-disable-next-line -->
          <h2 v-html="title" />
          <gallery-icon v-if="showGalleryIcon" />
        </v-flexible-link>
      </div>
      <p v-if="subtitle" class="card-subtitle">{{ subtitle }}</p>
      <div v-if="$slots.default" class="card-slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
// import Card from 'primevue/card'
import breakpoint from '../../src/assets/library/breakpoints.module.scss'
import VTag from './VTag'
import VFlexibleLink from './VFlexibleLink'
import VSimpleResponsiveImage from './VSimpleResponsiveImage'
import GalleryIcon from '../assets-shared/icons/GalleryIcon'

export default {
  name: 'VCard',
  components: {
    GalleryIcon,
    VSimpleResponsiveImage,
    VTag,
    VFlexibleLink,
    // Card,
  },
  props: {
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
  },
  data() {
    return {
      currentWidth: null,
    }
  },
  computed: {
    hasDetails() {
      return !!this.title || !!this.subtitle || !!this.$slots.default
    },
    getMobileImageScale() {
      return this.currentWidth < breakpoint.sm ? this.mobileImageScale : 1
    },
    getRatio() {
      const verticalImage = this.imageMaxWidth < this.imageMaxHeight
      const hRatio = Number(this.ratio.charAt(0))
      const vRatio = Number(this.ratio.charAt(this.ratio.length - 1))
      return verticalImage ? vRatio / hRatio : hRatio / vRatio
    },
  },
  beforeMount() {
    this.currentWidth = Math.round(window.innerWidth)
  },
  methods: {
  },
}
</script>

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
      display: inline-block;
      text-decoration: none;
      overflow-wrap: anywhere;
      word-break: break-word;
    }
  }
}

// .card .o-gallery-icon {
//   width: 20px;
//   height: 25px;
//   margin-left: var(--space-2);
//   margin-bottom: 2px;
// }

// .card.mod-large .o-gallery-icon {
//   width: 30px;
//   height: 30px;
//   margin-bottom: 3px;
// }

// .card-title-link:hover {
//   color: RGB(var(--color-text));
//   opacity: var(--opacity-link-hover);
//   text-decoration: none;
// }

// .card-subtitle {
//   font-family: var(--font-family-subheader);
//   font-size: var(--font-size-4);
// }

// .card.mod-vertical {
//   flex-direction: column;
//   --card-image-width: 300px;
//   --card-image-height: 200px;
//   max-width: var(--card-image-width);
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

// .card.mod-vertical.card.mod-large {
//   --card-image-width: 640px;
//   --card-image-height: 426px;
// }

.card .card-slot {
  margin-top: var(--space-2);
}
</style>
