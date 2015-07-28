var polyfillio = require('polyfill-service')

module.exports = function (options) {
  options = options || {}

  var path = options.path || '/polyfill.js'
  if (path[0] !== '/') path = '/' + path

  // note: i want to tell proxies to not cache this,
  // not sure how to do that
  var maxAge = options.maxage || options.maxAge || '1 year'
  if (typeof maxAge === 'string') maxAge = require('ms')(maxAge)
  maxAge = Math.round(maxAge / 1000)
  var cacheControl = 'public, max-age=' + maxAge

  return function* _polyfill(next) {
    if (this.path !== path) return yield* next

    this.set('Cache-Control', cacheControl)
    this.response.vary('User-Agent')
    this.type = 'js'
    this.body = polyfillio.getPolyfillString({
      uaString: options.uaString || this.headers['user-agent'],
      minify: options.minify || true,
      features: options.features || { default: {} },
      libVersion: options.libVersion,
      unknown: options.unknown
    })
  }
}
