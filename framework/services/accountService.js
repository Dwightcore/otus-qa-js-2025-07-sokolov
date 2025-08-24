import got from 'got'
import config from '../config/config.js'

export const accountService = {
  async deleteUser(userId) {
    const response = await got.delete(`${config.api.baseUrl}/Account/v1/User/${userId}`, {
      responseType: 'json',
      throwHttpErrors: false
    })
    return { statusCode: response.statusCode, body: response.body }
  },
  async getUser(userId) {
    const response = await got(`${config.api.baseUrl}/Account/v1/User/${userId}`, {
      responseType: 'json',
      throwHttpErrors: false
    })
    return { statusCode: response.statusCode, body: response.body }
  },
  async createUser(userName, password) {
    const response = await got.post(`${config.api.baseUrl}/Account/v1/User`, {
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
