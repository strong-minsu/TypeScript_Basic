"use strict";
//create by object literal
const person1 = { name: 'minsu', age: 22 };
//person1 is not "object" type.
//person1 is "{name: string, age: number}" type
//create by Object.create -> non-primitive type  
//"primitive tpye이 아닌 것"을 나타내고 싶을 때 사용
const person2 = Object.create({ name: 'minsu', age: 22 });
console.log(person1); //{ name: 'minsu', age: 22 }
console.log(person2); //{}
let object = {};
object = { name: "minsu" };
object = [{ name: "minsu" }];
//Error가 나타나는 상황 -> Object tpye에 primitive type 할당시
//obj = 39 -> error
//obj = true -> error
//obj = Symbol() -> error ... 등
