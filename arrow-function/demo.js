"use strict";

(function () {
    var arr = [1, 2, 3];
    console.log(arr.map(function (each) {
        return each * 2;
    })); // 单个参数不需要括号
    arr.forEach(function (each, index) {
        return console.log(each, index);
    });
    arr.forEach(function (each, index) {
        // 函数若是多行代码用 {} 包裹
        each = each * 3;
        console.log(each, index);
        // console.log(arguments); 不能用 arguments
    });

    // this 的测试
    (function () {
        var obj = {
            name: 'Jacky',
            doSth: function doSth() {
                setTimeout(function () {
                    return console.log(undefined.name);
                }, 0); // 编译代码中 this 有问题
            }
        };
    });

    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.say = function () {
        setTimeout(function () {
            return console.log('I am %s', undefined.name);
        }, 0); // 编译代码中 this 有问题
    };
    var tiger = new Animal('Tiger');
    tiger.say();
})();
//# sourceMappingURL=demo.js.map
