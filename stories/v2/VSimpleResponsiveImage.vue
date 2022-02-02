<template>
  <div class="simple-responsive-image-holder">
    <div v-if="isVertical" class="bg">
      <img
        :src="computedSrcBg"
        :width="width"
        :height="height"
        :alt="alt"
        loading="lazy"
      />
    </div>
    <Image
      class="image"
      :class="isVertical ? 'is-vertical' : ''"
      image-style="width: 100%; height: auto;"
      :srcset="srcset"
      :src="computedSrc"
      :width="computedWidth"
      :height="height"
      :style="isVertical ? `width:${computedWidth}px;` : ''"
      :alt="alt"
      :preview="allowPreview"
      loading="lazy"
      @show="enlarge"
      @hide="closeEnlarge"
      @click="$emit('click', $event.target.value)"
      @keypress="$emit('keypress', $event.target.value)"
    >
      <template #indicator>
        <span>Enlarge Image</span>
      </template>
    </Image>
    <span v-if="loadingEnlargedImage">
      <Teleport to=".p-component-overlay">
        <ProgressSpinner
          v-if="loadingEnlargedImage"
          style="
            z-index: -1;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
          "
          stroke-width="6"
        />
      </Teleport>
    </span>
  </div>
</template>
<script>
import Image from 'primevue/image'
import ProgressSpinner from 'primevue/progressspinner'
/**
 * Responsive image component, generates a srcset with multiple image sizes for different display densities.
 */
export default {
  components: {
    Image,
    ProgressSpinner,
  },
  props: {
    /* alt text prop */
    alt: {
      type: String,
      default: null,
    },
    /**
     * An image url template string with tokens to replace for width and height
     * e.g. "https://source.unsplash.com/random/%width%x%height%"
     * A plain image url here will also 'work' but you won't get additional sizes
     */
    src: {
      type: String,
      default: null,
    },
    /**
     * The desired width for the 1x sized image.
     * this will also be added as an attribute to the image tag
     */
    width: {
      type: Number,
      default: null,
    },
    /**
     * The desired height for the 1x sized image.
     * this will also be added as an attribute to the image tag
     */
    height: {
      type: Number,
      default: null,
    },
    /**
     * Maximum width for the image. Generated sizes will be clipped to fit the max dimensions.
     * If you know the width of the original, full-sized image, use it here.
     */
    maxWidth: {
      type: Number,
      default: Infinity,
    },
    /**
     * Maximum height for the image. Generated sizes will be clipped to fit the max dimensions.
     * If you know the height of the original, full-sized image, use it here.
     */
    maxHeight: {
      type: Number,
      default: Infinity,
    },
    /**
     * Substring or regex within the urlto be replaced with width values.
     */
    widthToken: {
      type: [String, RegExp],
      default: '%width%',
    },
    /**
     * Substring or regex within the url to be replaced with height values.
     */
    heightToken: {
      type: [String, RegExp],
      default: '%height%',
    },
    /**
     * Substring or regex within the url to control jpg compression quality.
     */
    qualityToken: {
      type: [String, RegExp],
      default: '%quality%',
    },
    /**
     * List of display densities to generate sizes for in the srcset
     */
    sizes: {
      type: Array,
      default() {
        return [2, 3, 3.5, 4]
      },
    },
    /**
     * jpg compression quality
     */
    quality: {
      type: Number,
      default: 80,
    },
    /**
     * allow the vertical effect to happen
     */
    allowVerticalEffect: {
      type: Boolean,
      default: false,
    },
    /**
     * allow the user to click on the image to open a lightbox
     */
    allowPreview: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click', 'keypress'],
  data() {
    return {
      isVertical: {
        default: false,
        type: Boolean,
      },
      loadingEnlargedImage: false,
    }
  },
  computed: {
    computedWidth() {
      return this.isVertical
        ? Math.round(this.maxWidth / (this.maxHeight / this.height))
        : this.width
    },
    computedSrc() {
      const template = this.src
      return template
        ? template
            .replace(this.widthToken, this.computedWidth)
            .replace(this.heightToken, this.height)
            .replace(this.qualityToken, this.quality)
        : undefined
    },
    computedSrcBg() {
      const template = this.src
      return template
        ? template
            .replace(this.widthToken, this.width)
            .replace(this.heightToken, this.height)
            .replace(this.qualityToken, 15)
        : undefined
    },
    srcset() {
      const template = this.src
      if (template) {
        // If this is just a plain string with no tokens,
        // we don't need to generate a srcset
        if (
          template ===
          template.replace(this.widthToken, '').replace(this.heightToken, '')
        ) {
          return ''
        }
        let srcset = ''
        let lastImage = false
        for (const size of this.sizes) {
          /* continue if it is NOT the lastImage and the image has more pixels than its rendered area */
          if (!lastImage && this.maxWidth > this.computedWidth) {
            let width = Math.round(this.computedWidth * size)
            let height = Math.round(this.height * size)

            /* the image no longer has enough resolution to support the next srcset, use its maximum size and make it the last on the srcset list */
            if (width > this.maxWidth || height > this.maxHeight) {
              height = Math.round((height / width) * this.maxWidth)
              width = this.maxWidth
              lastImage = true
            }

            const url = template
              .replace(this.widthToken, width)
              .replace(this.heightToken, height)
              .replace(this.qualityToken, this.calcQuality(this.quality, size))
            srcset += `${url} ${size}x${
              size < this.sizes.length && !lastImage ? ',' : ''
            } `
          }
        }
        return srcset
      } else {
        return undefined
      }
    },
  },
  created() {
    this.isVertical = this.allowVerticalEffect && this.maxHeight > this.maxWidth
  },
  methods: {
    calcQuality(quality, size) {
      return size >= 2 ? quality - Math.round(size * 5) : quality
    },
    enlarge() {
      this.loadingEnlargedImage = true
      const img = document.getElementsByClassName('p-image-preview')
      const sizeList = this.srcset.split(',')
      const lastSize = sizeList[sizeList.length - 1]
      const biggestSize = lastSize.slice(0, -3)
      img[0].setAttribute('src', biggestSize)
    },
    closeEnlarge() {
      this.loadingEnlargedImage = false
    },
  },
}
</script>
<style lang="scss">
.simple-responsive-image-holder {
  position: relative;
  .image {
    position: relative;
    width: 100%;
    height: auto;
    &.is-vertical {
      margin: auto;
      display: block;
    }
  }

  .bg {
    pointer-events: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    &:after {
      content: '';
      background-color: RGB(var(--surface-900));
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.7;
    }
    img {
      width: 100%;
      filter: blur(3px) grayscale(100%);
      object-fit: cover;
      height: inherit;
    }
  }
}
.p-component-overlay {
  .p-image-toolbar {
    z-index: 1;
  }
}
</style>
