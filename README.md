# make-arrow-function <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Function that returns an arbitrary arrow function, or undefined if arrow function syntax is unsupported.

## Example
```js
var maybeArrowFunction = require('make-arrow-function')();
if (maybeArrowFunction) {
	assert(typeof maybeArrowFunction === 'function');
} else {
	assert(typeof maybeArrowFunction === 'undefined');
}

var arrowFunctions = require('make-arrow-function').list();
assert(arrowFunctions.every(function (fn) { return typeof fn === 'function'; }));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/make-arrow-function
[npm-version-svg]: https://versionbadg.es/ljharb/make-arrow-function.svg
[deps-svg]: https://david-dm.org/ljharb/make-arrow-function.svg
[deps-url]: https://david-dm.org/ljharb/make-arrow-function
[dev-deps-svg]: https://david-dm.org/ljharb/make-arrow-function/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/make-arrow-function#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/make-arrow-function.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/make-arrow-function.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/make-arrow-function.svg
[downloads-url]: https://npm-stat.com/charts.html?package=make-arrow-function
[codecov-image]: https://codecov.io/gh/ljharb/make-arrow-function/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/make-arrow-function/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/make-arrow-function
[actions-url]: https://github.com/ljharb/make-arrow-function/actions
