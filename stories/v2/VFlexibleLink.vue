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
    class="flexible-link"
  >
    <slot name="default"></slot>
  </a>
  <nuxt-link v-else class="flexible-link" v-bind="{ ...$props, ...$attrs }">
    <slot name="default"></slot>
  </nuxt-link>
</template>
<style lang="scss">
.flexible-link {
  color: $linkButtonColor;
  transition: all $transitionDuration;
  * {
    transition: all $transitionDuration;
  }
  &:hover {
    color: $linkButtonHoverColor !important;
    text-decoration: $linkButtonTextHoverDecoration;
    * {
      color: $linkButtonHoverColor !important;
      text-decoration: $linkButtonTextHoverDecoration;
    }
  }
  &:focus {
    @include focused();
  }
}
</style>

