import { authService } from '../authService'

export const AuthController = {
  async authoriseUser(userName, password) {
    const authorisation = await authService.authorisation(userName, password)
    if (authorisation.statusCode !== 200) {
      throw new Error(`Authorisation failed: ${authorisation.statusCode}`)
    }
    return authorisation.body
  }
}
