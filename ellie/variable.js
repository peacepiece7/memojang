'use strict'

// 2. Variable
{
    // block scope
    // block 밖에선 안에있는 내용을 확인할 수 없음!
    let name = 'tae'
    console.log(name)
}
// global scope
// globla scope는 application이 실행되는 순간부터 할당되기 떄문에 최대한 적게 사용해야 메모리 사용을 줄일 수 있음!
let name = 'taetae'
console.log(name)

// 변수를 선언할 수 있는 함수는 let 하나 뿐임!

// + var는 순서대로 읽지 않기 떄문에, 사용하고 나서 선언해도 실행이 되기떄문에 사용하면 안 됨!!!!
// 이것을 hoisting이라고 함 ( 어디에 선언했냐에 상관없이 선언을 제일 위로 끌어 올려주는 것을 뜻 함)
// var는 block scope가 없음 무조건 global scope로 인식해서 메모리 사용량이 너무 큼

// 3. Constants

// 선언한 값을 바꿀 수 없음!
// mutable data type (virus도 mutation을 통해서 유전자 서열을 바꾼다.) = 선언한 단어를 바꿔서 사용 가능 (let)
// immutable data type = 한 번 선언하면 데이터를 바꿀 수 없다. (const)

// favor immutable data type always for a rew reasons:
// - security (한 번 작성한 값을 해커가 변경이 불가능 함)
// - thread safety ( app이 실행되면 여러 프로세스가 동시 실행 되고, 동시에 값을 변경할 수 있는데 이떄 값이 변경되지 않음)
// - reduce human mistakes 

// 4. variable types

// primitive type(더이상 나눌 수 없는 한 가지 아이템) :  number, string, boolean, null, undefine, symbol
// object type(single item(primitive item)을 여러개 묶어 하나의 상자로 관리가능한 것) : 

// type number has only one case!

const count = 17; // integer
const float = 17.1 // decimal number
console.log(`value: ${count} and type: ${typeof count}`);
console.log(`value: ${float} and type: ${typeof float}`);

// speacial case of number (infinity, -infinity, NaN{not a number})
// dom 요소를 조작할 때 이부분을 고려하지 않아서 에러가 나는 경우가 있다고 합니다.

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn ='not a number' / 2;

console.log(`${infinity}<- infinity and ${negativeInfinity} <- negainfinity and ${nAn} <- not a number`)

// bigInt
// js에서는 소수점 +53 -53자리 까지 표현 가능 
const bigInt = 1231231231231231231231232n; //bigInt! 끝에 n 을 써서 추가 

//string
const char = 'c';
const brendan = 'brendan'
const greeting = 'hellow' + brendan
// templete literals (string) backtic symbol을 사용해서 변수명과 문자열을 같이 표현 할 수 있다.
console.log(`vlaue${greeting},type:${typeof greeting}`)

// boolean
// false: 0, null, undefined, NaN, ''(빈 문자열)
// true: any other value

let nothing = null;
console.log(`value${nothing},type:${typeof nothing}`)
// null은 empty value가 할당된 것이기 때문에 
// print : value: null, type : object 라고 뜸 

let x = undefined;
console.log(`value${x},type:${typeof x}`)
// undefined는 아직 정의가 안 되었기 떄문에 type이나 value를 가지지 못함
// print : undefined 라고 뜸 

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

// map이나 자료구조에서, 동시다발적으로 일어나는 코드에서 우선순위를 주고싶을 떄 사용하는 고요한 식별자
// 동일한 strting을 가지고 있어도 다른 식별자임!
console.log(symbol1 === symbol2) // false

// 동일한 식별자임을 심볼에게 알리고 싶다면 Symbol.for을 사용해야 함
// Symbol.for을 사용한 경우, console.log할 때 반드시 symbol1.description 을 해야한다
const symbol1 = Symbol.for('id');
const symbol2 = Symbol.for('id');
console.log(symbol1 === symbol2) // true

// console.log(`value${symbol1},type:${typeof symbol1}`) error!

console.log(`value${symbol1.description},type:${typeof symbol1.description}`) // right! there you go


// 5. Dynamic typing : dynamically typyed language

// js는 dynamic type 으로 선언할 떄 어떤 타입인지 선언하지 않고 런타임 중에 할당된 값에 따라서 변경될 수 있음


// playgound! 