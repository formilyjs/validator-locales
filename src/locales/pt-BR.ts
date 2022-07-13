import { ValidatorLocale } from '../types'

/**
 * 葡语
 */
export const ptBr: ValidatorLocale = {
  name: 'pt-BR',
  messages: {
    pattern: 'Este campo não é um campo legal',
    required: 'Este campo é obrigatório',
    number: 'Este campo não é um número legítimo',
    integer: 'Este campo não é um número inteiro legal',
    url: 'Este campo não é um url legítimo',
    email: 'Este campo não é um formato de caixa de correio legítimo',
    ipv6: 'Este campo não está no formato ipv6 legítimo',
    ipv4: 'Este campo não está no formato ipv4 legítimo',
    idcard: 'Este campo não é um formato de identificação legal',
    taodomain: 'Este campo não cumpre as regras de nomes de domínio',
    qq: 'Este campo não corresponde ao formato do número QQ',
    phone: 'Este campo não é um número de telemóvel válido',
    money: 'Este campo não é um formato de moeda válido',
    zh: 'Este campo não é uma string chinesa legítima',
    date: 'Este campo não é um formato de data legal',
    zip: 'Este campo não tem um formato de código postal legítimo',
    len: 'O comprimento ou número de entradas deve ser{{len}}',
    min: 'Comprimento ou número de entradas não pode ser menor que{{min}}',
    max: 'Comprimento ou número de entradas não pode ser maior do que{{max}}',
    maximum: 'O valor não pode ser maior que{{maximum}}',
    exclusiveMaximum: 'O valor deve ser menor que{{exclusiveMaximum}}',
    minimum: 'O valor não pode ser menor que{{minimum}}',
    exclusiveMinimum: 'O valor deve ser maior que{{exclusiveMinimum}}',
    whitespace: 'Não pode ser uma string em branco pura',
  },
}
