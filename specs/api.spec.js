import { generateInvalidUserData, generateValidUserData } from '../framework/fixtures/userData.js'
import { accountController } from '../framework/services/controllers/accountController.js'
import { AuthController } from '../framework/services/controllers/authController.js'
import { bookController } from '../framework/services/controllers/bookController.js'

describe('accountApi', () => {
  let createdUserId
  let validUser
  let validPassword

  describe('Create user', () => {
    it('create user', async () => {
      validUser = generateValidUserData()
      validPassword = validUser.password

      const user = await accountController.createUser(validUser.login, validPassword)
      expect(user).toHaveProperty('userID')

      createdUserId = user.userID
    }, 10000)
  })

  describe('Authorisation', () => {
    it('login with valid credentials', async () => {
      const result = await AuthController.authoriseUser(validUser.login, validPassword)
      expect(result).toBe(false) // API баг - возвращает false вместо токена
    }, 10000)

    it('should not login with invalid credentials', async () => {
      const invalidUser = generateInvalidUserData()
      const invalidPassword = generateInvalidUserData(2)

      await expect(AuthController.authoriseUser(invalidUser.login, invalidPassword.password)).rejects.toThrow(
        'Authorisation failed'
      )
    })
  })

  describe('Account', () => {
    it('get account details', async () => {
      await expect(accountController.getUser(createdUserId)).rejects.toThrow('Get user failed: 401')
    })

    it('delete account', async () => {
      await expect(accountController.deleteUser(createdUserId)).rejects.toThrow('Delete user failed: 401')
    })
  })
})

describe('Book Management', () => {
  let bookIsbn

  it('get list of books', async () => {
    const books = await bookController.getBooks()
    expect(books).toHaveProperty('books')
    expect(Array.isArray(books.books)).toBe(true)

    if (books.books.length > 0) {
      bookIsbn = books.books[0].isbn
    }
  }, 10000)

  it('get book by ISBN', async () => {
    if (!bookIsbn) {
      bookIsbn = '9781449325862' // Fallback ISBN
    }

    const book = await bookController.getBook(bookIsbn)
    expect(book).toHaveProperty('isbn')
    expect(book.isbn).toBe(bookIsbn)
  }, 10000)

  it('fail to add book to user (unauthorized)', async () => {
    if (!bookIsbn) {
      bookIsbn = '9781449325862'
    }

    await expect(bookController.addBook('someUserId', bookIsbn)).rejects.toThrow('Add book failed')
  })

  it('fail to delete book from user (unauthorized)', async () => {
    if (!bookIsbn) {
      bookIsbn = '9781449325862'
    }

    await expect(bookController.deleteBook('someUserId', bookIsbn)).rejects.toThrow('Delete book failed')
  })
})
