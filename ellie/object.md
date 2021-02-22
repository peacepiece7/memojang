# part7

# Object concept

one of the Javascript`s data types
a collection of related data and/or functionalty
Nearly all objects in Javascript are instances of object
object = { key : value };

## 1. letterals(value) and properties(key)

how make to a object

1. object literal
2. object constructor

```js
"use strict";
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object();

// 'object constructor' syntax
// Object라는 Templete을 이용해서 object를 만드는 방법

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie1", age: 4 };
print(ellie);
```

with JavaScript magic (dynamically typed language)
can add properites later

```js
ellie.hasjob = true;
console.log(ellie.hasjob);

// can delete properties later

delete ellie.hasjob;
```

## 2. computed properties

key should be always string

```js
// 일반적인 코딩을 할 때 사용
console.log(ellie.name);

// conputed properties (runtime중 key를 받을 경우 사용함), 사용자 인증 같은 경우에 씀
// 그리고 코딩 당시에 value를 알 수 없을 때
console.log(ellie["name"]);
```

- computed properties 예시

```js
function printValue(obj, key) {
  console.log(obj[key]); // name, age
  console.log(obj.key); // undefined
}
printValue(ellie, "name");
printValue(ellie, "age");
```

obj.key는 정의 되어 있지 않기 때문에 형식을 미리 정해 주고 값을 받아오는 거임 obj[key]이렇게 parameter가 key가 아니라 item이면 obj[item]이 될거임

## 3. property value shortcut

```js
const person1 = { name = 'ellie1', age = 4};
const person2 = { name = 'ellie2', age = 5};
const person3 = { name = 'ellie3', age = 6};
const person4 = { name = 'ellie4', age = 7};
```

key를 중복으로 할당하는 번거로움을 줄이기 위해 function을 만들 수 있음

```js
const person1 = { name = 'ellie1', age = 4};
const person2 = { name = 'ellie2', age = 5};
const person3 = { name = 'ellie3', age = 6};
const person4 = Person('ellie4',7)

function Person (name. age) {
    return {
        name:name,
        age:age
    }
}
```

이와 같이
class의 constuctor와 같은 역할을 하는(templete역할을 하는) function을
construct function이라 함<br>
네임의 첫 글자를 대문자로 해줘야함,<br>
key와 value의 이름이 같을 경우 하나로 생략 가능,<br>
new를 사용하여 class와 같이 호출하도록 만들자 (아래 내용이랑 이어짐)

## 4. constructor function

````js
const person1 = { name = 'ellie1', age = 4};
const person2 = { name = 'ellie2', age = 5};
const person3 = { name = 'ellie3', age = 6};
const person4 = new Person('ellie4', 7)

function Person (name. age)
    // this = {}
    this.name = name,
    this.age = age
    // return this
}

## 5. in operator : property existance check (key in obj)
```js
const ellie = { name : 'ellie', age : 4 }

console.log('name' in ellie)  //true
console.log('age' in ellie)  //true
console.log('random' in ellie) //false
console.log(ellie.random) //undefinded
````

## 6. for..in vs for..of

- for (key in obj)

```js
const ellie = { name: "ellie", age: 4, hasJob: "true" };

for (key in ellie) {
  console.log(key);
}
// name, age, hasJob
```

obj안의 모든 key를 순차적으로 가져옴

- for (value of ilterable) (정렬된 값)

```js
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.lenth; i++) {
  console.log(array[i]);
}
```

이렇게 쓰면 너무 길고 가독성이 떨어지니까

```js
const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}
```

> 둘다 쓰임은 같지만 사용되는 데이터 타입이 다름<br>
> obj = for ... in <br>
> list(array) = for ... of<br>

## 7. cloning

// Object.assing(dest, [obj1,obj2 ...])

```js
const user = { name: "ellie", age: 4 };
const user2 = user;
consoe.log(user); // { name : 'ellie', age : 4}
```

- user2가 user의 reference를 참조하기 떄문에 새로운 reference를 가지지 않음.

- old way (object cloning)

```js
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
```

-new way (obgect cloning)

```js
const user4 = {};
Object.assign({}.user);
console.log(user4);
```

Object.assign(dest, source)로 user를 cloning할 수 있음

- another example

```js
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color, mixed.size); // blue big
```

뒤에 실행되는 오브잭트를 덮어 씌우기 때문에<br>
fruit2의 color는 fruit1의 color를 덮어 씌움
