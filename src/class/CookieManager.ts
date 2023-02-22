import { CookieManagerException } from '../errors/CookieManagerExeception'

export class CookieManager {
  static create(
    name: string,
    value: string,
    expiresDays: number,
    secure?: boolean,
    path?: string,
    domain?: string
  ) {
    if (!name || !value || !expiresDays) {
      throw new CookieManagerException(
        'You must provide a name, value and expiresDays'
      )
    }

    if (!document) {
      throw new CookieManagerException('Document is not defined')
    }

    const expirationDate = CookieManager.#getExpirationDate(expiresDays)

    document.cookie = CookieManager.#getCookieString(
      name,
      value,
      expirationDate,
      secure,
      domain,
      path
    )
  }

  static edit(
    name: string,
    newValue: string,
    expiresDays: number,
    secure?: boolean,
    path?: string,
    domain?: string
  ) {
    if (!document) {
      throw new CookieManagerException('Document is not defined')
    }

    if (!name || !newValue || !expiresDays) {
      throw new CookieManagerException(
        'You must provide a name, newValue and expiresDays'
      )
    }

    const cookies = CookieManager.#toObject()
    const expirationDate = CookieManager.#getExpirationDate(expiresDays)

    if (name in cookies) {
      document.cookie = CookieManager.#getCookieString(
        name,
        newValue,
        expirationDate,
        secure,
        domain,
        path
      )
    }
  }

  static get(name: string) {
    if (!name) {
      throw new CookieManagerException('You must provide a name')
    }

    if (!document) {
      throw new CookieManagerException('Document is not defined')
    }

    const cookies = CookieManager.#toObject()

    if (name in cookies) {
      return cookies[name]
    }

    return ''
  }

  static delete(name: string) {
    if (!name) {
      throw new CookieManagerException('You must provide a name')
    }

    if (!document) {
      throw new CookieManagerException('Document is not defined')
    }

    const cookies = CookieManager.#toObject()
    const pastDate = new Date(0).toUTCString()

    if (name in cookies) {
      document.cookie = `${name}=;expires=${pastDate};path="/`
    }
  }

  static getAll() {
    return CookieManager.#toObject()
  }

  static #toObject() {
    const cookies = document.cookie.split(';')
    const cookiesObj: Record<string, string> = {}

    cookies.forEach((cookie) => {
      const [key, value] = cookie.split('=')

      cookiesObj[key.trim()] = value
    })

    if (!Object.keys(cookiesObj).length) {
      return {}
    }

    return cookiesObj
  }

  static #getExpirationDate(expiresDays: number) {
    const currentDate = new Date()
    const daysMiliseconds = expiresDays * 24 * 60 * 60 * 1000
    currentDate.setTime(currentDate.getTime() + daysMiliseconds)
    const expirationDate = currentDate.toUTCString()

    return expirationDate
  }

  static #getCookieString(
    name: string,
    value: string,
    expirationDate: string,
    secure?: boolean,
    domain?: string,
    path?: string
  ) {
    const isSecure = secure ? ';Secure' : ''

    return `${name}=${value};expires=${expirationDate}${isSecure}${
      path ? `;path=${path}` : ''
    }${domain ? `;domain=${domain}` : ''};`
  }
}
