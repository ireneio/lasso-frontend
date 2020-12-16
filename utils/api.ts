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
      'Accept-Language': navigator.language,
      'Authorization': 'TQclxH7azjdogH/C+rYVWfnlK9Mfd/jEsQHNIbSnPW7pFvg0vqP9on6GFo/geo8Rfl7GFCnzmL98ERtILFZYL+3hWajBClahK394DyhwdJBLuzU8p3dEZK1FHNhM4vxFJXGw8IoihE+ncXeaHoKKme2adOM/MtpF0JZkTrMDFQXEXakJ8aTJ9m/i6P6sOHaoIaqaYj16HJ6vJR66+be657C4zuqcQbGUC3fYKHtOQsfuf1PVkaUfJyT7QxIA+a8LkHZn0Htfi5avoZrXuiCjPOwqF1TKdA+t+Jqkct4TXIBbap1tVHfOs5gJ2Oo0A+ikf8V8fw7IcOlclg+rrMgy8sciGLilm18xWAP3fiUEfSAxPE7eHaUkgCF9ltNXAmW2XQhNF+RixKu0bJxHHdfXARLnY6RIc2oPjztoLqlbEA0/CC/BmHjqqt3IjlOSLA9BkxbnH/jarLO3ZByW/Y0/VYDNBazzUsuRBwOYERyTowCPvYPjw9ysWJW2t7TAHDCB+0lRV73EUhk2Xgg4DO7SIThjRcU8zUOIAiEJ96FIfGhnzKcwaazrsBZ6SC0Nq19VIQz8zfpiEgqVA13tZSAUQvgQh24HtInXutNbVLIXuAgihYB9G8spwAOwqnXHZ7E3NDa1B6aznMRCxH4ut0y1x4u1yloTa9OGI1uFZ7F6QRfPWPxuxvhNy0pOQNegFheRrWUYlvMTwlLC6Ajiqe3sePx47sdawDaGsHfYpDFI+3I='
    },
    baseURL: process.env.API_URL,
    timeout: Number(process.env.TIMEOUT_LIMIT) || 20000
  })
}

// let $cookies: NuxtCookies

// export function initializeCookies(cookiesInstance: NuxtCookies) {
//   $cookies = cookiesInstance
// }

export { $axios }
