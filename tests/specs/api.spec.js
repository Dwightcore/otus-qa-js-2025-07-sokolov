import got from 'got'
import { faker } from '@faker-js/faker'

const baseUrl = 'https://bookstore.demoqa.com'
const password = 'jSvG8JMDY1uVQj9!'
const wrongPassword = faker.internet.password({ length: 2 })
const userName = faker.internet.username(faker.person.firstName())

describe('API Tests', () => {
  describe('POST /Account/v1/User', () => {
    test('Create new user', async () => {
      const user = {
        userName,
        password
      }
      const response = await got.post(`${baseUrl}/Account/v1/User`, {
        json: user,
        responseType: 'json'
      })
      expect(response.statusCode).toBe(201)
      expect(response.body).toHaveProperty('userID')
    })

    test('Creating new user with an existing userName', async () => {
      const user = {
        userName,
        password
      }
      const response = await got.post(`${baseUrl}/Account/v1/User`, {
        json: user,
        responseType: 'json',
        throwHttpErrors: false
      })
      expect(response.statusCode).toBe(406)
      expect(response.body.code).toBe('1204')
      expect(response.body.message).toBe('User exists!')
    })

    test('Create new user with wrong password', async () => {
      const user = {
        userName,
        password: wrongPassword
      }
      const response = await got.post(`${baseUrl}/Account/v1/User`, {
        json: user,
        responseType: 'json',
        throwHttpErrors: false
      })
      expect(response.statusCode).toBe(400)
      expect(response.body.code).toBe('1300')
    })
  })

  describe('POST /Account/v1/GenerateToken', () => {
    test('Generate token for existing user', async () => {
      const user = {
        userName,
        password
      }
      const response = await got.post(`${baseUrl}/Account/v1/GenerateToken`, {
        json: user,
        responseType: 'json'
      })
      expect(response.statusCode).toBe(200)
      expect(response.body).toHaveProperty('token')
    })

    test('Generate token with wrong password', async () => {
      const user = {
        userName,
        password: wrongPassword
      }
      const response = await got.post(`${baseUrl}/Account/v1/GenerateToken`, {
        json: user,
        responseType: 'json',
        throwHttpErrors: false
      })
      expect(response.statusCode).toBe(200)
      expect(response.body.status).toBe('Failed')
    })
  })
})
