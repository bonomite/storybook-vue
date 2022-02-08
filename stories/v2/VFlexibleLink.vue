<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  target: {
    type: String,
    default: "_blank",
  },
})
const isExternal = computed(() => {
  if (/^http(s)+:/.test(props.to)) {
    return true
  }
  return false
})
</script>

<template>
  <a
    v-if="isExternal"
    v-bind="{ ...$props, ...$attrs }"
    :href="to"
    :target="target"
    rel="noopener noreferrer"
  >
    <slot name="default"></slot>
  </a>
  <nuxt-link v-else v-bind="{ ...$props, ...$attrs }">
    <slot name="default"></slot>
  </nuxt-link>
</template>


