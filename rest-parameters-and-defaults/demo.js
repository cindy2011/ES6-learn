"use strict";

(function () {
	var defaultParamFn = function defaultParamFn() {
		var name = arguments.length <= 0 || arguments[0] === undefined ? 'Joel' : arguments[0];
		var greet = arguments.length <= 1 || arguments[1] === undefined ? 'Hello' : arguments[1];

		console.log('%s, I am %s', greet, name);
	};

	defaultParamFn();
	defaultParamFn('Jack');
	defaultParamFn('Jack', 'Hi');

	var addFn = function addFn() {
		for (var _len = arguments.length, vals = Array(_len), _key = 0; _key < _len; _key++) {
			vals[_key] = arguments[_key];
		}

		return vals.reduce(function (prev, curr) {
			return prev + curr;
		}, 0);
	};

	console.log(addFn(1));
	console.log(addFn(1, 2, 3));
})();
//# sourceMappingURL=demo.js.map
