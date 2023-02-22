import { CookieManager } from '../src'
import { it, describe, expect, vi } from 'vitest'

describe('CookieManager Create Method', () => {
  it('should create a simple cookie', () => {
    CookieManager.create('test', 'test', 10)

    expect(CookieManager.get('test')).toEqual('test')
  })

  it('should call create correctly', () => {
    const mockCreate = vi.fn()

    CookieManager.create = mockCreate

    CookieManager.create('test2', 'test2', 10)

    expect(CookieManager.create).toBeCalled()
  })

  it('should call create with secure correctly', () => {
    const mockCreate = vi.fn()

    CookieManager.create = mockCreate

    CookieManager.create('test2', 'test2', 10, true)

    expect(CookieManager.create).toBeCalled()
  })

  it('should call create with secure and path correctly', () => {
    const mockCreate = vi.fn()

    CookieManager.create = mockCreate

    CookieManager.create('test2', 'test2', 10, true, '/')

    expect(CookieManager.create).toBeCalled()
  })

  it('should call create with secure, path and domain correctly', () => {
    const mockCreate = vi.fn()

    CookieManager.create = mockCreate

    CookieManager.create('test2', 'test2', 10, true, '/', 'localhost')

    expect(CookieManager.create).toBeCalled()
  })
})
