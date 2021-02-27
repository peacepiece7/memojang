# part 13 async

## syntactic sugar

기존에 존제하는 것 위에 감싸서 좀더 편하게 해주는 기능을 제공하는 api를 말함!<br>
ex) class 이것도 원래 있던거를 보기 좋게 만든거니까 syntacitc sugar임

## promise 작성법

> async & await 들어가기 앞서 promise로 비동기가 필요한 간단한 코드를 작성해보자

이렇게 하면 사용자는 10초정도 텅텅빈 웹사이트만 봐야함

```js
function fetchUser() {
  // do network request in 10 secs..
  return "ellie";
}
const user = fatchUser();
console.log(user);
```

- promise는 object를 가지고 있으면 then으로 니가 가진 데이터를 불러줄게 = promise

return 값에 resolve를 넣지 않으면, promise가 계속 준비중으로 나타나게 된다.

```js
function fetchUser(){
    retrun new Promise((resolve,reject)=>{
        // do network request in 10 secs...
        return 'ellie'
    })
}
const user = fetchUser()
consoe.log(user)
// promisestate ;"pending"
// promiseResule ; undefined

```

이렇게 resolve로 해줘야 비동기 실행이 완료 됨

```js
function fetchUser(){
    retrun new Promise((resolve,reject)=>{
        // do network request in 10 secs...
        resolve('ellie')
    })
}
const user = fetchUser()
consoe.log(user)
// promiseState ; "fullfilled"
// promiseResule ; "ellie"
```

## async & await

- **async**
  promise를 좀더 간편하게 사용하기 위해 async를 사용해서 같은 문장을 표현해 보자<br>
  promiseState,Result를 보면 async를 사용해도 완전히 같은 가능을 함을 알 수 있음

```js
async function fetchUser(){
        // do network request in 10 secs...
        return 'ellie'
    })
}
const user = fetchUser()
consoe.log(user)
// promiseState ; "fullfilled"
// promiseResule ; "ellie"
```

- **await**✨

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple() {
  await delay(1000);
  return "🍎";
}
async function getBanana() {
  await delay(1000);
  return "🍊";
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
pickFruits().then(console.log);
// 이렇게 작성해도 되지만 PuckFruits부분이 callback hell에 빠지게 되니까
// awit을 이용해 좀더 이쁘게 작성하면
```

await을 이용해서 callback hell 탈출하기

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple() {
  await delay(1000);
  return "🍎";
}
async function getBanana() {
  await delay(1000);
  return "🍊";
}

function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana()
    return `${apple}+${banana}`
}
pickFruits().then(console.log);
```

이렇게 간단하게 작성할 수 있음!

- 에러가 발생한다면 try, catch로 간단하게 해결할 수 있다.

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple() {
  await delay(1000);
  throw 'error' // 여기에 에러가 발생했다고 가정
  return "🍎";
}
async function getBanana() {
  await delay(1000);
  return "🍊";
}

function pickFruits() {
    try{
    const apple = await getApple();
    const banana = await getBanana()
    return `${apple}+${banana}`
    }catch(error){
        console.log(error)
    }
}
pickFruits().then(console.log);
```

## await 병렬 처리하기

위의 코드를 보면 getApple과 getBanana가 <br>
순서대로 1초 씩 총 2초가 걸리기 떄문에 아주 비효율 적이다<br>
그래서 병렬로 처리해 주자

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple() {
  await delay(1000);
  throw 'error' // 여기에 에러가 발생했다고 가정
  return "🍎";
}
async function getBanana() {
  await delay(1000);
  return "🍊";
}

function pickFruits() {
    const applePromis = getApple();
    const bananaPromis = getBanana();
    const apple = await applePromis;
    const banana = await bananaPromis;
    return `${apple}+${banana}`;
}
pickFruits().then(console.log);
```

## useful APIS Promise.all, Prommise.race

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getApple() {
  await delay(1000);
  throw 'error' // 여기에 에러가 발생했다고 가정
  return "🍎";
}
async function getBanana() {
  await delay(1000);
  return "🍊";
}

function pickFruits() {
    const applePromis = getApple();
    const bananaPromis = getBanana();
    const apple = await applePromis;
    const banana = await bananaPromis;
    return `${apple}+${banana}`;
}
pickFruits().then(console.log);

// 선택한 함수를 동시에 실행 시킬 수 있는 API
fuction pickAllFruits(){
    return Promis.all([getApple(),getBanana()]).then(fruits =>
    fruits.join(' + ')
}
pickAllFruits().then(console.log)
// 선택한 함수중 가장 빠르게 실행된 함수 하나만 반환하는 API
function pickOnlyOne(){
    return Primis.race([getApple(),getBanana()]);
}

pickOnlyOne().then((print) => console.log(print)) // print 생략가능 (까먹을까봐 위랑 비교하라고 적어 둠)
```
