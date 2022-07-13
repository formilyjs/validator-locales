import { ValidatorLocale } from '../types'

/**
 * 西语
 */
export const esMx: ValidatorLocale = {
  name: 'es-MX',
  messages: {
    pattern: 'Este campo no es un campo legal',
    required: 'Este campo es obligatorio',
    number: 'Este campo no es un número legal',
    integer: 'Este campo no es un número entero legal',
    url: 'Este campo no es una url legítima',
    email: 'Este campo no es un formato de correo electrónico legítimo',
    ipv6: 'Este campo no está en formato ipv6 legítimo',
    ipv4: 'Este campo no está en formato ipv4 legítimo',
    idcard: 'Este campo no es un formato de identificación legal',
    taodomain: 'Este campo no cumple con las reglas de nombres de dominio',
    qq: 'Este campo no cumple con el formato del número QQ',
    phone: 'Este campo no es un número de teléfono válido',
    money: 'Este campo no es un formato de moneda válido',
    zh: 'Este campo no es una cadena China legítima',
    date: 'Este campo no es un formato de fecha legal',
    zip: 'Este campo no tiene un formato de código postal legal',
    len: 'La longitud o el número de entradas debe ser{{len}}',
    min: 'La longitud o el número de entradas no puede ser menor que{{min}}',
    max: 'La longitud o el número de entradas no puede ser mayor que{{max}}',
    maximum: 'El valor no puede ser mayor que{{maximum}}',
    exclusiveMaximum: 'El valor debe ser menor que{{exclusiveMaximum}}',
    minimum: 'El valor no debe ser menor que{{minimum}}',
    exclusiveMinimum: 'El valor debe ser mayor que{{exclusiveMinimum}}',
    whitespace: 'No puede ser una cadena en blanco pura',
  },
}
