<template>
  <div class="track-info">
    <div v-if="image" class="track-info-image">
      <a
        v-if="image && titleLink"
        :href="titleLink"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          v-if="image"
          :src="image"
          :alt="title"
        >
      </a>
      <img
        v-else-if="image"
        :src="image"
        :alt="title"
      >
    </div>
    <div class="track-info-details">
      <div
        v-if="livestream"
        class="track-info-livestream"
      >
        <div class="track-info-livestream-indicator">
          <span class="track-info-livestream-indicator-text">Live</span>
          <span class="track-info-livestream-indicator-dot pulse" />
        </div>
        <div class="track-info-livestream-station">
          {{ station }}
        </div>
      </div>
      <div class="track-info-title">
        <h2 v-if="title && titleLink">
          <a
            :href="titleLink"
            target="_blank"
            rel="noopener noreferrer"
            class="track-info-title-link"
          >
            {{ title }}
          </a>
        </h2>
        <h2 v-if="title && !titleLink">
          {{ title }}
        </h2>
      </div>
      <div
        v-if="description"
        class="track-info-description"
      >
        <div
          v-if="description && !descriptionLink"
          class="track-info-description"
        >
          {{ description }}
        </div>
        <a
          v-if="description && descriptionLink"
          :href="descriptionLink"
          target="_blank"
          rel="noopener noreferrer"
          class="track-info-description-link"
        >
          {{ description }}
        </a>
      </div>
      <template v-if="!livestream">
        <div
          class="track-info-progress"
          @click="$emit('seek', $event)"
        >
          <div
            :style="{ width: percentComplete + '%' }"
            class="track-info-seeker"
          />
          <div
            :style="{ width: percentBuffered + '%' }"
            class="track-info-buffered"
          />
        </div>
        <div class="track-info-time">
          <span class="track-info-time-current">{{ convertTime(currentSeconds) }}</span>
          <span class="track-info-time-separator">/</span>
          <span class="track-info-time-total">{{ convertTime(durationSeconds) }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackInfo',
  props: {
    description: {
      type: String,
      default: null
    },
    descriptionLink: {
      type: String,
      default: null
    },
    livestream: {
      type: Boolean,
      default: false
    },
    station: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    titleLink: {
      type: String,
      default: null
    },
    durationSeconds: {
      type: Number,
      default: 0
    },
    currentSeconds: {
      type: Number,
      default: 0
    },
    buffered: {
      type: Number,
      default: 0
    }
  },
  computed: {
    percentBuffered () {
      return (this.buffered / this.durationSeconds) * 100
    },
    percentComplete () {
      return (this.currentSeconds / this.durationSeconds) * 100
    }
  },
  methods: {
    convertTime (val) {
      const hhmmss = new Date(val * 1000).toISOString().substr(11, 8)
      return hhmmss.indexOf('00:') === 0 ? hhmmss.substr(3) : hhmmss
    }
  }
}
</script>

<style lang="scss">
.track-info {
  display: flex;
  gap: 16px;
  width: 100%;
  height: inherit;
  flex: auto;
  align-self: center;
  overflow: hidden;
}

.track-info-image {
  display: none;
  @media all and (min-width: $medium) {
  display: block;
  }
}

.track-info-image img {
  --track-info-image-size: 80px;
  width: var(--track-info-image-size);
  max-width: var(--track-info-image-size);
  height: var(--track-info-image-size);
  flex: 1 0 var(--track-info-image-size);
}

.track-info-details {
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  line-height: normal;
  &*{
    line-height: normal;
  }
}

.track-info-livestream {
  height: 16px;
  line-height: 16px;
  display: flex;
  margin-bottom: 8px;
}

.track-info-livestream-indicator {
  display: flex;
  align-items: center;
  background: RGB(var(--color-text));
  color: RGB(var(--color-text-inverse));
  border-radius: 44px;
  padding: 4px;
  margin-right: 8px;
}

.track-info-livestream-indicator-text {
  font-size: var(--font-size-1);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.track-info-livestream-indicator-dot {
  background-color: #e74f4f;
  border-radius: 8px;
  height: 8px;
  width: 8px;
}

.track-info-livestream-station {
  font-family: var(--font-family-body);
  font-size: var(--font-size-2);
  font-weight: 700;
}

.track-info-title {
  font-family: var(--font-family-subheader);
  font-size: var(--font-size-6);
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.track-info-title h2 {
  font-weight: 700;
  line-height: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
}

.track-info-description {
  display: none;
  @media all and (min-width: $medium) {
    display: block;
    font-family: var(--font-family-small);
    font-size: var(--font-size-2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
  }
}

.track-info-description-link {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
}

.track-info-progress {
  position: absolute;
  background-color: RGB(var(--color-text));
  cursor: pointer;
  min-width: 200px;
  top:-5px;
  margin-top: 0;
  left: 0;
  right: 0;
  height: 5px;
  @media all and (min-width: $medium) {
    top: 0;
    margin-top: 8px;
    height: 3px;
    position: relative;
  }
}

.track-info-progress .player-track-seeker {
  background-color: RGB(var(--color-text));
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 20;
}

.track-info-progress .player-track-buffered {
  background-color: RGB(var(--color-gray));
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 10;
}

.track-info-progress .player-track-playhead {
  position: absolute;
  height: 22px;
  width: 22px;
  margin: -8px -16px;
  transform: scale(0, 0);
  left: 0;
  opacity: 0;
  bottom: 0;
  transition: opacity .2s linear, transform .2s;

  &::after {
    content: '';
    height: 22px;
    width: 22px;
    background-color: RGB(var(--color-dark-gray));
    border-radius: 50%;
    opacity: 1;
    display: block;
    position: absolute;
    left: calc(50% - 11px);
    top: calc(50% - 11px);
  }
}

.track-info-time {
  display: flex;
  font-size: var(--font-size-2);
  font-weight: 500;
  @media all and (min-width: $medium) {
    justify-content: flex-end;
  }
}

.track-info-time .player-track-time-current {
  margin-right: var(--space-1);
}

.track-info-time .player-track-time-total {
  margin-left: var(--space-1);
}
</style>
