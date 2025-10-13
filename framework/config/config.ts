import dotenv from 'dotenv'
dotenv.config()

export default {
  api: {
    baseUrl: process.env.API_BASE_URL,
    timeout: Number(process.env.API_TIMEOUT) || 5000
  },
  default: {
    user: {
      login: process.env.USER_LOGIN || '',
      password: process.env.USER_PASSWORD || ''
    }
  }
}
