'use strict';

var getArrows = function getArrowFunctions() {
	return [
		'return (a, b) => a * b;',
		'return () => 42;',
		'return () => function () {};',
		'return () => x => x * x;',
		'return y => x => x * x;',
		'return x => x * x;',
		'return x => { return x * x; }',
		'return (x, y) => { return x + x; }',
		'"use strict"; return (a = Math.random(10)) => {};',
		'"use strict"; return (a = function() {\n\tif (Math.random() < 0.5) { return 42; }\n\treturn "something else";\n}) => a();'
	];
};
var arrowFuncs = [];
var fns = getArrows();
for (var i = 0; i < fns.length; ++i) {
	try {
		arrowFuncs.push(Function(fns[i])());
	} catch (e) { /**/ }
}

module.exports = function makeArrowFunction() {
	return arrowFuncs[0];
};
module.exports.list = function makeArrowFunctions() {
	return arrowFuncs.slice();
};
