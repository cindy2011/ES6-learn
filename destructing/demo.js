"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

(function () {
    var a = 1;
    var b = 2;
    // 交换值 so easy
    var _ref = [b, a];
    a = _ref[0];
    b = _ref[1];
    console.log(a, b);

    var first = 'a';
    var second = 'b';
    var third = 'c';

    console.log(first, second, third);

    // 可以嵌套任意多层
    var first = 1;
    var second = 2;
    var third = 3;
    var forth = 4;

    console.log(first, second, third, forth);

    var _ref2 = [1, 2, 'third~'];
    var third = _ref2[2];

    console.log(third);

    var head = 1;
    var tail = [2, 3, 4, 5, 6];

    console.log(head, tail.map(function (each) {
        return each * 3;
    }));

    var _foo$bar = { foo: "lorem", bar: "ipsum" };
    var foo = _foo$bar.foo;
    var bar = _foo$bar.bar;

    console.log(foo, bar);

    // 默认值
    var _ref3 = {};
    var _ref3$foo = _ref3.foo;
    var foo = _ref3$foo === undefined ? "default value" : _ref3$foo;

    console.log(foo);

    var _foo = { foo: 'set value' };
    var _foo$foo = _foo.foo;
    var foo = _foo$foo === undefined ? "default value" : _foo$foo;

    console.log(foo);

    // 对象的解构
    var complicatedObj = {
        arrayProp: ["Zapp", { second: "Brannigan" }]
    };

    // 复杂对象的解构

    var _complicatedObj$array = _slicedToArray(complicatedObj.arrayProp, 2);

    var first = _complicatedObj$array[0];
    var second = _complicatedObj$array[1].second;

    console.log(first);
    // "Zapp"
    console.log(second);
    // "Brannigan"

    //
    var greetFn = function greetFn(_ref4) {
        var _ref4$name = _ref4.name;
        var name = _ref4$name === undefined ? "Joel" : _ref4$name;
        var fav = _ref4.fav;

        console.log('I am %s, I like %s', name, fav);
    };
    greetFn({ fav: 'sweety~' });
    greetFn({ name: 'Jack', fav: 'banana' });
})();
//# sourceMappingURL=demo.js.map
