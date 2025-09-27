import { accountService } from '../accountService.js'

export const accountController = {
  async createUser(userName: any, password: any) {
    const response = await accountService.createUser(userName, password)
    return {
      statusCode: response.statusCode,
      body: response.body,
      success: response.statusCode === 201
    }
  },

  async getUser(userId: any) {
    const response = await accountService.getUser(userId)
    return {
      statusCode: response.statusCode,
      body: response.body,
      success: response.statusCode === 200
    }
  },

  async deleteUser(userId: any) {
    const response = await accountService.deleteUser(userId)
    return {
      statusCode: response.statusCode,
      body: response.body,
      success: response.statusCode === 204
    }
  }
}
