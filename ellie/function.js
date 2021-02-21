// funtion
// fundamental building block in the program
// subprogram can be used multiple time
// performs a task or calculates a value

// 1. Funtion decalaration
// funtion name(param1, param2) { body... return;}
// one function = one thing
// nameing = doSomething, command, varb
// e.g cratedCardAndPoint -> creatCard, createPoint
// function is object in JS

function printHellow(){
    console.log('hellow');
}
printHellow();

function log(message){
    console.log(message);
}
log('hellow!')

// 2. parameters 
// primitive parameter : passed by value
// object parameters: passed by reference
function changeName(obj){

obj.name = 'coder';
}

const ellie = { name : 'ellie'};
changeName(ellie);
console.log(ellie)

// 3. Default parameters (added in ES6)

function showMessage(message, from="unknown"){
    console.log(`${message} by ${from}`)
}
showMessage("hellow")

// 4. Rest parameters (add in ES6)

function printAll (...args) {
    for (let i=0; i < args.length; i++){
        console.log(args[i])
    }
    // const value of list (let, const 둘 다 가능)
    for (let arg of args){
        console.log(arg)
    }

    args.forEach((arg)=>console.log(arg))
}

printAll('drema', 'coding', 'ellie')

// 5. Local scope
// 밖에서는 안을 볼 수 없고 안에서는 밖을 볼 수 있다 ( 틴트 처리 된 창문 )

let globalMessage = 'global' // global value
function printMessage(){
    let message = 'hellow locale message'
    console.log(message) // local value
    function anotherFunction(){
        let childMessage = 'hellow child message'
        console.log(childMessage)
    }
    anotherFunction()
}

printMessage()

// 6. Return a value
function sum(a, b){
    return a + b
}
// return이 없는 경우 = return undefined

// 7. Early return, Early exit
//bad
function upgradeUser(user){
    if ( user.point > 10 ) {
        // long upgrage logic..
    }
}
//good
function upgradeUser(user){
    if (user.point <= 10){
        return
    }
    // long upgrad logic..
} 
// first-class function
// functions are treated like any other variable
// can be assinged as a value to variable
// can be passed as an argument to other functions
// can be retured by another fuction

// 1, fuction expresion
// a function declaration can be called earlier than it is defind. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () {
    console.log('print')
}
print()
const printAgaine = print
printAgaine()

console.log(add(44,44))
// hoisting
function add(a, b){
    return a+b
}
const addAgain = add
console.log(addAgain(1,2))

// 2. callback function using function expression
function randomQuiz(answer,printYes,printNo){
    if (answer === 'love you'){
        printYes()
    }else{
        printNo()
    }
}
// anonymouse function
const printYes = function () {
console.log('yes!')
}

// named fuction
// better debugging in debugger`s stack traces
// recursions

const printNo = function print(){
    console.log('no!')
};
randomQuiz('worong', printYes,printNo)
randomQuiz('love you', printYes,printNo)

// arrow function
// always anonymous

const simplePrint = () => console.log('simplePrint!')

// block을 쓸 경우 return을 넣어줘야 함
const simpeMultiply = (a,b) => {
    // do something more
    return a + b
};

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE')
})()

// fun quiz...!
// funtion calculate(cammand, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b){
    if (command === 'add'){
        const add = a+b;
        console.log(add);
    }
    else if (command === 'substract'){
        const substract = a=b;
        console.log(substract);
    }
    else if (command === 'divide'){
        const divide = a/b;
        console.log(divide);
    }
    else if (command === 'remainder'){
        const remainder = a%b;
        console.log(remainder);
    } 
    else{
        console.log('plz check a value');
    }
}

calculate('add',1,2)
calculate('remainder',4,2)
calculate('error',1,2)