import store from '../store'
import ru from '../locales/ru'
import en from '../locales/en'

const locales = {
  'ru': ru,
  'en': en
}

export default function localizeFilter(key) {
  const locale = store.getters.lang || 'ru'
  return locales[locale][key] || `[Localize error]: key ${key} not found`
}
