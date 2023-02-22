# cookie-management

Simple lib to manage cookies

## Example of Usage

```js
 import { CookieManager } from 'cookie-management'

 ;(function () {
   const cookieManager = new CookieManager()

   try {
  cookieManager.create('test', 'testvalue', 10)
  console.log('COOKIE VALUE =>', cookieManager.get('test'))
  cookieManager.edit('test', 'testvalue2', 10000)
  cookieManager.delete('test')
   } catch (error: any) {
  console.log(error.message)
   }
})()
```

## API

Create a new cookie.

### create(name: `string`, value: `string`, expiresDays: `number`): `void`

Edit an existing cookie.

### edit(name: `string`, newValue: `string`, expiresDays: `number`): `void`

Delete an existing cookie.

### delete(name: `string`): `void`

Get an existing cookie, if the cookie was not found the returned value will be a empty string.

### get(name: `string`): `string`
