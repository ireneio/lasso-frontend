import { $axios } from '~/utils/api'

async function init() {
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
    return result.Results
  } catch(e) {
    console.log('Error: ' + e.message)
  }
}

export default async function ({ params }) {
  return new Promise(async (resolve) => {
    const result = await init()
    params.i18n = result
    resolve(result)
  })
}