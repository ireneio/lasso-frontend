<template>
  <v-app dark>
    Page Not Found
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/f2e">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'frontend',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  created() {
    this.$router.push('/f2e')
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
