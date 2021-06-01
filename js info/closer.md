# 변수의 유효 범위와 클로저

[js info 변수의 유효범위와 클로저](https://ko.javascript.info/closure#ref-844) 이 내용을 참고하고 아래는 메모장으로 쓰자.

## closer

외부 변수를 기억하고 접근할 수 있는 함수

## 변수의 유효 범위

코드 블록 {} 안의 함수는 외부에서 접근할 수 없다.

nested function : 중첩 함수에서 변수의 할당을 이해하려면 lexical environment를 알아야 함

### Lexical Environment

Lexical Environment = internal hidden associated object(내부 숨김 연관 객체)임
[명세서](https://tc39.es/ecma262/#sec-lexical-environments)에 기술되어 있는 개념 객체로
중첩 함수, function expression 등 개념을 설명할 때 사용함

Lexical Environment는 아래 두 가지로 나눌 수 있음
- Environment Record : local variable을 property로 저장하는 객체, this 가 여기에 포함됨
- Outer lexical Envirommet : 외부 변수를 참조하는 객체로 내부 객체가 존제하면 외부 객체 (전역 객체가 됨)
- 이 부분은 애매함 내 생각에 lex env는 env rec를 포함하고, 이를 inner or outer lex env obj라고 표현하는 것 같음

실제로는 function의 [[Environment]]프로퍼티에 외부 변수가 저장됨(js는 클로저가 자동 생성)

알아야 할 것들
- function declaration을 할 경우 함수는 초기화 됨
- 변수를 할당한 뒤 스크립트를 실행하면 먼저 lexcial environment에 <uninitiation>이라는 property를 가지고 ( uninitatiation error )
해당 변수가 실행될 때 변수가 프로퍼티로 lexical environment에 할당됨
### function expression

객체가 초기화 되지 않음, 이는 hoisting이 적용되지 않고, reachable 상태가 유지 됨을 말함

### function declaration

function declaration은 변수와 달리 바로 초기화 됨

**function declaration으로 선언한 함수는 렉시컬 환경이 만들어지는 즉시 사용할 수 있다.**

변수는 let을 만나 선언이 될 때까지 사용할 수 없다.

**선언되기 전에도 함수를 사용할 수 있는 것은 바로 이 때문이다.** (hoisting)

아래와 같이 선언할 경우
```js
function say(){
};

let sayHi = "Hello";
```
lexcial env는 아래와 같이 프로퍼티를 가지고 있고,  
say : function   
sayHi : <uninitiation>  

let 변수가 선언될 때 아래와 같이 프로퍼티가 변경 된다.  
say : function  
sayHi : "hellow"  

### Garbage Collection

js는 변수가 unreachable 상태일 떄, 해당 변수의 lexical environment를 메모리에서 제거한다.  
그래서 실행이 끝난 함수안의 변수는 외부에서 가져올 수 없다. 

함수 호출이 끝나도 변수를 가져올 수 있는 경우는 해당 변수가 reachable 상태이기 때문이다.   
그럼 어떤 경우에 함수가 호출을 끝내도 readchable 상태를 유지할 수 있을까?  
-> nested function, function expression이 그러하다 아래의 예를 보자

```js
function f() {
  let value = Math.random();

  return function() { alert(value); };
}

// 배열 안의 세 함수는 각각 f()를 호출할 때 생성된
// 렉시컬 환경과 연관 관계를 맺습니다.
let arr = [f(), f(), f()];
```
let arr는 reachable 상태로 연관 관계인 함수 또한 살아 있게 된다. (이론 상으로, v8엔진의 최적화 프로세스를 생각해보자)

### 최적화 프로세스

v8 engin은 사용하지않는 메모리를 자동으로 삭제하는데 이는 아래와 같은 부작용을 가진다.

```js
function f() {
  let value = Math.random();

  function g() {
    debugger; // Uncaught ReferenceError: value is not defined가 출력됩니다.
  }

  return g;
}

let g = f();
g();
```

## 실무에서 사용하기

클로저를 이용해서 아래와 같이 작성할 수 있다. (js info에 있는 문제니까 클로저가 생각이 안 날 때 다시 찾아보자)

```js
sum(1)(2) = 3
sum(5)(-1) = 4

function sum(a){
  return function(b){
    return a+b
  } 
}
```
```js
/* ... 여기에 두 함수 inBetween과 inArray을 만들어주세요 ...*/
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2


function inBetween(a,b) {
  return function(x){
    return x >= a && x <= b
  }
}

function inArray(array){
  return function(x){
    return array.includes(x) 
  }
}
```

