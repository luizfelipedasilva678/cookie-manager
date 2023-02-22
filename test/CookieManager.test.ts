import { CookieManager } from '../src'
import { it, describe, expect } from 'vitest'

document.cookie = ''
const cookieManager = new CookieManager()

describe('CookieManager', () => {
  it('should create a cookie', () => {
    cookieManager.create('test', 'test', 10)

    expect(document.cookie).not.toEqual('')
  })

  it('should edit a cookie', () => {
    cookieManager.create('test', 'test', 10)
    cookieManager.edit('test', 'test2', 10)

    expect(cookieManager.get('test')).toEqual('test2')
  })

  it('should delete a cookie', () => {
    cookieManager.delete('test')

    expect(document.cookie).toEqual('')
  })

  it('should throw a "You must provide a name, value and expiresDays" exception', () => {
    expect(() => {
      try {
        cookieManager.create('test', 10)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('You must provide a name, value and expiresDays')

    expect(() => {
      try {
        cookieManager.create('test', 'teste')
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('You must provide a name, value and expiresDays')

    expect(() => {
      try {
        cookieManager.create('teste', 10)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('You must provide a name, value and expiresDays')
  })

  it('should throw a "You must provide a name, newValue and expiresDays" exception', () => {
    document = document

    expect(() => {
      try {
        cookieManager.edit('test', 10)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('You must provide a name, newValue and expiresDays')
  })

  it('should throw a Document is not defined exception', () => {
    document = undefined

    expect(() => {
      try {
        cookieManager.create('test', 'test', 10)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('Document is not defined')

    expect(() => {
      try {
        cookieManager.edit('test', 'test2', 10)
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('Document is not defined')

    expect(() => {
      try {
        cookieManager.delete('test')
      } catch (error) {
        throw new Error(error.message)
      }
    }).toThrowError('Document is not defined')
  })
})
