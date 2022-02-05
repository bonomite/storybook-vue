<template>
  <figure class="image-with-caption" :class="variation">
    <div class="image-with-caption-wrapper">
      <div class="image-with-caption-image">
        <a
          class="image-with-caption-image-link"
          :class="!imageUrl && !allowPreview ? 'disabled' : ''"
          :href="imageUrl && !allowPreview ? imageUrl : null"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-simple-responsive-image
            v-if="image"
            :src="image"
            :alt="altText"
            :width="width"
            :height="height"
            :max-width="maxWidth || Infinity"
            :max-height="maxHeight || Infinity"
            :allow-vertical-effect="allowVerticalEffect"
            :allow-preview="allowPreview"
          />
        </a>

        <div
          v-if="caption"
          class="image-with-caption-caption"
          :class="{ visible: captionVisible }"
        >
          <p>
            {{ caption }}
          </p>
        </div>
      </div>
      <div
        v-if="caption && !gothamistVariation"
        class="image-with-caption-icons"
        @click="toggleCaption"
      >
        <!-- <info-icon
          v-show="!captionVisible"
          class="image-with-caption-icons-info"
        /> -->

        <Button
          v-show="captionVisible"
          icon="pi pi-times p-button-icon"
          class="p-button-sm p-button-secondary p-button-text image-with-caption-icons-close"
        ></Button>
        <Button
          v-show="!captionVisible"
          icon="pi pi-info"
          class="p-button-sm image-with-caption-icons-info"
        ></Button>
      </div>
    </div>
    <figcaption v-if="credit || (caption && gothamistVariation)">
      <gothamist-arrow v-if="caption && gothamistVariation" />
      <div class="image-with-caption-credit">
        <div v-if="caption && gothamistVariation" class="gothamist-caption">
          {{ caption }}
        </div>
        <a
          v-if="creditUrl"
          :href="creditUrl"
          rel="noopener"
          class="image-with-caption-credit-link"
        >
          {{ credit }}
        </a>
        <span v-else>
          {{ credit }}
        </span>
      </div>
      <div v-if="title" class="image-with-caption-title">
        {{ title }}
      </div>
      <div v-if="description" class="image-with-caption-description">
        {{ description }}
      </div>
    </figcaption>
  </figure>
</template>

<script>
import GothamistArrow from '../assets-shared/icons/gothamist/GothamistArrow'
import VSimpleResponsiveImage from './VSimpleResponsiveImage'
import Button from 'primevue/button'

export default {
  name: 'VImageWithCaption',
  components: {
    GothamistArrow,
    VSimpleResponsiveImage,
    Button,
  },
  props: {
    altText: {
      default: null,
      type: String,
    },
    caption: {
      default: null,
      type: String,
    },
    credit: {
      default: null,
      type: String,
    },
    creditUrl: {
      default: null,
      type: String,
    },
    description: {
      default: null,
      type: String,
    },
    height: {
      default: null,
      type: Number,
    },
    urlTemplate: {
      default: null,
      type: String,
    },
    variation: {
      default: null,
      type: String,
    },
    width: {
      default: null,
      type: Number,
    },
    widthInViewport: {
      default: null,
      type: Number,
    },
    widthInViewportTablet: {
      default: null,
      type: Number,
    },
    image: {
      default: null,
      type: String,
    },
    imageUrl: {
      default: null,
      type: String,
    },
    title: {
      default: null,
      type: String,
    },
    maxHeight: {
      default: null,
      type: Number,
    },
    maxWidth: {
      default: null,
      type: Number,
    },
    allowVerticalEffect: {
      default: false,
      type: Boolean,
    },
    /**
     * allow the user to click on the image to open a lightbox
     */
    allowPreview: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['componentEvent'],
  data() {
    return {
      captionVisible: false,
    }
  },
  computed: {
    gothamistVariation() {
      return this.variation === 'gothamist'
    },
  },
  methods: {
    toggleCaption() {
      this.captionVisible = !this.captionVisible
      if (this.captionVisible) {
        this.$emit('componentEvent', 'Expanded')
      } else {
        this.$emit('componentEvent', 'Collapsed')
      }
    },
  },
}
</script>

<style lang="scss">
.image-with-caption {
  width: 100%;
}

.image-with-caption .image-with-caption-image,
.image-with-caption .image-with-caption-wrapper {
  position: relative;
}

.image-with-caption .image-with-caption-image-link.disabled {
  pointer-events: none;
}

.image-with-caption .image-with-caption-caption {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: spacing(2);
  transition: $transitionDuration;
  overflow-y: auto;
  display: block;
  max-height: 100%;
  background: rgba($primaryDarkerColor, 0.7);
  opacity: 0;
  pointer-events: none;
  p {
    color: $white;
  }

  &.visible {
    pointer-events: auto;
    opacity: 1;
  }
}

.image-with-caption .image-with-caption-credit,
.image-with-caption .image-with-caption-caption p {
  margin-right: spacing(3.5);
}

.image-with-caption .image-with-caption-credit {
  margin-left: spacing(2);
  @media all and (min-width: $medium) {
    margin-left: 0;
  }
  margin-top: spacing(1);
  text-align: right;
}

// .image-with-caption.gothamist .image-with-caption-credit {
//   margin-top: spacing(1);
//   text-align: left;
//   display: flex;
//   flex-wrap: wrap;
//   align-items: baseline;
// }

// .image-with-caption.gothamist .image-with-caption-credit-link {
//   text-transform: uppercase;
//   line-height: 20px;

//   &:hover {
//     background-color: RGB(var(--color-reddish-orange));
//     color: RGB(var(--color-white));
//   }
// }

// .image-with-caption.gothamist .image-with-caption-credit span {
//   @include typeface(small, 1);
//   letter-spacing: 1px;
//   text-transform: uppercase;
// }

.image-with-caption .image-with-caption-icons {
  cursor: pointer;
  margin: 0 0 0 auto;
  position: absolute;
  bottom: spacing(2);
  right: spacing(2);
  z-index: 999;
}

// keep X white on rollover
.image-with-caption
  .image-with-caption-icons
  .image-with-caption-icons-close
  .pi {
  color: $white;
}

.image-with-caption .info-icon,
.image-with-caption .o-close-icon {
  transition: $transitionDuration;
  width: 28px;
  height: 28px;

  &:hover {
    opacity: var(--opacity-hover);
  }
}

.image-with-caption .o-close-icon {
  padding: 6px;
}

.image-with-caption .o-close-icon path,
.image-with-caption .info-icon-i {
  fill: $white;
}

.image-with-caption .info-icon-bg {
  fill: rgba($black, 0.7);
}

// .image-with-caption .gothamist-caption {
//   display: flex;
//   align-items: center;
//   font-size: var(--font-size-4);
//   margin-right: spacing(2);
// }

// .image-with-caption .o-gothamist-arrow-icon {
//   width: 20px;
//   margin-top: -11px;
//   margin-right: spacing(2);
//   float: left;

//   path {
//     fill: RGB(var(--color-reddish-orange));
//   }
// }

.image-with-caption .image-with-caption-title {
  @include typeface(header, 8);
  margin: spacing(1) 0;
  clear: both;
}

.image-with-caption .image-with-caption-description {
  margin: spacing(1) 0;
}
</style>
