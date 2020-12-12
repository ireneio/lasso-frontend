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
      'Authorization': 'kbmJlOPBjQem/n/5KDhdofR3J0Dz1Txc3ay9uVJfWkHG9vnz7wn4rVLazQsrNqkgbBmPGTgDQ1KlPjs17CWO+3Lwa4YIDaliLU9L7lYGQ9rgE8muMswgPA20KfFij1UNPwYPzRT5UBl3b+7+9yBaMD6ZMilvHTp3KLxD10999FzbBMR9Pr2bpOF71DSZpZmByPHdLkCoehAXpJ1DcOVszFYmev31QlDv+Oidxxw/GqRvfUUuWbuvKP+NmvFQ91MDZbnJxu7CuHnqyYiYfi1XCG+gEzLTqX5fnkbUq4T7ciW92e61NtkSpwcNb7vru4O2oleFVDdHv0cSoxqyexZ6kIdqPSvioc+UImkLkBcI1XEfAvvOe2QB0N2/fbd9hsQvXvdchhoK2julyx2Y9F6xP39Q0I7wiW+PgHGiutbvrSnOfLY8HYC9ofWziOotNmXH'
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
