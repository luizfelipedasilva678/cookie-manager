import { vi } from 'vitest'
import { CookieManager } from '../src'

describe('CookieManager Edit Method', () => {
  it('should edit a cookie', () => {
    CookieManager.create('test', 'test', 10)
    CookieManager.edit('test', 'test2', 10)

    expect(CookieManager.get('test')).toEqual('test2')
  })

  it('should call edit correctly', () => {
    const editMock = vi.fn()

    CookieManager.create('test', 'test', 10, true)

    CookieManager.edit = editMock
    CookieManager.edit('test', 'test2', 10)

    expect(editMock).toBeCalled()
  })
})
