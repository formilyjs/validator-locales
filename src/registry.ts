import { registerValidateLocale as formilyRegisterValidateLocale } from '@formily/validator'
import { ValidatorLocale } from './types'

export function registerValidateLocales(
  locales: Record<string, ValidatorLocale>
) {
  const localesArr = Object.values(locales)
  localesArr.forEach((locale) => {
    registerValidateLocale(locale)
  })
}

export function registerValidateLocale(locale: ValidatorLocale) {
  if (!locale.name || !locale.messages) return
  formilyRegisterValidateLocale({
    [locale.name]: locale.messages,
  })
}
