<template>
  <div class="wrapper">
    <div class="dialog" v-if="currentQuestion < questions.length - 1">
      <div class="dialog__triangle dialog__triangleL"></div>
      <div class="dialog__pfp"></div>
      <div class="dialog__dialogBox">
        {{ questions.length ? questions[currentQuestion].title : '' }}
      </div>
    </div>
    <div class="dialog" v-show="currentAnswer !== null">
      <div class="dialog__triangle dialog__triangleR"></div>
      <div class="dialog__dialogBox response">{{ currentAnswer }}</div>
    </div>
    <div class="uxWrapper">
      <div class="options__wrapper topWrapper">
        <div class="options__title">Select the appropriate option below :</div>
        <div class="options__box">
          <div class="options">
            <div
              class="options__ring"
              :class="{ 'options__ring--selected': currentAnswer === 1 }"
              @click="handleSelectOption(1)"
            >
              <div class="options__number">1</div>
            </div>
            <div class="options__caption">{{ browserLanguage === 'zh-TW' ? '從未如此': 'never' }}</div>
          </div>
          <div class="options">
            <div
              class="options__ring"
              :class="{ 'options__ring--selected': currentAnswer === 2 }"
              @click="handleSelectOption(2)"
            >
              <div class="options__number">2</div>
            </div>
            <div class="options__caption">{{ browserLanguage === 'zh-TW' ? '偶爾如此': 'rarely' }}</div>
          </div>
          <div class="options">
            <div
              class="options__ring"
              :class="{ 'options__ring--selected': currentAnswer === 3 }"
              @click="handleSelectOption(3)"
            >
              <div class="options__number">3</div>
            </div>
            <div class="options__caption">{{ browserLanguage === 'zh-TW' ? '較少如此': 'seldom' }}</div>
          </div>
          <div class="options">
            <div
              class="options__ring"
              :class="{ 'options__ring--selected': currentAnswer === 4 }"
              @click="handleSelectOption(4)"
            >
              <div class="options__number">4</div>
            </div>
            <div class="options__caption">{{ browserLanguage === 'zh-TW' ? '有時如此': 'sometimes' }}</div>
          </div>
          <div class="options">
            <div
              class="options__ring"
              :class="{ 'options__ring--selected': currentAnswer === 5 }"
              @click="handleSelectOption(5)"
            >
              <div class="options__number">5</div>
            </div>
            <div class="options__caption">{{ browserLanguage === 'zh-TW' ? '經常如此': 'often' }}</div>
          </div>
          <div class="options">
            <div
              class="options__ring"
              :class="{ 'options__ring--selected': currentAnswer === 6 }"
              @click="handleSelectOption(6)"
            >
              <div class="options__number">6</div>
            </div>
            <div class="options__caption">{{ browserLanguage === 'zh-TW' ? '總是如此': 'always' }}</div>
          </div>
        </div>
      </div>
      <div class="options__wrapper bottomWrapper">
        <div class="progBar">
          <div class="progBar__bar">
            <v-progress-linear
              color="#e2a638"
              height="13"
              :value="progress"
              striped
              rounded
            >
            </v-progress-linear>
          </div>
          <span class="progBar__number">{{ isNaN(parseInt(progress)) ? 0 : parseInt(progress) }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { $axios } from '~/utils/api'

interface Answer {
  id: string
  scale: number | null
}

interface Questionnaire {
  id: string
  title: string
}

@Component({
  layout: 'frontend'
})
export default class f2eIndex extends Vue {
  private get browserLanguage(): string {
    return navigator.language
  }

  private get progress(): number {
    return ((this.currentQuestion + 1) / this.questions.length) * 100
  }

  private expiration: Date | null = null

  private questions: Array<Questionnaire> = []

  private answers: Array<Answer> = []

  private currentQuestion: number = 0

  private currentAnswer: number | null = null

  private timer: null | number = 0

  private get getInvitationKey(): any {
    return this.$route.query.InvitationKey
  }

  private get displayTime(): string {
    return ''
  }

  private startTime: Date = new Date()

  private async selectOptionHelper(option: number): Promise<any> {
    this.currentAnswer = option
    this.answers[this.currentQuestion].scale = option
    if (this.questions.length - 1 === this.currentQuestion) {
      // done with the survey, initiate submission
      try {
        const result = await this.sendSubmitAssessmentRequest()
        switch (result.status) {
          case 200:
            // submission success, go to next page
            // this.$router.push('/f2e/success')
            break
          default:
            throw new Error(result.status.toString())
        }
      } catch (e) {
        // error dialog
        console.log(e)
      } finally {
        setTimeout(() => {
          this.$router.push('/f2e/success?type=success')
        }, 800)
      }
    } else {
      setTimeout(() => {
        this.currentQuestion += 1
        this.currentAnswer = null
      }, 800)
    }
  }

  private throttleTimer: number | null = null

  private throttleHelper(func: Function, funcArgs: Array<any>, throttleValue: number): void {
    if (this.throttleTimer === null) {
      this.throttleTimer = Number(Date.now())
      func.apply(null, funcArgs)
    } else {
      const lastClicked = Number(new Date(this.throttleTimer))
      const currentClick = Number(Date.now())
      if (currentClick - lastClicked > throttleValue) {
        func.apply(null, funcArgs)
        this.throttleTimer = currentClick
      }
    }
  }

  private async handleSelectOption(option: number): Promise<any> {
    if (this.answers[this.answers.length - 1].scale !== null) {
      return setTimeout(() => {})
    } else {
      await this.throttleHelper(this.selectOptionHelper, [option], 1200)
    }
  }

  private dateFormatHelper(
    date: number | Date,
    dateSymbol = '/',
    withTime = true,
    timeSymbol = ':'
  ): string {
    const toDate = new Date(date)
    const year = toDate.getFullYear().toString()
    const month = (toDate.getMonth() + 1).toString().length < 2 ? '0' + (toDate.getMonth() + 1).toString() : (toDate.getMonth() + 1).toString()
    const day = toDate.getDate().toString().length < 2 ? '0' + toDate.getDate().toString() : toDate.getDate().toString()

    const hour = toDate.getHours().toString().length < 2 ? '0' + toDate.getHours().toString() : toDate.getHours().toString()
    const minutes = toDate.getMinutes().toString().length < 2 ? '0' + toDate.getMinutes().toString() : toDate.getMinutes().toString()
    const seconds = toDate.getSeconds().toString().length < 2 ? '0' + toDate.getSeconds().toString() : toDate.getSeconds().toString()

    const dateStr = `${year}${dateSymbol}${month}${dateSymbol}${day}`
    const timeStr = `${hour}${timeSymbol}${minutes}${timeSymbol}${seconds}`
    if (!withTime) {
      return dateStr
    }
    return dateStr + ' ' + timeStr
  }

  private async sendGetAssessmentRequest(): Promise<any> {
    const requestBody = {
      Conditions: [
        {
          InvitationKey: this.getInvitationKey
        }
      ]
    }
    const result = await $axios.post('/Client/GetAssessment', requestBody)
    if (result) {
      switch (result.data.StatusCode) {
        case 0:
          this.expiration = new Date(result.data.Results[0].ExpirationTime)
          return result.data.Results[0].Items
        case 99203:
        case 99003:
          this.$router.push('/f2e/landing')
          return
        default:
          throw new Error(result.status.toString())
      }
    }
  }

  private async sendSubmitAssessmentRequest(): Promise<any> {
    const requestBody = {
      Contents: [
        {
          InvitationKey: this.getInvitationKey,
          AnswerStartTime: this.dateFormatHelper(this.startTime),
          AnswerEndTime: this.dateFormatHelper(new Date()),
          Items: this.answers.map((item: Answer) => ({
            ItemId: item.id,
            Scale: item.scale
          }))
        }
      ]
    }

    console.log(JSON.stringify(requestBody))

    const result = await $axios.post(
      '/Client/UpdateAssessmentScales',
      requestBody
    )
    if (result) {
      switch (result.data.StatusCode) {
        case 200:
          return result.data
        case 99003:
          throw new Error('資料格式錯誤')
        default:
          throw new Error('Error')
      }
    }
  }

  private async created() {
    if (!this.$route.query.type || this.$route.query.type.toString() !== 'enabled') {
      this.$router.push('/f2e/landing?type=enabled')
    }
    try {
      const result = await this.sendGetAssessmentRequest()
      // console.log(result)

      this.startTime = new Date()

      setInterval(() => {
        this.timer === null ? (this.timer = 1000) : (this.timer += 1000)
      }, 1000)

      this.questions = result.map((item: any) => ({
        id: item.ItemId,
        title: item.Item
      }))
      this.answers = result.map((item: any) => ({
        id: item.ItemId,
        scale: null
      }))
    } catch (e) {
      // error
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables.scss';
.wrapper {
  min-height: 100vh;
  min-width: 100vw;
  padding: 16px;
  background-image: url('/bg@3x.png');
  // background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.options {
  flex: 0 0 calc(33% - 16px);
  margin: 0 8px 8px 8px;
  text-align: center;
  color: $black;
  &__ring {
    cursor: pointer;
    background-color: $white;
    border-radius: 5px;
    text-align: center;
    padding: 10px 0px;
    &--selected {
      background-color: $primary;
      color: $white;
    }
  }
  &__wrapper {
    border-radius: 10px;
    background-color: $white;
    // background-attachment: fixed;
    // background-size: cover;
    // -o-background-size: cover;
    // -moz-background-size: cover;
    // -webkit-background-size: cover;
    padding: 18px 16px;
  }
  &__title {
    font-size: 17px;
    margin-bottom: 14px;
    font-weight: 500;
  }
  &__box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -8px -8px -8px;
  }
  &__caption {
    font-size: 14px;
  }
}
.uxWrapper {
  position: absolute;
  bottom: 26px;
  left: 16px;
  right: 16px;
}
.topWrapper {
  margin-top: 26px;
}
.bottomWrapper {
  margin-top: 10px;
  padding: 0;
  background-color: transparent;
}
.dialog {
  position: relative;
  display: flex;
  margin-bottom: 30px;
  &__triangle {
    position: absolute;
    width: 16px;
    height: 17px;
    top: 15px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__triangleL {
    left: 58px;
    background-image: url(/talkbox_corner_l.svg);
  }
  &__triangleR {
    right: 0px;
    background-image: url(/talkbox_corner_r.svg);
  }
  &__pfp {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-right: 20px;
    background-color: $white;
    background-image: url(/people_b.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  &__dialogBox {
    flex: 0 0 calc(100% - 15% - 20px - 15%);
    border-radius: 10px;
    background-color: $white;
    padding: 14px 16px;
    font-size: 17px;
    color: $black;
  }
}
.response {
  flex: 0 0 20%;
  margin-left: auto;
  margin-right: 13px;
  text-align: center;
  color: $primary;
  font-size: 17px;
}
.progBar {
  display: flex;
  align-items: center;
  &__number {
    flex: 0 0 15%;
    position: absolute;
    right: 0;
    color: $primary;
  }
  &__bar {
    flex: 0 0 80%;
  }
}
</style>
