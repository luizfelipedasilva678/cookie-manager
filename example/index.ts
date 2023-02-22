import { CookieManager } from '../src'
;(function () {
  const cookieManager = new CookieManager()

  try {
    cookieManager.create('teste', 'blabla', 10)
    console.log('COOKIE VALUE =>', cookieManager.get('teste'))
    cookieManager.edit('teste', 'blabla5', 10000)
    cookieManager.delete('teste')
  } catch (error: any) {
    console.log(error.message)
  }
})()
