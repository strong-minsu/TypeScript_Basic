//배열인데 타입이 한가지가 아닌 경우, 길이 정확, 타입이 정해진
let x: [string, number];
x = ["hello", 32]; //선언한 방식과 길이, 순서 모두 일치해야함

const person:[string, number] = ["minsu", 22];
const [first, second] = person; //분해할당