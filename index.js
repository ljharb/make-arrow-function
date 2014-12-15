'use strict';

var makeArrowFunctions = function () {
    return [
		Function('return (a, b) => a * b;')(),
		Function('return () => 42;')(),
		Function('return () => function () {};')(),
		Function('return () => x => x * x;')(),
		Function('return x => x * x;')()
	];
};
var arrowFuncs = [];
try { arrowFuncs = makeArrowFunctions(); } catch (e) {}

module.exports = function makeArrowFunction() {
	return arrowFuncs[0];
};
module.exports.list = function makeArrowFunctions() {
	return arrowFuncs.slice();
};


