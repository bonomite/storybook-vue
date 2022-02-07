<template>
  <div class="card">
    <template v-if="image">
      <nuxt-link
        class="card-image-link card-image-wrapper"
        :class="{ 'disabled': !titleLink }"
        :to="titleLink"
        aria-hidden="true"
        role="presentation"
        tabindex="-1"
        @click="$emit('componentEvent', titleLink)"
      >
        <v-simple-responsive-image
          class="card-image"
          :src="image"
          :width="imageWidth"
          :height="imageHeight"
          :max-width="imageMaxWidth || Infinity"
          :max-height="imageMaxHeight || Infinity"
          :alt="title"
          role="presentation"
        />
      </nuxt-link>
    </template>
    <span v-else class="card-image-wrapper">
      <v-simple-responsive-image
        v-if="image"
        class="card-image"
        :src="image"
        :width="imageWidth"
        :height="imageHeight"
        :max-width="imageMaxWidth || Infinity"
        :max-height="imageMaxHeight || Infinity"
        alt
        role="presentation"
      />
    </span>
    <div v-if="hasDetails" class="card-details">
      <div v-if="tags || sponsored" class="card-tag">
        <v-tag v-for="(tag, index) in tags" :key="index" :name="tag.name" :slug="tag.slug" />
        <v-tag v-if="sponsored" name="sponsored" />
      </div>
      <div v-if="title" class="card-title" role="heading" aria-level="3">
        <nuxt-link v-if="titleLink" class="card-title-link" :to="titleLink">
          <!-- eslint-disable-next-line -->
          <span v-html="title" />
          <gallery-icon v-if="showGalleryIcon" />
        </nuxt-link>
        <template v-else>
          <!-- eslint-disable-next-line -->
          <span v-html="title" />
          <gallery-icon v-if="showGalleryIcon" />
        </template>
      </div>
      <div v-if="subtitle" class="card-subtitle">{{ subtitle }}</div>
      <div v-if="$slots.default" class="card-slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
// import Card from 'primevue/card'
import VTag from './VTag'
import VSimpleResponsiveImage from './VSimpleResponsiveImage'
import GalleryIcon from '../assets-shared/icons/GalleryIcon'

export default {
  name: 'VCard',
  components: {
    GalleryIcon,
    VSimpleResponsiveImage,
    VTag,
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
    verticalEffect: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasDetails() {
      return !!this.title || !!this.subtitle || !!this.$slots.default
    },
  },
}
</script>

<style lang="scss">
.card {
  // --card-image-width: 193px;
  // --card-image-height: 170px;
  display: flex;
  background: $cardBackground;
  color: $textColor;
  box-shadow: $cardShadow;
  -webkit-box-shadow: $cardShadow;
  border-radius: $borderRadius;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  /* &:not(.mod-vertical) {
    @include media('<large') {
      --card-image-width: 100px;
      --card-image-height: 100px;
    }
  } */
  .card-image-link {
    img{
      cursor: pointer;
    }
    &.disabled {
      pointer-events: none;
    }
  }
}

.card-image-wrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
  max-width: var(--card-image-width);
  height: var(--card-image-height);
}

.card-image {
  height: inherit;
  .image {
    position: relative;
    object-fit: cover;
    width: var(--card-image-width);
    // height: var(--card-image-height);
    height: inherit;
  }
}

.card-details {
  flex: 1;
  padding: var(--space-3);
  overflow: hidden;
}

.card-title {
  font-family: var(--font-family-header);
  font-size: var(--font-size-7);
  display: flex;
  align-items: center;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.card .o-gallery-icon {
  width: 20px;
  height: 25px;
  margin-left: var(--space-2);
  margin-bottom: 2px;
}

.card.mod-large .o-gallery-icon {
  width: 30px;
  height: 30px;
  margin-bottom: 3px;
}

.card-title-link {
  color: RGB(var(--color-text));
  text-decoration: none;
}

.card-title-link:hover {
  color: RGB(var(--color-text));
  opacity: var(--opacity-link-hover);
  text-decoration: none;
}

.card-subtitle {
  font-family: var(--font-family-subheader);
  font-size: var(--font-size-4);
}

.card.mod-vertical {
  flex-direction: column;
  --card-image-width: 300px;
  --card-image-height: 200px;
  max-width: var(--card-image-width);
}

.card.mod-large {
  --card-image-width: 360px;
  --card-image-height: 306px;
}

.card.mod-large .card-title {
  font-size: var(--font-size-10);
}

.card.mod-large .card-subtitle {
  font-size: var(--font-size-7);
}

.card.mod-large:not(.mod-vertical) .card-image-wrapper,
.card.mod-large:not(.mod-vertical) .card-image .image {
  @include media("<medium") {
    min-width: 100px;
    width: 100px;
    height: 100px;
  }
}

.card.mod-vertical.card.mod-large {
  --card-image-width: 640px;
  --card-image-height: 426px;
}

.card .card-slot {
  margin-top: var(--space-2);
}
</style>
