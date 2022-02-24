<script setup>
import Button from 'primevue/button'
import VFlexibleLink from './VFlexibleLink'

const props = defineProps({
  slug: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  radius: {
    type: Number,
    default: null,
  },
})
</script>

<template>
  <span class="p-tag-holder">
    <v-flexible-link :to="slug" :class="slug ? '' : 'disabled'">
      <Button
        :class="name"
        :label="name"
        :style="radius !== null ? `border-radius: ${radius}px;` : ''"
      ></Button>
    </v-flexible-link>
  </span>
</template>

<style lang="scss">
.p-tag-holder {
  .flexible-link {
    text-decoration: none !important;
    display: inline-flex;
    &.disabled {
      pointer-events: none;
    }
    .p-button {
      padding: $tagPadding;
      border: none;
      text-decoration: none;
      vertical-align: middle;
      .p-button-label {
        font-weight: $badgeFontWeight;
        font-size: $badgeFontSize;
        letter-spacing: $badgeLetterSpacing;
      }
    }
    &:hover {
      .p-button-label {
        text-decoration: none !important;
        color: $primaryTextColor !important;
      }
    }
  }
}
</style>
