'use strict'
// object-oriendted programming
// class: template
// object: instance of a class
// javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based ingeritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak(){
        console.log(`${this.name}:hellow!`)
    } 
    greeting(){
        console.log(`hi! $(this.name)`)
    }
}
const eille = new Person('eille',20)
console.log(eille.name);
console.log(eille.age)

// 2. Getter and Setters
// object orientation language ( js )
// int number of coffee
class coffeeBandingMachine {
    // -1이 될 수 없음 (커피는 0개가 끝)
    // 그래서 우리가 getter setter를 씀
    // 아무나 커피 갯수 수정하면 안 되니까 numberOfCoffee라는 porporty를 private으로 만듬 (incapsulation)
    IntegerNumberOfCoffee(){
        putCoins,
        makeCoffee

    }
} 
// processor language ( c )

class User {
    constructor(fristName, lastName, age){
        this.fristName = fristName;
        this.lastName = lastName;
        if (age < 0){
            this.age = 0
        }else{
            this.age = age
        }
    }
}
const user1 = new User('eille','dream coder', -1)
console.log(user1)

class CoffeeBandingMachine {
    constructor(coffee,count){
        this.coffee = coffee;
        this.count = count
    }
    get count(){
        return this._count
    }
    set count(value){
        return this._count = value < 0 ? 0 : value;
    }
}
const customer1 = new CoffeeBandingMachine('mixCoffee', -1);
console.log(customer1)

// 두 개의 차이점 -> get , set counter만 생겼고 뭔가 조금 더 상세한 설정이 가능할 것 같은 느낌..

// 3. fields (public, private)
// Too soon!
// babel로 써야 함( 기억만 하자 )

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment()

console.log(experiment.publicField)  // 2
console.log(experiment.privateField) // undefined

// 4. Static properties and methods
// Too soon!
// class에 공통으로 사용되는 부분은 static으로 만들면, Object에 상관없이 바로 호출이 가능하고, 메모리 사용을 줄여줄 수 있다.
// static = new branch in class

class Aritcle {
    static publisher = 'Dream Coding';
    constructor (articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Aritcle.publisher)
    }
}
const article1 = new Aritcle(1)
const article2 = new Aritcle(2)

console.log(article1)  // Article {..}
console.log(article1.articleNumber) // 1
Aritcle.printPublisher() // Dream Coding

// 5. Inheritance
// a way for one class to extend another class.
class shape {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`)
    }
    getArea(){
        return (this.width * this.height) / 2
    }
}
// class multiformity
class Rectangle extends shape {}
class Triangle extends shape {
    // over writing
    draw() {
        // mother Inheritance
        super.draw();
        console.log('▲')
    }
    getArea(a,b){
        return (a * b) / 2
        // width * this.height ?? 
    }
}

const rectangle = new Rectangle(200,200,'blue')
rectangle.draw()

const triangle = new Triangle(200,200,'blue')
triangle.draw()
console.clear()
console.log(triangle)
console.log(triangle.getArea(10,10))
console.log(triangle.draw())

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle) //True
console.log(triangle instanceof Rectangle)  // Flase
console.log(triangle instanceof Triangle)  // Ture
console.log(triangle instanceof shape)  // True
console.log(rectangle instanceof Object) // True ( object 안에 들어가보면 모든 class는 object라는 class안에 상속됨)

