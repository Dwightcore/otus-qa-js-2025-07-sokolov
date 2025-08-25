import got from 'got'
import config from '../config/config.js'

export const authService = {
  async authorisation(userName, password) {
    console.log('Auth request data:', { userName, password })
    const response = await got.post(`${config.api.baseUrl}/Account/v1/Authorized`, {
      json: {
        userName,
        password
      },
      responseType: 'json',
      throwHttpErrors: false
    })
    return { statusCode: response.statusCode, body: response.body }
  }
}
