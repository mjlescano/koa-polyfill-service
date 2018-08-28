
# Koa Polyfill service

<a href="https://communityinviter.com/apps/koa-js/koajs" rel="KoaJs Slack Community">![KoaJs Slack](https://img.shields.io/badge/Koa.Js-Slack%20Channel-Slack.svg?longCache=true&style=for-the-badge)</a>

[Polyfill service](https://github.com/Financial-Times/polyfill-service) middleware for [koa](https://github.com/koajs/koa).

## Usage

```bash
npm install koa-polyfill-service --save
```

```js
const polyfill = require('koa-polyfill-service')
app.use(polyfill())
```

## API

### app.use(polyfill([options]))

The `options` for the middleware, other than those passed directly to [getPolyfillString](https://github.com/Financial-Times/polyfill-service#library-api-reference), are:

- `maxAge` - the max age for the polyfill's cache control, defaulting to `2 weeks`
- `path` - route to serve lib, defaulting to `/polyfill.js`
- `features` - the same as [getPolyfillString](https://github.com/Financial-Times/polyfill-service#library-api-reference) option, but defaulting to `{default: {}}`.


> _**Disclaimer:** :see_no_evil: shameless copy of [koa Polyfills](https://github.com/polyfills/koa), but using [Polyfill service](https://github.com/Financial-Times/polyfill-service)._
