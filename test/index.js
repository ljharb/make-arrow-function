'use strict';

var test = require('tape');
var makeArrowFunction = require('../');

test('makeArrowFunction() is undefined or an arrow function', function (t) {
	var arrowFunction = makeArrowFunction();
	if (arrowFunction) {
		t.equal(typeof arrowFunction, 'function', 'makeArrowFunction is function');
		t.equal(String(arrowFunction), '(a, b) => a * b', 'arrowFunction has expected source');
	} else {
		t.equal(typeof arrowFunction, 'undefined', 'makeArrowFunction is undefined');
	}
	t.end();
});

test('makeArrowFunction.list() is an array', function (t) {
	var funcs = makeArrowFunction.list();
	var expectedSources = [
		'(a, b) => a * b',
		'() => 42',
		'() => function () {}',
		'() => x => x * x',
		'x => x * x'
	];
	t.equal(Object.prototype.toString.call(funcs), '[object Array]', 'list() is an array');
	for (var i = 0; i < funcs.length; ++i) {
		t.equal(typeof funcs[i], 'function', funcs[i] + ' is a function');
		t.equal(String(funcs[i]), expectedSources[i], '"' + funcs[i] + '" !== "' + expectedSources[i] + '"');
	}
	t.end();
});

