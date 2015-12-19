"use strict";
(() => {
    var arr = [1, 2, 3];
    console.log(arr.map(each => each * 2)); // 单个参数不需要括号
    arr.forEach((each, index) => console.log(each, index));
    arr.forEach((each, index) => { // 函数若是多行代码用 {} 包裹
        each = each * 3;
        console.log(each, index);
        // console.log(arguments); 不能用 arguments
    });

    // this 的测试
    () => {
        var obj = {
            name: 'Jacky',
            doSth: () => {
                setTimeout(() => console.log(this.name), 0);// 编译代码中 this 有问题
            }
        }
    }

    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.say = ()=> {
        setTimeout(() => console.log('I am %s', this.name), 0);// 编译代码中 this 有问题
    }
    var tiger = new Animal('Tiger');
    tiger.say();

})();
