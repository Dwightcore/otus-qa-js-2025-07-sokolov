import { nameIsValid, fullTrim, getTotal } from '../../src/app.js'

// @ts-expect-error TS(2593): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('App Tests', () => {
  // @ts-expect-error TS(2593): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('nameIsValid', () => {
    // @ts-expect-error TS(2593): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it.each([
      ['John Doe', false],
      ['Jane', false],
      ['jane', true],
      ['J', false],
      ['John123', false]
    ])('nameIsValid(%s) should return %s', (name: any, expected: any) => {
      // @ts-expect-error TS(2552): Cannot find name 'expect'. Did you mean 'expected'... Remove this comment to see the full error message
      expect(nameIsValid(name)).toBe(expected)
    })
  })

  // @ts-expect-error TS(2593): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('fullTrim', () => {
    // @ts-expect-error TS(2593): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('fullTrim should remove all spaces', () => {
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(fullTrim('  Hello World  ')).toBe('HelloWorld')
    })
  })

  // @ts-expect-error TS(2593): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('getTotal', () => {
    // @ts-expect-error TS(2593): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
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
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(getTotal(items, discount)).toBe(expected)
    })

    // @ts-expect-error TS(2593): Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should throw error if discount is not a number', () => {
      // @ts-expect-error TS(2304): Cannot find name 'expect'.
      expect(() => getTotal([{ price: 10, quantity: 1 }], 'abc')).toThrow('Скидка должна быть числом')
    })
  })
})
