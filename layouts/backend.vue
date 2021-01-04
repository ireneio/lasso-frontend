<template>
  <v-app id="inspire">
    <div class="app">
      <aside class="aside">
        <div class="logo"></div>
        <div class="tabs">
          <div class="tab" v-for="item in menuData" :key="item.label" :class="{ 'tab--current': Number(currentTab) === item.id }" @click="handleUpdateTab(item.label, item.url, 'primary', item.subtabs, item.id)">
            <div class="tab__title">
               <div class="tab__titleIcon" :style="`background-image:url(${item.iconUrl})`"></div>
               <div class="tab__titleText">{{ item.label }}</div>
            </div>
            <div class="subtabs" v-if="item.subtabs.length > 0" v-show="Number(currentTab) === item.id">
              <div class="subtab" v-for="subtabItem in item.subtabs" :key="subtabItem.label" @click.stop="handleUpdateTab(item.label, subtabItem.url, 'sub')">
                <div class="subtab__title">{{ subtabItem.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div class="main">
        <header class="header">
          <h1 class="header__title">{{ currentTabLabel }}</h1>
          <div class="status">
            <div class="status__dp"></div>
            <div class="status__email">Kinlau2000@gmail.com</div>
            <div class="status__cog"></div>
          </div>
        </header>
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
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  private currentTab: string | null = '1'

  private menuData: Array<any> = [
    { label: '首頁概覽', iconUrl: '/home@3x.png', url: '/sys/', id: 1, subtabs: [] },
    { label: '招募測評管理', iconUrl: '/load@3x.png', url: '/sys/recruitment', id: 2, subtabs: [] },
    { label: '在職測評管理', iconUrl: '/business@3x.png', url: '/sys/employee', id: 3, subtabs: [ { label: '測評邀請作業', url: '/sys/employee/', id: 3 }, { label: 'MAYO測評比較分析', url: '/sys/employee/analysis', id: 3 } ] },
    { label: '測評管理設定', iconUrl: '/setting@3x.png', url: '/sys/survey', id: 4, subtabs: [ { label: 'AI測評設定', url: '/sys/survey/', id: 4 }, { label: '邀請郵件範本管理', url: '/sys/survey/invitation', id: 4 }, { label: 'SMS管理', url: '/sys/survey/sms', id: 4 } ] },
    { label: '企業帳號管理', iconUrl: '/business_setting@3x.png', url: '/sys/account', id: 5, subtabs: [ { label: '部門設定', url: '/sys/account/', id: 5 }, { label: '職缺設定', url: '/sys/account/opening', id: 5 }, { label: '角色設定', url: '/sys/account/character', id: 5 }, { label: '人員權限設定', url: '/sys/account/permission', id: 5 } ] }
  ]

  private handleUpdateTab(label: string, url: string, type: string, subtabs: Array<any>, id: Number) : void {
    if(type === 'primary') {
      this.currentTab = id.toString()
      localStorage.setItem('tab', id.toString())
      if(url !== '') {
        this.$router.push(url)
      }
    } else if (type === 'sub') {
      if(url !== '') {
        this.$router.push(url)
      }
    }
  }

  private get currentTabLabel() : string {
    const item = this.menuData.find(item => item.id === Number(this.currentTab))
    if(item) {
      return item.label
    } else {
      return ''
    }
  }

  private get username() {
    return 'User'
  }

  private get companyName() {
    return 'MAYO'
  }

  private get dP() {
    return ''
  }

  private async handleLogout(): Promise<any> {}

  private created() {
    const tab = localStorage.getItem('tab')
    if(tab) {
      this.currentTab = tab
    } else {
      this.currentTab = '1'
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
}
.aside {
  min-width: 250px;
  background-color: #282828;
  min-height: 100vh;
}
.main {
  flex: 0 0 86%;
}
.header {
  display: flex;
  padding: 20px 22px;
  &__title {
    font-size: 22px;
  }
}
.body {
  background-color: #f4f8f9;
  min-height: calc(100vh - 83px);
  padding: 33px 22px;
}
.logo {
  width: 160PX;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 18px;
  background-image: url(/logo_word.svg);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.status {
  display: flex;
  align-items: center;
  margin-left: auto;
  &__dp {
    width: 43px;
    height: 43px;
    background-color:#e5e5e5;
    border-radius: 50%;
  }
  &__email {
    margin-left: 12px;
  }
  &__cog {
    width: 30px;
    height: 30px;
    margin-left: 16px;
    background-image: url(/setting@3x.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
}
.tabs {
  padding-top: 4px;
}
.tab {
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  &__title {
    display: flex;
    align-items: center;
    margin-left: 21px;
    padding: 18px 0;
    
  }
  &__titleIcon {
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background-image: url(/home@3x.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
  &--current {
    background-color: #e1a236;
  }
}
.subtab {
  color: #fff;
  background-color: #555555;
  &__title {
    margin-left: 55px;
    padding: 18px 0;
    font-size: 14px;
  }
}
.footer {
  position: absolute;
  bottom: 0;
  width: calc(100vw - 250px);
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
