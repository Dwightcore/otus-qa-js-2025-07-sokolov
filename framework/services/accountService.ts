import got from 'got';
import config from '../config/config.js'

export const accountService = {
  async deleteUser(userId: any) {
    const response = await got.delete(`${config.api.baseUrl}/Account/v1/User/${userId}`, {
      responseType: 'json',
      throwHttpErrors: false
    })
    return { statusCode: response.statusCode, body: response.body }
  },
  async getUser(userId: any) {
    const response = await got(`${config.api.baseUrl}/Account/v1/User/${userId}`, {
      responseType: 'json',
      throwHttpErrors: false
    })
    return { statusCode: response.statusCode, body: response.body }
  },
  async createUser(userName: any, password: any) {
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
