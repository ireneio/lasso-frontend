import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import I18n from '~/store/i18n'

let i18nStore: I18n

function initialiseStores(store: Store<any>): void {
  i18nStore = getModule(I18n, store)
}

export { initialiseStores, i18nStore }