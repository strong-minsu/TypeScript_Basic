//함수의 반환 타입으로 쓰임
//함수가 return 형태가 void-> 리턴으로 무언가를 하지 않겠다

function returnVoid(message: string): void{
  console.log(message);
  //undefined를 return 하는 것은 허용
  return undefined;
}

//r = void
const r = returnVoid("리턴 없음");
