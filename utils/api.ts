import { NuxtAxiosInstance } from '@nuxtjs/axios'
// import { NuxtCookies } from 'cookie-universal-nuxt'
import { AxiosInstance } from 'axios'

let $nuxtAxiosInstance: NuxtAxiosInstance
let $axios: AxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $nuxtAxiosInstance = axiosInstance
  $axios = $nuxtAxiosInstance.create({
    headers: {
      'Time-Zone': 8,
      'Accept-Language': 'zh-tw'
    },
    baseURL: process.env.API_URL,
    timeout: 20000
  })
}

// let $cookies: NuxtCookies

// export function initializeCookies(cookiesInstance: NuxtCookies) {
//   $cookies = cookiesInstance
// }

export { $axios }
