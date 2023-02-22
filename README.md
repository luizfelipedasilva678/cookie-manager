# cookie-manager

Simple lib to manage cookies

## Example of Usage

```js
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
```

## API

- Create a new cookie.

  ##### create(name: `string`, value: `string`, expiresDays: `number`, secure?:`boolean`, path?: `string`, domain?: `string`): `void`

- Edit an existing cookie.

  ##### edit(name: `string`, newValue: `string`, expiresDays: `number`, secure?:`boolean`, path?: `string`, domain?: `string`): `void`

- Delete an existing cookie.

  ##### delete(name: `string`): `void`

- Get an existing cookie, if the cookie was not found the returned value will be an empty string.

  ##### get(name: `string`): `string`

- Get all available cookies

  ##### getAll(): `{ cookieName: cookieValue }`
