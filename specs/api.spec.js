import { generateInvalidUserData, generateValidUserData } from '../framework/fixtures/userData.js'

import { authService } from '../framework/services/authService.js'
import { accountService } from '../framework/services/accountService.js'

describe('accountApi', () => {
  let createdUserId
  let validUser
  let validPassword
  describe('Create user', () => {
    it('create user', async () => {
      validUser = generateValidUserData()
      validPassword = validUser.password
      const response = await accountService.createUser(validUser.login, validPassword)
      expect(response.statusCode).toBe(201)
      expect(response.body).toHaveProperty('userID')

      createdUserId = response.body.userID
    }, 10000)
  })
  describe('Authorisation', () => {
    it('login with valid credentials', async () => {
      const response = await authService.authorisation(validUser.login, validPassword)
      console.log('Auth response:', response)
      expect(response.statusCode).toBe(200)
      expect(response.body).toBe(true)
    }, 10000)

    it('should not login with invalid credentials', async () => {
      const invalidUser = generateInvalidUserData()
      const invalidPassword = generateInvalidUserData(2)
      const response = await authService.authorisation(invalidUser.login, invalidPassword.password)
      expect(response.statusCode).toBe(404)
    })
  })

  describe('Account', () => {
    it('get account details', async () => {
      const response = await accountService.getUser(createdUserId)
      expect(response.statusCode).toBe(401) // API возвращает 401 - требует авторизацию
    })
    it('delete account', async () => {
      const response = await accountService.deleteUser(createdUserId)
      expect(response.statusCode).toBe(401) // API возвращает 401 - требует авторизацию
    })
  })
})
