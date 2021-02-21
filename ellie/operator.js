'use strict'
// 8. conditional operator

const name = 'taetae';

if (name === 'taetae'){
    console.log(`hellow${name}`)
} else if (name === 'coder'){
    console.log('hellow coder!')
}else{
    console.log(unknown)
}

// 9. ternary operator
// condition ? value1 : value2
console.log(name === 'taetae' ? 'yes' : 'no')

// 10. switch operator

const browser = 'Chrom';

switch (browser){
    case 'IE':
        console.log('go away');
        break
    case 'Chrom':
    case 'Firefox':
        console.log('i love you');
        break
    default:
        console.log('same all')
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.

let i = 3;

while ( i > 0 ){
    console.log(`while: ${i}`)
    i--
}

// do while loops
// body code is excuted first, then check the condition.
let j = 3
do {
    console.log(`do while : ${j}`)
    j--
} while (j > 0)

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for loop: ${i}`)
}

// inline variable declaration (for 안에 지역 변수를 할당해서 사용하기도 함)
for(let i = 4; i > 0; i--){
    console.log(`InlineVarDeclar:${i}`)
}

// nested loops
// O = n^2 으로 cpu 부담 크니까 가능하면 쓰지 말자
for (let i = 0; i < 10; i++)
    for(let j = 0; j < 10; j++){
        //console.log(`nested loop frist val:${i} second val: ${j}`)
    }

// quiz 
// 01. iterate from 0 to 10 and print only even number 
for (let i = 0; i < 10; i++){
    if (i%2 === 0){
        console.log(i)
    }else{
        continue
    }
}

// 02. iterate frin 0 to 10 and print number untill reaching 8
for (let i = 0; i < 10; i++){
    if (i !== 8){
        console.log(i)
    }else{
        console.log(i)
        break
    }
}

