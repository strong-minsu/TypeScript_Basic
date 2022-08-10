"use strict";
//message만 매개변수에 써있는 경우 "noImplicitAny"가 true이므로 오류 
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("리턴은 아무거나");
//any type는 "어떤 것도 할 수 없다"가 아닌 "어떤 것이든 할 수 있다" 형태
any1.toString();
let looselyTyped = {};
const d = looselyTyped.a.b.c.d; //오류가 나지 않음 
function leakingAny(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
// 타입 누수가 일어남
const c = leakingAny({ num: 0 });
// 타입 안전성은 TypeScript를 사용하는 동기 중 하나이므로 타입 안전성이 흔들릴 수 있는 any의 사용은 권장하지 않음
