# Method & "this"


# 메서드 등록하기

선언된 함수를 아래와 같이 메서드로 등록할 수 있다.

user = { sayHi() : function } 이런 구조로 등록되고 아래와 같이 작성할 수 있다.

```js
let user = {
  // ...
};

// 함수 선언
function sayHi() {
  alert("안녕하세요!");
};

// 선언된 함수를 메서드로 등록
user.sayHi = sayHi;

user.sayHi(); // 안녕하세요!
```

## 메서드와 this

메서드에 this가 있을 경우 해당 this는 메서드를 호출한 함수를 참조하게 된다. ( lex env에 this의 위치가 입력되어 있기 때문에 )


### 자유로운 "this"

```js
function sayHi() {
  console.log("this", null)
  console.log("this", this.name)
  // 두 줄 모두 null을 반환함
  // 내 생각에 Environment Record에 저장된 this는 내부 객체에서 this.name을 참조하지 
  // 못하기 떄문에 외부 객체에서 참조를 구하게 되고 내부 객체는 -> null 이기떄문에 
  // null이 반환된다고 생각함
}
```
