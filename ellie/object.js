'use strict'
// Objects
// one of the Javascript`s data types
// a collection of related data and/or functionalty
// Nearly all objects in Javascript are instances of object
// object = { key : value };

// 1. letterals(value) and properties(key)

// how make to a object
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object() // 'object constructor' syntax (Object라는 Templete을 이용해서 object를 만드는 방법)

function print(person) {
    console.log(person.name)
    console.log(person.age)
}

const ellie = { name : 'ellie1', age : 4}

print(ellie)

// with JavaScript magic (dynamically typed language)
// can add properites later

ellie.hasjob = true;
console.log(ellie.hasjob)

// can delete properties later

delete ellie.hasjob

// 2. computed properties
// key should be always string

console.log(ellie.name) // 일반적인 코딩을 할 때 사용
console.log(ellie['name']) // conputed properties (runtime중 key를 받을 경우 사용함), 사용자 인증 같은 경우에 씀 + 코딩 당시에 value를 알 수 없을 때

// computed properties 예시
function printValue(obj, item){
    // obj.key는 정의 되어 있지 않기 때문에 형식을 미리 정해 주고 값을 받아오는 거임 obj[key]이렇게 parameter가 key가 아니라 item이면 obj[item]이 될거임
    console.log(obj[item])
    console.log(obj.item)
}
printValue(ellie, 'name')
printValue(ellie, 'age')