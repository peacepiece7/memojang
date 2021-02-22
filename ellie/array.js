'use strict'

// Array

// ++ 아래 나오는 함수들을 api라고 함!! command눌러서 detail을 볼 수 있음

// 1. Array Declaration
// interface는 new 선언을해서 변수에 집에넣고 시작함
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index Position
const fruits = ['🐯','🦁'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length - 1);

// 3. Looping over an array
// print all fruits
console.log('===looping over an array part===')

for (let i = 0; i < fruits.legnth; i++){
    console.log(fruits[i])
}

for (let i of fruits){
    console.log(i)
}
// command로 forEach에 들어가보면
/*
forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    Calls a defined callback function on each element of an array, and returns an array that contains the results.
    @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
    @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     
*/
// callbackfn은 최대 3 개의 인자를 받는다 = function (argumnet1,argumnet2,argumnet3)
// 이렇게 나타낼 수 있고
fruits.forEach(function ( fruit, index, array){
    console.log(fruit, index, array)
})

// 요약해서 표현하면 아렇게 나타낼 수 있다.
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
console.log('===addtion, delete, copy part====')

// push: add an item to the end

fruits.push('🐶','🐱')
console.log(fruits)

// pop: remove an item from the end

fruits.pop()
console.log(fruits)
fruits.pop()
console.log(fruits)

// unshift: add an item to the beggining
fruits.unshift('🐨','🐥')
console.log(fruits)
// shift: remove an item from the beggining
fruits.shift()
console.log(fruits)

// note!! shift, unshift are much slower than pop, push
// shift, unshift는 배열을 모두 당겨오거나 밀어내야해서 실행시간이 길지만
// specified position의 index를 참조하는 경우나 pop, push을 사용할 땐 특정한 부분만 건들기 떄문에 빠르다.

// splice: remove an item by index position
fruits.push('🐸','🐛')
console.log(fruits)
// splice 설명에 보면 deletecount? number라고 되어 있는데 ?는 내 마음대로 vlaue를 넣을 수 있다는 뜻
// 안 적으면 다 지워짐
fruits.splice(1,3)
console.log(fruits)

fruits.push('🐸','🐛','🐨','🐥')
console.log(fruits)

fruits.splice(1,3,'🐔','🦋','🐌')
console.log(fruits)

// combine two arrays
const fruits2 = ['fruit:','fruits']
const newFruits = fruits2.concat(fruits)
console.log(newFruits)

// 낙서
const text = [1,2,3,4,5]
const newText = text.join()

console.log(newText)
console.log(newFruits.join(''))
// fruit:fruits🐥🐔🦋🐌🐨🐥 다 붙일 수 있음 ㅋㅋ
// if omitted, the array elements are sperated with a comma

// 5. searching

// indexOf: find the index
console.log('===searching part===')
console.log(fruits.indexOf('🦋')) // eistence, return  2
console.log(fruits.indexOf('🦎')) // not existence, return -1

// includes
console.log(fruits.includes('🦋')) // existence, return true
console.log(fruits.includes('🦎')) // not existence, return false

// lastIndexOf
console.log(`lastIndexOf ${fruits}`)
fruits.push('🦋')
console.log(fruits)

// indexOF는 일치하는 첫번쨰 value의 index를 number로 표시
console.log(`find frist index: ${fruits.indexOf('🦋')}`) // 2

// lastIndexOf는 마지막 value의 index를 number로 표시
console.log(`find last index: ${fruits.lastIndexOf('🦋')}`) // 6










// playgound 낙서장임!

console.clear()


const array1 = new Array(1,2,3,4,5)
console.log(array1)
// 배열을 클래스에 넣어보자. user 1,2,3,4,5

class Person {
    constructor(name, number){
        this.name = name
        this.number = number
    }
}


// 배열을 하나씩 불러오는 loop를 만듬,
const list1 = new Array()
for(let i = 0; i < array1.length; i++){
    const person1 = new Person('user',array1[i])
    list1.push([person1])
}
console.log(list1)

class CoffeeBandingMachine {
    constructor(coffee, count){
        this.coffee = coffee,
        this.count = count
    }
    get count(){
        return this._count
    }
    set count(value){
        if(value <= 0){
            return this._count = 0
        }else{
            return this._count = value
        }
        }
}
const customers = new CoffeeBandingMachine('mixcoffee',4)
console.log(customers)

const list2 = new Array(1,2,3,4,5,'hellow','there','🐯')
console.clear()
console.log(list2.toLocaleString())

const textArat = list2.reverse()
console.log(textArat)
console.log(typeof textArat)

console.log(`slice from textArat[0] to textArat[5]: ${textArat.slice(0,5)}`)

console.log(textArat.sort())

