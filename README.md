# validator-locales

### 使用

```bash
yarn add @formily/validator-locales

```

### 注册所有语言

```typescript
import locales, { registerValidateLocales } from '@formily/validator-locales'
registerValidateLocales(locales)
```

### 注册部分语言

```typescript
import { registerValidateLocale, esMx } from '@formily/validator-locales'
registerValidateLocale(esMx)
```

```typescript
import { registerValidateLocales, esMx, ptBr } from '@formily/validator-locales'
registerValidateLocales({ esMx, ptBr })
// or
registerValidateLocales([esMx, ptBr])
```
