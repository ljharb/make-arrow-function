#make-arrow-function <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![browser support][testling-svg]][testling-url]

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
[testling-svg]: https://ci.testling.com/ljharb/make-arrow-function.png
[testling-url]: https://ci.testling.com/ljharb/make-arrow-function
[npm-badge-png]: https://nodei.co/npm/make-arrow-function.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/make-arrow-function.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/make-arrow-function.svg
[downloads-url]: https://npm-stat.com/charts.html?package=make-arrow-function

