import { vi } from 'vitest'
import { CookieManager } from '../src'

describe('CookieManager Delete Method', () => {
  it('should delete a cookie', () => {
    CookieManager.create('test', 'test', 10, true)
    CookieManager.delete('test')

    expect(document.cookie).toEqual('')
  })

  it('should call delete correctly', () => {
    const deleteMock = vi.fn()

    CookieManager.create('test', 'test', 10, true)

    CookieManager.delete = deleteMock
    CookieManager.delete('test')

    expect(deleteMock).toBeCalled()
  })
})
