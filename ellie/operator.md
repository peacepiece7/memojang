# part 4 operator

## 1. string concatenation

srting + string = string
int + string = string

```js
console.log(`1 + 2${1 + 2}`);
// 1 + 2 = 3
// /n, /t
```

## 2. numeric operators

+= add<br>
-= substract<br>
/= divide<br>
\*= multiply<br>
%= remainder<br>
\*\*= exponentiation<br>

## 3. increment and decrement operators

++, -- 로 표현

- preincrement

```js
const preIncrement = ++count;
console.log(preIncrement); // 3
```

- postincrement

```js
const postIncrement = count++;
console.log(preIncrement); // 2
```

## 4. assignment operator(할당)

```js
let x = 3;
let y = 6;

x += y; //x = x+yß
x -= y; //x = x-y
x *= y; //x = x*y
x /= y; //x = x/y
```

## 5. comparison operator

6 <= 6
6 >= 6
6 == 6
6 < 6
6 > 6

## 6. logical operators

|| = or
&& = and
! = not

```js
const value1 = false;
const value2 = 2 < 4; // false

console.log(` or: ${value1 || value2} || check()}`);
```

check는 true를 반환하는 함수<br>
or 연산자는 true가 나오면 바로 종료됨<br>
tip : expression function을 제일 뒤에 사용해야 순서대로 모두 체크할 수있음

`console.log(` or: ${value1 && value2} && check()}`);`

or 과 반대로 제일 처음 false가 나오면 종료되니까 주의<br>
tip:<br>

```js
const nullObject = () =>{
   if nullObject != null
     cullObject.something
}
```

이런식으로 데이터를 체크할 때 유용함,<br>

`console.log(!value1) // false => true`

## 7. equality operators

== loose equlity, with type conversion (타입에 신경쓰지 않고 문자열이 같으면 TURE)<br>
=== strict eqlity with no type conversion (타입도 같아야 true반환) 이거 사용을 지향해야 함<br>

## 8. conditional operator

```js
const name = "taetae";

if (name === "taetae") {
  console.log(`hellow${name}`);
} else if (name === "coder") {
  console.log("hellow coder!");
} else {
  console.log(unknown);
```

## 9. ternary operator

condition ? value1 : value2<br>

```js
console.log(name === "taetae" ? "yes" : "no");
```

## 10. switch operator

```js
const browser = "Chrom";

switch (browser) {
  case "IE":
    console.log("go away");
    break;
  case "Chrom":
  case "Firefox":
    console.log("i love you");
    break;
  default:
    console.log("same all");
}
```

## 11. Loops

while loop, while the condition is truthy,<br>
body code is executed.<br>

```js
let i = 3;

while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
```

- do while loops
- body code is excuted first, then check the condition.

```js
let j = 3;
do {
  console.log(`do while : ${j}`);
  j--;
} while (j > 0);
```

- for loop, for(begin; condition; step)

```js
for (i = 3; i > 0; i--) {
  console.log(`for loop: ${i}`);
}
```

- inline variable declaration (for 안에 지역 변수를 할당해서 사용하기도 함)

```js
for (let i = 4; i > 0; i--) {
  console.log(`InlineVarDeclar:${i}`);
}
```

- nested loops

```js
// O = n^2 으로 cpu 부담 크니까 가능하면 쓰지 말자
for (let i = 0; i < 10; i++)
  for (let j = 0; j < 10; j++) {
    //console.log(`nested loop frist val:${i} second val: ${j}`)
  }
```

- quiz

```js
// 01.iterate from 0 to 10 and print only even number

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

// 02. iterate frin 0 to 10 and print number untill reaching 8

for (let i = 0; i < 10; i++) {
  if (i !== 8) {
    console.log(i);
  } else {
    console.log(i);
    break;
  }
}
```

```

```
