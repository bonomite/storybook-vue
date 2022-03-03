<script setup>
import { ref } from 'vue'
import Slider from 'primevue/slider'

const props = defineProps({
  volume: {
    type: Number,
    default: 50
  },
  isMuted: {
    type: Boolean,
    default: false
  },
  showVolume: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['volume-toggle-mute', 'volume-change'])

let previousVolume = ref(props.volume)

</script>

<template>
  <div class="volume-control" :class="{ 'show-volume': props.showVolume }">
    <Slider
      v-show="!props.isMuted"
      v-model="previousVolume"
      class="volume-control-slider"
      :min="0"
      :max="100"
      @change="emit('volume-change', previousVolume)"
    />
    <button
      class="volume-control-icon"
      :aria-label="props.isMuted ? 'unmute' : 'mute'"
      @click="emit('volume-toggle-mute')"
      @keypress.space.enter="mute"
    >
      <i v-if="!props.isMuted" class="pi pi-volume-up"></i>
      <i v-if="props.isMuted" class="pi pi-volume-off"></i>
    </button>
  </div>
</template>



<style lang="scss">
.volume-control {
  display: none;
  @media all and (min-width: $medium) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &:hover {
    .volume-control-slider {
      width: 116px;
      opacity: 1;
      visibility: visible;
      margin-right: 0;
    }
  }
  &.show-volume .volume-control-slider,
  & .volume-control-slider.focus-visible {
    width: 116px;
    opacity: 1;
    visibility: visible;
    margin-right: 0;
  }
  .label {
    height: 4px;
    line-height: 0px;
    margin-right: 4px;
  }
}

.volume-control-icon {
  flex: 1 0;
  appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-block;
  height: 36px;
  min-width: 36px;
  max-width: 36px;
}

.volume-control-icon {
  color: $textColor;
}

.volume-control .volume-control-slider {
  transition: width 0.5s, opacity 0.25s, margin-right 0.25s;
  -webkit-transition: width 0.5s, opacity 0.25s, margin-right 0.25s;
  margin-right: 0;
  width: 0px;
  opacity: 0;
  border: none;
}

.volume-control-slider.slide-left-enter,
.volume-control-slider.slide-left-leave-to {
  width: 0px;
  min-width: 0px;
}

.volume-control-slider.slide-left-leave,
.volume-control-slider.slide-left-enter-to {
  width: 116px;
  min-width: 116px;
}

.volume-control-slider.slide-left-enter-active {
  transition: all $transitionEase $transitionDuration;
}

.volume-control-slider.slide-left-leave-active {
  transition: all $transitionEase $transitionDuration;
}
</style>
