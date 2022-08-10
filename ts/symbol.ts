console.log(Symbol('foo')===Symbol('foo'))  //false

const sym = Symbol(); //고유한 값임 주로 접근 제어

const obj = {
  [sym]:"value"
};

console.log(obj[sym]); //obj["sym"] x