"use strict";
(() => {
    var [a,b] = [1,2];
    [a,b] = [b,a]; // 交换值 so easy
    console.log(a,b);

    var [first, second, third] = ['a', 'b', 'c'];
    console.log(first, second, third);

    // 可以嵌套任意多层
    var [first, [second, third], forth] = [1, [2, 3], 4];
    console.log(first, second, third, forth);

    var [, , third] = [1, 2, 'third~'];
    console.log(third);

    var [head, ...tail] = [1, 2, 3, 4, 5, 6];
    console.log(head, tail.map(each => each * 3));


    var { foo, bar } = { foo: "lorem", bar: "ipsum" };
    console.log(foo, bar);

    // 默认值
    var { foo="default value" } = {};
    console.log(foo);

    var { foo="default value" } = {foo: 'set value'};
    console.log(foo);

    // 对象的解构
    var complicatedObj = {
      arrayProp: [
        "Zapp",
        { second: "Brannigan" }
      ]
    };

    // 复杂对象的解构
    var { arrayProp: [first, { second }] } = complicatedObj;
    console.log(first);
    // "Zapp"
    console.log(second);
    // "Brannigan"

    //
    var greetFn = ({name="Joel", fav}) => {
        console.log('I am %s, I like %s', name, fav);
    }
    greetFn({fav:'sweety~'});
    greetFn({name:'Jack', fav:'banana'});

})();
