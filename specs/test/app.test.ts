import { nameIsValid, fullTrim, getTotal } from '../../src/app.js'

describe('App Tests', () => {
  describe('nameIsValid', () => {
    it.each([
      ['John Doe', false],
      ['Jane', false],
      ['jane', true],
      ['J', false],
      ['John123', false]
    ])('nameIsValid(%s) should return %s', (name: any, expected: any) => {
      expect(nameIsValid(name)).toBe(expected)
    })
  })

  describe('fullTrim', () => {
    it('fullTrim should remove all spaces', () => {
      expect(fullTrim('  Hello World  ')).toBe('HelloWorld')
    })
  })

  describe('getTotal', () => {
    it.each([
      [
        [
          { price: 10, quantity: 2 },
          { price: 5, quantity: 4 }
        ],
        0,
        40
      ],
      [[], 0, 0]
    ])('getTotal(%j, %s) should return %s', (items: any, discount: any, expected: any) => {
      expect(getTotal(items, discount)).toBe(expected)
    })

    it('should throw error if discount is not a number', () => {
      // @ts-expect-error TS(2322) FIXME: Type 'number' is not assignable to type 'never'.
      expect(() => getTotal([{ price: 10, quantity: 1 }], 'abc')).toThrow('Скидка должна быть числом')
    })
  })
})
