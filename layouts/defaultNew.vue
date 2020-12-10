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
          <h1 class="title">招募測評管理</h1>
          <div class="status">
            <div class="status__dp"></div>
            <div class="status__email">Kinlau2000@gmail.com</div>
            <div class="status__cog"></div>
          </div>
        </header>
        <main class="body">
          <Nuxt />
        </main>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  private currentTab: string | null = '首頁概覽'

  private menuData: Array<any> = [
    { label: '首頁概覽', iconUrl: '/home@3x.png', url: '/sys/test', id: 1, subtabs: [] },
    { label: '招募測評管理', iconUrl: '/load@3x.png', url: '/sys/recruitment', id: 2, subtabs: [] },
    { label: '在職測評管理', iconUrl: '/business@3x.png', url: '/sys/employee', id: 3, subtabs: [ { label: '測評邀請作業', url: '/sys/employee/', id: 3 }, { label: 'MAYO測評比較分析', url: '/sys/employee/analysis', id: 3 } ] },
    { label: '測評管理設定', iconUrl: '/setting@3x.png', url: '/sys/survey', id: 4, subtabs: [ { label: 'AI測評設定', url: '/sys/survey/', id: 4 }, { label: '邀請郵件範本管理', url: '/sys/survey/invitation', id: 4 }, { label: 'SMS管理', url: '/sys/survey/sms', id: 4 } ] },
    { label: '企業帳號管理', iconUrl: '/business_setting@3x.png', url: '/sys/account', id: 5, subtabs: [ { label: '部門設定', url: '/sys/account/', id: 5 }, { label: '職缺設定', url: '/sys/account/opening', id: 5 }, { label: '角色設定', url: '/sys/account/character', id: 5 }, { label: '人員權限設定', url: '/sys/account/permission', id: 5 } ] }
  ]

  private handleUpdateTab(label: string, url: string, type: string, subtabs: Array<any>, id: Number) : void {
    console.log(url)
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

  private get username() {
    return 'User'
    // return authStore.user ? authStore.user.username : ''
  }

  private get companyName() {
    return 'MAYO'

    // return authStore.user
    //   ? authStore.user.groups.length
    //     ? authStore.user.groups[0].groupname
    //     : ''
    //   : ''
  }

  private get dP() {
    return ''
    // return authStore.user ? authStore.user.photopath : ''
  }

  private async handleLogout(): Promise<any> {
    // try {
    //   this.$nuxt.$loading.start()
    //   const result = await authStore.signOut({
    //     token: this.$cookies.get('accessToken')
    //   })
    //   this.$router.push('/account')
    // } catch (e) {
    //   this.errorDialog = true
    // } finally {
    //   this.$nuxt.$loading.finish()
    // }
  }

  private created() {
    const tab = localStorage.getItem('tab')
    if(tab !== undefined) {
      this.currentTab = tab
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: flex;
}
.aside {
  flex: 0 0 14%;
  background-color: #282828;
  min-height: 100vh;
}
.main {
  flex: 0 0 86%;
}
.header {
  display: flex;
  padding: 20px 22px;
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
.title {
  font-weight: bold;
  color: #282828;
  font-size: 22px;
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
  background-color: #959595;
  &__title {
    margin-left: 55px;
    padding: 18px 0;
    font-size: 14px;
  }
}
</style>
