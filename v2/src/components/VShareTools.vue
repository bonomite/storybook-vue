<script setup>
const props = defineProps({
  label: {
    type: String,
    default: null
  },
  responsive: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="v-share-tools"
    :class="[{ 'responsive': props.responsive }, { 'vertical': props.vertical }]"
  >
    <div class="group">
      <p v-if="props.label" class="label">{{ props.label }}</p>
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.v-share-tools {
  .group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: spacing(4);
  }
  &.responsive {
    @include media("<sm") {
      .label {
        width: 100%;
      }
    }
  }
  &.vertical {
    .group {
      flex-direction: column;
    }
  }
}
</style>
