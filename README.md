# cache-control-parser

A [RFC9111-compliant](https://www.rfc-editor.org/rfc/rfc9111.html#name-cache-control) cache control header parser.

## Installing

`npm install @flakey5/cache-control-parser`

## Usage

### CJS
```javascript
const { parseCacheControlHeader } = require('@flakey5/cache-control-header')

const directives = parseCacheControlHeader('max-age=10, must-revalidate')
```

### ESM
```javascript
import { parseCacheControlHeader } from '@flakey5/cache-control-header'

const directives = parseCacheControlHeader('max-age=10, must-revalidate')
```

# License

This repository is licensed under the terms of the [MIT License](./LICENSE).
