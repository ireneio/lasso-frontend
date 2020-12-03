<template>
  <v-app id="inspire" v-show="$route.query.type === 'enabled'">
    <header class="header">
      <div class="header__logo"></div>
      <div class="header__timer">
        Time<span class="header__time">{{ displayTime }}</span>
      </div>
    </header>
    <main class="main">
      <nuxt />
    </main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
// import { authStore } from '~/store'

@Component
export default class FrontendLayout extends Vue {
  private timer: number | null = null

  private get displayTime(): string {
    return this.msToTime(this.timer !== null ? this.timer : 0)
  }

  private msToTime(duration: number) {
    const milliseconds: number | string = parseInt(
        ((duration % 1000) / 100).toString()
      )
    let seconds: number | string = Math.floor((duration / 1000) % 60)
    let minutes: number | string = Math.floor((duration / (1000 * 60)) % 60)
    let hours: number | string = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    return minutes + ':' + seconds
  }

  private mounted() {
    setInterval(() => {
      this.timer === null ? (this.timer = 1000) : (this.timer += 1000)
    }, 1000)
  }

  private beforeDestroy() {
    this.timer = null
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/utils/_variables.scss';

.header {
  display: flex;
  height: 55px;
  width: 100%;
  background-color: #fff;
  padding: 18px 16px;
  &__timer {
    margin-left: auto;
    color: $gray;
  }
  &__time {
    color: $primary;
    margin-left: 10px;
  }
  &__logo {
    width: 82px;
    height: 20px;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(/logo_lasso_word@3x.png);
  }
}
.main {
  min-height: calc(100vh - 55px);
  max-height: calc(100vh - 55px);
}
</style>
