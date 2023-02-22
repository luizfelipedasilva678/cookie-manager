import { CookieManagerException } from '../errors/CookieManagerExeception'

export class CookieManager {
  create(name: string, value: string, expiresDays: number) {
    if (!name || !value || !expiresDays) {
      throw new CookieManagerException(
        'You must provide a name, value and expiresDays'
      )
    }

    if (!document) {
      throw new CookieManagerException('Document is not defined')
    }

    const expirationDate = this.#getExpirationDate(expiresDays)

    document.cookie = `${name}=${value};expires=${expirationDate};path="/`
  }

  edit(name: string, newValue: string, expiresDays: number) {
    if (!document) {
      throw new CookieManagerException('Document is not defined')
    }

    if (!name || !newValue || !expiresDays) {
      throw new CookieManagerException(
        'You must provide a name, newValue and expiresDays'
      )
    }

    const cookies = this.#toObject()
    const expirationDate = this.#getExpirationDate(expiresDays)

    if (name in cookies) {
      document.cookie = `${name}=${newValue};expires=${expirationDate};path="/`
    }
  }

  get(name: string) {
    if (!name) {
      throw new CookieManagerException('You must provide a name')
    }

    if (!document) {
      throw new CookieManagerException('Document is not defined')
    }

    const cookies = this.#toObject()

    if (name in cookies) {
      return cookies[name]
    }

    return ''
  }

  delete(name: string) {
    if (!name) {
      throw new CookieManagerException('You must provide a name')
    }

    if (!document) {
      throw new CookieManagerException('Document is not defined')
    }

    const cookies = this.#toObject()
    const pastDate = new Date(0).toUTCString()

    if (name in cookies) {
      document.cookie = `${name}=;expires=${pastDate};path="/`
    }
  }

  #toObject() {
    const cookies = document.cookie.split(';')
    const cookiesObj: Record<string, string> = {}

    cookies.forEach((cookie) => {
      const [key, value] = cookie.split('=')

      cookiesObj[key] = value
    })

    return cookiesObj
  }

  #getExpirationDate(expiresDays: number) {
    const currentDate = new Date()
    const daysMiliseconds = expiresDays * 24 * 60 * 60 * 1000
    currentDate.setTime(currentDate.getTime() + daysMiliseconds)
    const expirationDate = currentDate.toUTCString()

    return expirationDate
  }
}
