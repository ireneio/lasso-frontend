<template>
  <v-app id="inspire">
    <div class="app">
      <main class="body">
        <Nuxt />
      </main>
      <footer class="footer">
        <div class="lang">
          <div class="lang__icon"></div>
          <div class="lang__text">繁體中文</div>
        </div>
        <div class="copyright">Copyright © 2019 MAYO Human Capital Inc. All rights reserved.</div>
        <div class="privacy">隱私權政策 / 關於我們</div>
      </footer>
    </div>
  </v-app>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 22px;
  color: #c7c7c7;
  font-size: 12px;
  font-weight: 100;
  background-color: #f4f8f9;
}
.lang {
  display: flex;
  align-items: center;
  cursor: pointer;
  &__icon {
    width: 18px;
    height: 18px;
    margin-right: 2px;
    background-image: url(/icon_earth@3x.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
}
.privacy{
  margin-right: 22px;
  cursor: pointer;
}
</style>