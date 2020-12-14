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
      'Authorization': '2+EsjWKj5SD5gtRJjuAOBY3g+TKGnsBGjg347gBV7E65C68jzJ4IqruodBWiQ68S7NAMMRTS0eiq1dpczAmK87M10Jv4uftjFZYi7MOh2i2/MP21C1xksnSAyi5UAQU36r1G77uoAB0jhpWuOL0GcfwLO/Wlwz6SVyW/fZVM7DxBrGH6YEj1lVwFzwcLYSxg36KC1Wz/xkQHepgdYIWKvSSd5pMwXN6i/wcWMMRIT4o/buNHBikuQimvn6WfYQQf/waxm0qJN1AbN6lmwKVgjEMUgLPs+BgXycgbmUEyOlVwB5ajh5UWqI09uA9dqwIzXCDmYLtY+EsgObx43ySEwe9spTzYnoPumIFTOcJ5iNUWQrWqkuceuej+98qvn4PN80bbA3GwyFdfPdXUOORovSu3HUeUMyETlFbPdLaI2P2JxrWvkYwoI73R06W9GWNMAw994nmwUI1B1cz4Ej8vwvQlaw+RerrPIof7w2LwdAKvY87E/hBR9NI/bsG9hp+f5b1cwyihex0xfzk7uhwollcc34lbH89+WlRrPSY2ZcHRACMjBfAsCYxJZjoIoJSvHEqO99sPdIg+B77ChgVXIyHFB/xr5qWyNfOjDHg6b+Z8yLrhUmCAaOVjDsfpuXsNqYoYnz6RX5/yKluMozslEgc6NqJ8CNW9XTddTl5bZWtteKT14NihIVbaool2R8loq8Veaddb0yfjKIZda87J8YdWtZtspqmrNEvuFeWqy5Y='
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
