<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: [String, Object],
    default: '',
  },
  target: {
    type: String,
    default: "_blank",
  },
})
const isExternal = computed(() => {
  if (typeof props.to === 'string' && /^http(s)+:/.test(props.to)) {
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
    :rel="[
      'noopener ',
      props.target === '_blank' ? 'noreferrer' : ''
    ]"
    class="flexible-link external"
  >
    <slot name="default"></slot>
  </a>
  <nuxt-link v-else class="flexible-link external" v-bind="{ ...$props, ...$attrs }">
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

