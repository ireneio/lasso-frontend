import { i18nData } from '~/types/index'
import { $axios } from '~/utils/api'

class I18n {
  private i18nData: Array<i18nData> = []

  public i18nTarget(index: number): string {
    if(index >= this.i18nData.length) {
      return ''
    }
    return this.i18nData[index].Value
  }

  public get getI18nData(): Array<i18nData> {
    return this.i18nData
  }

  private setI18nData(payload: Array<i18nData> | any): void {
    const { Results }: Array<i18nData> | any = payload.data
    this.i18nData = [ ...Results ]
  }

  private async sendGetI18nRequest(): Promise<any> {
    const requestBody = {
      Conditions: [
        {
            ParameterType: 'Platform',
            TypeCode: 'I18N'
        }
      ]
    }
    try {
      const result = await $axios.post('/Utility/QueryParameters', requestBody)
      this.setI18nData(result)
    } catch(e) {
      console.log('Error: ' + e.message)
    }
  }

  public async init() {
    await this.sendGetI18nRequest()
  }
}

export const I18nFactory = new I18n()

