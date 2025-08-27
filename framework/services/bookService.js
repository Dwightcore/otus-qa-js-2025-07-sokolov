import got from 'got'
import config from '../config/config.js'

export const bookService = {
  async getBooks() {
    const response = await got(`${config.api.baseUrl}/BookStore/v1/Books`, {
      responseType: 'json',
      throwHttpErrors: false
    })
    return { statusCode: response.statusCode, body: response.body }
  },

  async addListOfBooks(userID, isbn) {
    const response = await got.post(`${config.api.baseUrl}/BookStore/v1/Books`, {
      json: {
        userId: userID,
        collectionOfIsbns: [
          {
            isbn: isbn
          }
        ]
      },
      responseType: 'json',
      throwHttpErrors: false
    })
    return { statusCode: response.statusCode, body: response.body }
  },
  async getBook(isbn) {
    const response = await got(`${config.api.baseUrl}/BookStore/v1/Book?ISBN=${isbn}`, {
      responseType: 'json',
      throwHttpErrors: false
    })
    return { statusCode: response.statusCode, body: response.body }
  },
  async deleteBook(userID, isbn) {
    const response = await got.delete(`${config.api.baseUrl}/BookStore/v1/Book`, {
      json: {
        userId: userID,
        isbn: isbn
      },
      responseType: 'json',
      throwHttpErrors: false
    })
    return { statusCode: response.statusCode, body: response.body }
  }
}
