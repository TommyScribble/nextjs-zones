// import { mockCookieUpdate } from '../test/cookieUpdateMock'

export const PREFS_COOKIE_NAME = 'cpref'
export const COOKIES_PREF_KEYS = {
    BareBones: { cookieValue: 'e', name: 'Bare bones' },
    PersonalApproach: { cookieValue: 'p', name: 'Personalised approach' },
    BellsWhistles: { cookieValue: 'a', name: 'Bells and whistles' },
}

export type updateCookiePrefParams = {
    [key in keyof typeof COOKIES_PREF_KEYS]: boolean
}

export async function updateCookiePref(prefs: updateCookiePrefParams) {
    const cookiePref = Object.entries(COOKIES_PREF_KEYS)
        .map(([key, value]) =>
            [
                value.cookieValue,
                prefs[key as keyof typeof COOKIES_PREF_KEYS] ? 1 : 0,
            ].join('=')
        )
        .join(',')

    return await fetch('/api/cookies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [PREFS_COOKIE_NAME]: cookiePref }),
    })
}

const parseCookies = (cookies?: string) => {
    var cookieObj: { [key: string]: string } = {}
    if (cookies && cookies !== '') {
        cookies.split(';').forEach(function (cookie) {
            var parts = cookie.match(/(.*?)=(.*)$/)
            if (parts) cookieObj[parts[1].trim()] = (parts[2] || '').trim()
        })
    }
    return cookieObj
}

export const getCookie = (cookieName: string, req: any) => {
    return parseCookies(req.headers.cookie)[cookieName]
}

export function getCookieByName(name: string) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift()
}

export function parsePrefsCookie(cookie: string) {
    const cookiePrefs = {}
    cookie
        .split(',')
        .map((pref) => pref.split('='))
        .forEach((pref) => {
            // @ts-ignore
            cookiePrefs[pref[0]] = !!parseInt(pref[1])
        })

    return cookiePrefs
}
