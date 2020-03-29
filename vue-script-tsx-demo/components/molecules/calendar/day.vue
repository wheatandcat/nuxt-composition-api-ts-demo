<template>
  <div class="root">
    <div class="no-event" :style="fontStyle">
      {{ dayjs(date).format('D') }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/variables.scss';

.root {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $darkGray;
}

.no-event {
  font-weight: 600;
}
</style>

<script>
import Vue from 'vue'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

dayjs.extend(advancedFormat)

export default Vue.extend({
  props: {
    date: { type: String, default: '' },
    size: { type: Number, default: 1 },
  },
  computed: {
    dayjs: () => dayjs,
    fontStyle() {
      return {
        fontSize: `${1.2 * this.size}rem`,
      }
    },
  },
})
</script>
