import { bookService } from '../bookService.js'

export const bookController = {
  async getBooks() {
    const response = await bookService.getBooks()
    if (response.statusCode !== 200) {
      throw new Error(`Get books failed: ${response.statusCode}`)
    }
    return response.body
  },

  async getBook(isbn) {
    const response = await bookService.getBook(isbn)
    if (response.statusCode !== 200) {
      throw new Error(`Get book failed: ${response.statusCode}`)
    }
    return response.body
  },

  async addBook(userID, isbn) {
    const response = await bookService.addListOfBooks(userID, isbn)
    if (response.statusCode !== 201) {
      throw new Error(`Add book failed: ${response.statusCode}`)
    }
    return response.body
  },

  async deleteBook(userID, isbn) {
    const response = await bookService.deleteBook(userID, isbn)
    if (response.statusCode !== 204) {
      throw new Error(`Delete book failed: ${response.statusCode}`)
    }
    return true
  }
}
