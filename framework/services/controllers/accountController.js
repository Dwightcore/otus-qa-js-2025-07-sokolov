import { accountService } from '../accountService.js'

export const accountController = {
  async createUser(userName, password) {
    const response = await accountService.createUser(userName, password)
    if (response.statusCode !== 201) {
      throw new Error(`Create user failed: ${response.statusCode}`)
    }
    return response.body
  },

  async getUser(userId) {
    const response = await accountService.getUser(userId)
    if (response.statusCode !== 200) {
      throw new Error(`Get user failed: ${response.statusCode}`)
    }
    return response.body
  },

  async deleteUser(userId) {
    const response = await accountService.deleteUser(userId)
    if (response.statusCode !== 204) {
      throw new Error(`Delete user failed: ${response.statusCode}`)
    }
    return true
  }
}
