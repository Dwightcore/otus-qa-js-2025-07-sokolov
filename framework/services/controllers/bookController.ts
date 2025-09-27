import { bookService } from '../bookService.js'

export const bookController = {
  async getBooks() {
    const response = await bookService.getBooks()
    return {
      statusCode: response.statusCode,
      body: response.body,
      success: response.statusCode === 200
    }
  },

  async getBook(isbn: any) {
    const response = await bookService.getBook(isbn)
    return {
      statusCode: response.statusCode,
      body: response.body,
      success: response.statusCode === 200
    }
  },

  async addBook(userID: any, isbn: any) {
    const response = await bookService.addListOfBooks(userID, isbn)
    return {
      statusCode: response.statusCode,
      body: response.body,
      success: response.statusCode === 201
    }
  },

  async deleteBook(userID: any, isbn: any) {
    const response = await bookService.deleteBook(userID, isbn)
    return {
      statusCode: response.statusCode,
      body: response.body,
      success: response.statusCode === 204
    }
  }
}
