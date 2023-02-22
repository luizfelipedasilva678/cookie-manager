import { CookieManager } from '../src'
import { it, describe, expect } from 'vitest'

document.cookie = ''

describe('CookieManager', () => {
  it('should create a cookie', () => {
    CookieManager.create('test', 'test', 10)

    expect(document.cookie).not.toEqual('')
  })

  it('should edit a cookie', () => {
    CookieManager.create('test', 'test', 10)
    CookieManager.edit('test', 'test2', 10)

    expect(CookieManager.get('test')).toEqual('test2')
  })

  it('should delete a cookie', () => {
    CookieManager.delete('test')

    expect(document.cookie).toEqual('')
  })

  it('should throw a "You must provide a name, value and expiresDays" exception', () => {
    expect(() => {
      try {
        CookieManager.create('test', 10)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('You must provide a name, value and expiresDays')

    expect(() => {
      try {
        CookieManager.create('test', 'teste')
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('You must provide a name, value and expiresDays')

    expect(() => {
      try {
        CookieManager.create('teste', 10)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('You must provide a name, value and expiresDays')
  })

  it('should throw a "You must provide a name, newValue and expiresDays" exception', () => {
    document = document

    expect(() => {
      try {
        CookieManager.edit('test', 10)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('You must provide a name, newValue and expiresDays')
  })

  it('should throw a Document is not defined exception', () => {
    document = undefined

    expect(() => {
      try {
        CookieManager.create('test', 'test', 10)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('Document is not defined')

    expect(() => {
      try {
        CookieManager.edit('test', 'test2', 10)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('Document is not defined')

    expect(() => {
      try {
        CookieManager.delete('test')
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('Document is not defined')
  })
})
