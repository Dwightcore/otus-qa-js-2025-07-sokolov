import { authService } from '../authService.js'

export const authController = {
  async authoriseUser(userName: any, password: any) {
    const response = await authService.authorisation(userName, password)
    return {
      statusCode: response.statusCode,
      body: response.body,
      success: response.statusCode === 200 && response.body === true
    }
  }
}
