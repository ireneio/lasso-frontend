<<<<<<< HEAD
<template>
  <v-app id="inspire" v-show="$route.query.type === 'enabled'">
    <main>
      <nuxt />
    </main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
// import { authStore } from '~/store'

@Component
export default class LandingLayout extends Vue {
}
</script>
=======
<template>
  <v-app id="inspire" v-show="$route.query.type === 'enabled'">
    <main>
      <nuxt />
    </main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
// import { authStore } from '~/store'

@Component
export default class LandingLayout extends Vue {
}
</script>
>>>>>>> ca37f10f0fb7c92426aac75c23d193a792ef8a11
