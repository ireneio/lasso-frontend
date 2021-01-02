<template>
  <div>
    <div class="wrapper" v-if="allowRender" v-show="!loading">
      <div class="logo"></div>
      <section class="section privacy">
        <div class="privacy__text" v-html="i18nTarget(0)" v-if="i18nTarget(0) !== ''"></div>
        <div class="privacy__text" v-else>
          填答時，請仔細閱讀每項敘述，然後判斷該敘述與您目前實際情況符合程度。並沒有標準答案，請您依照自身真實狀況進行填答。
          <br />
          <br />
          測評有特殊設計，會從各方面評估您測評結果的可參考度，請認真專注在每一題的作答即可。
          <br />
          <br />
          CAT職能認知測評結果報告會同時提供面談參考題目，讓企業可以進一步深入詢問並了解您的相關經驗與職能等級。
          <br />
          <br />
          如果您已經準備就緒，請點選確認按鈕開始作答。
        </div>
        <div class="privacy__checkbox">
          <label class="checkbox" for="privacy" :class="{ 'checkbox--checked': privacy }">
            <input type="checkbox" v-model="privacy" id="privacy">
          </label>
          <label class="privacy__checkboxText" for="privacy">{{ i18nTarget(1) || 'I agree to the' }} <span class="privacy__highlight">{{ i18nTarget(2) || 'privacy policy' }}</span> </label>
        </div>
      </section>
      <div class="line line3">
        <button @click="handleStart" class="button" :class="{ 'button--disabled': !privacy || clicked === 'invalid' }">START</button>
      </div>
    </div>
    <!-- <div class="loading" v-show="loading"></div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { $axios } from '~/utils/api'
import { I18nFactory } from '~/utils/i18n'

@Component({
  layout: 'landing'
})
export default class f2eLanding extends Vue {
  private loading: boolean = false

  private privacy: boolean = false

  private clicked: boolean | string = false

  private handleStart(): void {
    if (this.clicked === 'invalid') {
      return
    }
    if (this.privacy) {
      if (!this.clicked) {
        this.clicked = true
        // this.loading = true
        this.timer = null
        this.timer = setTimeout(() => {
        // this.loading = false
          try {
            const key : string = this.$route.query.InvitationKey.toString()
            if (key === 'undefined' || key === '') {
              throw new Error('Err')
            }
            this.$router.push({ name: 'f2e', params: { InvitationKey: key, i18nData: JSON.stringify([ ...I18nFactory.getI18nData ]) }, query: { type: 'enabled' } })
          } catch (e) {
            this.clicked = 'invalid'
            this.$router.push({ name: 'f2e-error', params: { statusCode: 'Required Key Missing' }, query: { type: 'success' } })
          }
        }, 800)
      } else {
        setTimeout(() => {
          this.clicked = false
        }, 1200)
      }
    }
  }

  private timer: any = null

  private i18nTarget(index: number): string {
    if(index >= I18nFactory.getI18nData.length) {
      return ''
    }
    return I18nFactory.i18nTarget(index)
  }

  private allowRender: boolean = false

  private async created() {
    if (!this.$route.query.InvitationKey || this.$route.query.InvitationKey === 'undefined') {
      this.$router.push({ name: 'f2e-error', params: { statusCode: 'Required Key Missing' }, query: { type: 'success' } })
    }
    await I18nFactory.init()
    this.allowRender = true
  }

  private mounted() {
    // this.loading = true
    // this.timer = setTimeout(() => {
    //   this.loading = false
    // }, 5000)
  }

  private beforeDestroy() {
    // this.timer = null
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables.scss';

.wrapper {
  min-height: 100vh;
  min-width: 100vw;
  // padding-top: 348px;
  padding-top: 121px;
  background-image: url(/bg@3xlanding.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.logo {
  width: 258px;
  height: 65px;
  background-image: url(/lasso_logo_white@3x.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: $primary;
}
.titleBox {
  margin-top: 37px;
  padding: 0 59px;
  &__name {
    color: $primary;
    font-size: 24px;
    margin-bottom: 9px;
  }
  &__desc {
    font-size: 21px;
    margin-bottom: 33px;
    color: $black;
  }
  &__footer {
    font-size: 15px;
    margin-bottom: 53px;
    color: $black;
  }
}
.line {
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.line1 {
  background-image: url(/line_a.svg);
  height: 84px;
}
.line2 {
  background-image: url(/line_b.svg);
  height: 38px;
}
.line3 {
  position: relative;
  z-index: 2;
  margin-top: 44px;
  margin-bottom: 69px;
  background-image: url(/line_c@3x.png);
  height: 39px;
  text-align: center;
}
.prologue {
  margin-top: 120px;
  margin-bottom: 107px;
  padding: 0 59px;
  color: $black;
}
.section {
  padding: 0 45px;
  &__box {
    margin-top: 120px;
  }
  &__box1 {
    margin-top: 95px;
  }
  &__icon {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 30px;
    color: $primary;
    width: 65px;
    height: 65px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__desc {
    text-align: center;
    color: $black;
    font-size: 15px;
  }
  &__icon1 {
    background-image: url(/clock.svg);
  }
  &__icon2 {
    background-image: url(/idea.svg);
  }
  &__icon3 {
    background-image: url(/cardiogram.svg);
  }
  &__icon4 {
    background-image: url(/book.svg);
  }
}
.loading {
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  background-image: url(/loading@3x.png);
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.privacy {
  margin-top: 40px;
  &__text {
    margin-bottom: 40px;
    font-size: 17px;
  }
  &__checkbox {
    display: flex;
    align-items: center;
    font-size: 15px;
  }
  &__checkboxText {
    margin-left: 5px;
  }
  &__highlight {
    color: #e2a638;
  }
}
.button {
  background-color: #e2a638;
  opacity: 1 !important;
  width: 150px;
  font-size: 21px;
  color: #fff;
  padding: 12px 43px;
  border-radius: 31px;
  letter-spacing: 0.42px;
  &--disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
}
.checkbox {
  cursor: pointer;
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #e2a638;
  > input {
    display: none;
  }
  &--checked {
    background-color: #e2a638;
    &:before {
      display: block;
      content: '';
      width: 2px;
      height: 6px;
      background-color: #fff;
      transform: rotate(-40deg) translateX(0px) translateY(6px);
    }
    &:after {
      display: block;
      content: '';
      width: 2px;
      height: 9px;
      background-color: #fff;
      transform: rotate(40deg) translateX(3px) translateY(-9px);
    }
  }
}

</style>
