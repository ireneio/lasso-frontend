import { Context } from '@nuxt/types'
import { AxiosRequestConfig } from 'axios'
import { $authVerify } from '~/utils/api'
import Token from '~/utils/token'

async function init(): Promise<boolean | string> {
  const token: string | boolean = Token.getToken()
  if(token) {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: token
      }
    }
    try {
      const result = await $authVerify.post('/RefreshToken', {}, config)
      if(result && result.data && result.data.access_token) {
        return result.data.access_token
      }
      return false
    } catch(e) {
      console.log('Error: ' + e.message)
      return false
    }
  } else {
    return false
  }
}

export default async function ({ redirect }: Context) {
  return new Promise(async (resolve: Function, reject: Function): Promise<void> => {
    const token = await init()
    if(token && typeof token === 'string') {
      Token.setToken(token)
      resolve(true)
    } else {
      reject(redirect('/sys/login'))
    }
  })
}