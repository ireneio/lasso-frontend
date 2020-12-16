<template>
  <div class="loading">
    <div class="loading__warpUp"></div>
    <div class="loading__center"></div>
    <div class="loading__warpDown"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component({
  layout: 'landing'
})
export default class f2eSuccess extends Vue {
  private timer: any = null

  private created() {
    if (!this.$route.query.type || this.$route.query.type.toString() !== 'success') {
      this.$router.push('/f2e?type=enabled')
    }
  }

  private beforeDestroy() {
    this.timer = null
  }
}
</script>

<style lang="scss" scoped>
.loading {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  &__warpUp {
    // background-color: #000;
    background-image: url(/line_d@3x.png);
    width: 100vw;
    height: 20vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__warpDown {
    background-image: url(/line_e@3x.png);
    width: 100vw;
    height: 20vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__center {
    background-image: url(/people@3x.png);
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
    height: 60vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
