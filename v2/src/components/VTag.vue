<script setup>
import Button from 'primevue/button'
import VFlexibleLink from './VFlexibleLink'
const emit = defineEmits(['tagClick'])
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
    <v-flexible-link :to="props.slug" :class="props.slug ? '' : 'disabled'">
      <Button
        :class="props.name"
        :label="props.name"
        :style="props.radius !== null ? `border-radius: ${props.radius}px;` : ''"
        @click="props.slug ? emit('tagClick', props.slug) : null"
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
