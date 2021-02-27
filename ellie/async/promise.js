"use strict";

// part 12

// Promise is a jajvascript object for asynchoronuse operation.
// state: pending -> fulfilled or rejected
// Producer vs consumer

// 1. producer
// when new Promis is created, the executor runs automatically
const promise = new Promise((reslove, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing simething...");
  setTimeout(() => {
    reslove("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then(성공했을 때), catch(실패하면), finally(성공하든 실패하든 무조건)
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promis chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => {
    console.log(num);
  });

// 4. Error Handling

// 5. Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🐔");
    }, 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${hen} => 🥚`);
    }, 1000);
  });

const getFry = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg} => 🍳`);
    });
  });

getHen() //한가지만 그대로 받아서 전달하는 경우 생략 가능! '//' 붙여야 prettier생략됨
  .then(getEgg)
  .then(getFry)
  .then(console.log);
