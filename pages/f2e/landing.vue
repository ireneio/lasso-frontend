<template>
  <div>
    <div class="wrapper" v-show="!loading">
      <div class="logo"></div>
      <!-- <div class="titleBox">
        <div class="titleBox__name">Kin Lau,</div>
        <div class="titleBox__desc">
          you are invited to conduct a web survey.
        </div>
        <div class="titleBox__footer">by MAYO Human Capital Inc.</div>
      </div> -->
      <!-- <div class="line line1"></div> -->
      <!-- <div class="prologue">
        <div class="prologuePp">
          The company is conducting a research study on Career Appraisal
          Potential Personality (CAPP). Your input to this survey will help us
          better assist our research study.
          <br />
          <br />
          We sincerely value your participation. <br />
          Please keep in mind, an estimate of approximately
          <strong>20 to 25 minutes</strong> to this survey is designed.
        </div>
      </div> -->
      <!-- <div class="line line2"></div> -->
      <!-- <section class="section">
        <div class="section__box section__box1">
          <div class="section__icon section__icon1"></div>
          <div class="section__desc">
            This survey is set at maximum of 25 minutes. The session of survey
            will end after its maximum allotted time.
          </div>
        </div>
        <div class="section__box">
          <div class="section__icon section__icon2"></div>
          <div class="section__desc">
            Please answer each questionnaire based on the subject states your
            personal reaction to the actual situation.
          </div>
        </div>
        <div class="section__box">
          <div class="section__icon section__icon3"></div>
          <div class="section__desc">
            We are truly value your input and time. Please answer the
            questionnaires truthfully of which the survey results is based upon.
          </div>
        </div>
        <div class="section__box">
          <div class="section__icon section__icon4"></div>
          <div class="section__desc">
            The survey will be kept strictly confidential ( used only for the
            purposes of research for this project ).
          </div>
        </div>
      </section> -->
      <section class="section privacy">
        <div class="privacy__text">
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
          <input type="checkbox" v-model="privacy" id="privacy">
          <label class="privacy__checkboxText" for="privacy">I agree to the <span class="privacy__highlight">privacy policy</span> </label>
        </div>
      </section>
      <div class="line line3">
        <v-btn color="#E2A638" rounded x-large @click="handleStart" :disabled="!privacy">
          <span style="color:#fff;">START</span>
        </v-btn>
      </div>
    </div>
    <div class="loading" v-show="loading"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { $axios } from '~/utils/api'

@Component({
  layout: 'landing'
})
export default class f2eLanding extends Vue {
  private loading: boolean = false

  private privacy: boolean = false

  private handleStart(): void {
    if(this.privacy) {
      this.loading = true
      this.timer = null
      this.timer = setTimeout(() => {
        this.loading = false
        this.$router.push(
          '/f2e?type=enabled&InvitationKey=L1ZcMWBV81MpXjDSSKSySpqqGDKLoOz0EuUBp6aHVvO4bW6lntUw5ZlZPuHczjU0gP'
        )
      }, 800)
    }
    
  }

  private timer: any = null

  private created() {
    if (
      !this.$route.query.type ||
      this.$route.query.type.toString() !== 'enabled'
    ) {
      this.$router.push('/f2e/landing?type=enabled')
    }
  }

  private mounted() {
    this.loading = true
    this.timer = setTimeout(() => {
      this.loading = false
    }, 5000)
  }

  private beforeDestroy() {
    this.timer = null
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables.scss';

.wrapper {
  min-height: 100vh;
  min-width: 100vw;
  padding-top: 348px;
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
  margin-top: 44px;
  margin-bottom: 69px;
  background-image: url(/line_c.svg);
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
</style>
