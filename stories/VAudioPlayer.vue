<template>
  <div
    v-show="showPlayer"
    :id="fixed ? 'audioPlayerFixed' : 'audioPlayer'"
    class="audioPlayer"
    :class="{ minimized: isMinimized, fixed: fixed }"
  >
    <div class="content">
      <h3>Audio Player!</h3>
      <button
        v-if="fixed"
        @click="closePlayer"
        @mouseover="minimizeTimeoutReset"
      >
        &times;
      </button>
    </div>
    <div class="min-content">
      <div
        class="playPauseButton"
        @click="togglePlay"
        @mouseover="minimizeTimeoutReset"
      >
        <div v-if="isPlaying" class="pause">||</div>
        <div v-else class="play">></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
// import scssVars from './assets/scss/exports.module.scss'
// use esm versions of gsap plugins
import { ScrollTrigger } from './assets/gsap/ScrollTrigger.js'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'VAudioPlayer',
  mixins: [],

  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props) => {
    // props vars
    const fixed = ref(props.fixed)
    const isMinimized = ref(false)
    const isPlaying = ref(false)

    // local data vars
    let timeoutHandler = ref(null)
    const showPlayer = ref(!props.fixed)

    // local vars
    const audioPlayer = '#audioPlayerFixed'
    const animSpeed = 0.5
    // const playerFullWidth = scssVars.audioPlayerWidth.slice(0, -2)
    const playerFullWidth = 375

    // methods
    const togglePlay = () => {
      minimizeTimeoutReset()
      isPlaying.value = !isPlaying.value
    }
    const togglePlayer = (bool) => {
      if (showPlayer.value && fixed.value) {
        if (bool) {
          minimizeTimeoutReset()
          slideIn()
        } else {
          slideOut(() => minimizeTimeoutReset())
        }
      }
    }
    const slideIn = () => {
      gsap.to(audioPlayer, {
        duration: animSpeed,
        right: 0,
        overwrite: true,
      })
    }
    const slideOut = (onCompleteFunc) => {
      gsap.to(audioPlayer, {
        duration: animSpeed,
        right: -playerFullWidth,
        overwrite: true,
        onComplete: () => {
          onCompleteFunc()
        },
      })
    }
    const minimizeTimeoutReset = () => {
      // minimzes player after 6 soconds of inactivity
      if (fixed.value) {
        if (timeoutHandler.value) {
          isMinimized.value = false
          clearTimeout(timeoutHandler)
        }
        timeoutHandler = setTimeout(() => {
          isMinimized.value = true
          clearTimeout(timeoutHandler)
        }, 6000)
      }
    }
    const closePlayer = () => {
      if (isPlaying.value) {
        isMinimized.value = true
      } else {
        slideOut(() => {
          showPlayer.value = false
        })
      }
    }

    onMounted(() => {
      if (fixed.value) {
        minimizeTimeoutReset()
        ScrollTrigger.create({
          trigger: '#audioPlayer',
          markers: true,
          onLeave: () => {
            if (isPlaying.value) {
              showPlayer.value = true
            }
            togglePlayer(true)
          },
          onEnterBack: () => {
            togglePlayer(false)
          },
        })
      }
    })

    return {
      showPlayer,
      isMinimized,
      isPlaying,
      togglePlay,
      closePlayer,
      minimizeTimeoutReset,
    }
  },
  head() {
    return {}
  },
}
</script>

<style lang="scss">
body {
  max-width: $md;
  margin: 0 auto;
  padding: $spacing * 3;
}
.audioPlayer {
  background: orchid;
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 4fr 1fr;
  row-gap: $spacing * 2;
  align-items: center;
  padding: $spacing * 2;
  box-sizing: border-box;
  transition: width 0.5s, padding 0.5s;
  -webkit-transition: width 0.5s, padding 0.5s;
  &.inline {
    width: 100%;
  }
  &.fixed {
    width: $audioPlayerWidth;
    position: fixed;
    bottom: 0;
    right: -$audioPlayerWidth;
    &.minimized {
      width: 60px;
      height: 60px;
      padding: 0;
      .content {
        display: none;
      }
    }
  }
  .min-content {
    width: 100%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr;
    column-gap: $spacing * 3;
    row-gap: $spacing * 3;
    justify-items: end;
  }
  .playPauseButton {
    background: cyan;
    cursor: pointer;
    position: relative;
    text-align: center;
    width: 40px;
    height: 40px;
  }
}
</style>
