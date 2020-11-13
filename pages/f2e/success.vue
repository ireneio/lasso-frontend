<<<<<<< HEAD
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
      this.$router.push('/f2e')
    } else {
      this.timer = setTimeout(() => {
        // this.$router.push('/f2e')
      }, 5000)
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
  // overflow: hidden;
  &__warpUp {
    // position: relative;
    // top: 0;
    // left: 0;
    background-image: url(/line_d.svg);
    width: 100vw;
    height: 20vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__warpDown {
    // position: absolute;
    // bottom: 0;
    // left: 0;
    background-image: url(/line_e.svg);
    width: 100vw;
    height: 20vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__center {
    // position: relative;
    // top: 72px;
    background-image: url(/people.svg);
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
=======
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
      this.$router.push('/f2e')
    } else {
      this.timer = setTimeout(() => {
        // this.$router.push('/f2e')
      }, 5000)
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
  // overflow: hidden;
  &__warpUp {
    // position: relative;
    // top: 0;
    // left: 0;
    background-image: url(/line_d.svg);
    width: 100vw;
    height: 20vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__warpDown {
    // position: absolute;
    // bottom: 0;
    // left: 0;
    background-image: url(/line_e.svg);
    width: 100vw;
    height: 20vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__center {
    // position: relative;
    // top: 72px;
    background-image: url(/people.svg);
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
>>>>>>> ca37f10f0fb7c92426aac75c23d193a792ef8a11
