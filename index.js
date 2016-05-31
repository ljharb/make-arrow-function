'use strict';

var getArrowFunctions = function getArrowFunctions() {
	return [
		Function('return (a, b) => a * b;')(),
		Function('return () => 42;')(),
		Function('return () => function () {};')(),
		Function('return () => x => x * x;')(),
		Function('return x => x * x;')(),
		Function('return x => { return x * x; }')(),
		Function('return (x, y) => { return x + x; }')()
	];
};
var arrowFuncs = [];
try {
	arrowFuncs = getArrowFunctions();
} catch (e) { /**/ }

module.exports = function makeArrowFunction() {
	return arrowFuncs[0];
};
module.exports.list = function makeArrowFunctions() {
	return arrowFuncs.slice();
};
