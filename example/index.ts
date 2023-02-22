import { CookieManager } from 'cookie-manager'

cookies()

function cookies() {
  try {
    CookieManager.create('teste', 'blabla', 10, false)

    const cookieValue = CookieManager.get('teste')

    console.log('COOKIE VALUE ', cookieValue)

    CookieManager.edit('teste', 'blabla5', 1000, true)

    const allCookies = CookieManager.getAll()

    console.log('allCookies', allCookies)

    CookieManager.delete('teste')
  } catch (error: any) {
    console.log(error.message)
  }
}
