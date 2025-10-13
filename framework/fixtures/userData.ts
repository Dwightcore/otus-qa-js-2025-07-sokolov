import { faker } from '@faker-js/faker'
import config from '../config/config.js'

export function generateValidUserData() {
  return {
    login: faker.person.firstName(),
    password: config.default.user.password
  }
}

export function generateInvalidUserData(length = 12) {
  return {
    login: faker.internet.displayName(),
    password: faker.internet.password({
      length,
      memorable: false
    })
  }
}

export function getDefaultUser() {
  return {
    login: config.default.user.login,
    password: config.default.user.password
  }
}
