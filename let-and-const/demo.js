"use strict";

(function () {
	function testLet(argument) {
		var inIf;
		var _inIf;
		if (true) {
			var _inIf2 = 'hello outter~'; // 编译后的 js 会重命名变量名字
			console.log(_inIf2);
		}
		console.log(inIf);
		console.log(_inIf);
	}
	testLet();

	var MAX_LEN = 10;
	// MAX_LEN++;// 编译的时候报错
	console.log(MAX_LEN);
})();
//# sourceMappingURL=demo.js.map
