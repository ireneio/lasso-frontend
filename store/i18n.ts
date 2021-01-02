import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

interface i18nData {
  Key: string,
  Value: string
}

@Module({
  name: 'modules/i18n',
  // namespaced: true,
  stateFactory: true
})
export default class i18n extends VuexModule {
  public i18nData: Array<i18nData> | null = []

  @Mutation
  private setI18nData(payload: any): void {
    const { Results }: Array<i18nData> | any = payload
    this.i18nData = [ ...Results ]
  }

  @Action({ commit: 'setI18nData'})
  public async sendGetI18nRequest(context?: any): Promise<any> {
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
      return result
      // this.setI18nData(result)
    } catch(e) {
      console.log('Error: ' + e.message)
    }
  }
}