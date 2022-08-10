// never 타입은 모든 타입의 subtype이다. 모든 타입에 할당 할 수 있음!
// never에는 그 어떤 것도 할당할 수 없다.
//함수의 return으로 쓰인다.
function error(message: string):never {
  //이 함수는 throw 하는 경우에 대해서 어떠한 형태도 return되지 않음 (never)
  throw new Error(message);
}

function fail(){
  return error("failed")
}

function infiniteLoop(): never{
  while(true){}
}

let a: string = "hello";
if(typeof a !== "string"){
  a; //a는 naver
}

declare const b: string | number;
if(typeof b !== "string"){
  b;
}
