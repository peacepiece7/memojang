"use strict";

// Javascript is synchronous.
// excute the code block by in order after hoisting
// 호이스딩에 맞춰서 순서대로 실행이 될 때 synchronous하다 라고 함

// hoisting : var function declaration
// what is the function declaration?
function async() {
  console.log(blahblah);
}
// other case of function, function expression
let textAsync = function () {
  console.log(blahlbah);
};

// callback = '내가 전덜한 함수를 니가 실행해줘'(APIs: find,filter,silce,toString,join,,,)

// Synchronouse callback
function printImmediately(print) {
  print();
}

// Aynchronouse callback
function printDelay(print, timeout) {
  setTimeout(print, timeout);
}

// how to asyncronose running do
console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000);
console.log("3");

printImmediately(() => console.log("hellow sync"));
printDelay(() => console.log("hellow async"), 2000);

// Callback Hell example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      console.log(user);
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
        //console.log(onSuccess);
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();

const getUserData = (id, password) => {
  userStorage.loginUser(
    id,
    password,
    (onSuccess) => {
      userStorage.getRoles(
        onSuccess,
        (getRoles) => {
          alert(`hellow ${getRoles.name}, you have a ${getRoles.role}`);
        },
        (error) => console.log(error)
      );
    },
    (error) => {
      console.log(error);
    }
  );
};
getUserData("ellies", "dream");
// (onSuccess) => {}가 아래 function과 같음!
const lalala = function (happy) {
  console.log(happy);
};
lalala("helelelelel");

class A {
  constructor() {
    console.log("hhhhhh");
  }
}
// error class가원래 이래 생김, 문자열 받아서 콘솔로 찍어내기 좋게 만들어놨네
console.log(new Error("not foundsssss"));

// new Error([message[, fileName[, lineNumber]]]) Error class가 이미 있었구나;;;;;

// i(new Hellow('hellow there!'));

// 잘못된 callback chain ( 이것도 혼자 못 적을 거 같은데.. ㅜㅜ )

// playground
/*
class Error {
  constructor(message) {
    console.log(message);
  }
}
let getError = new Error("found error!");

const getErrorFuction = () => getError;

// 같은 class를 함수로 동시에 실행시킬 수 없구나..?
getErrorFuction();
setTimeout(() => new Error("no access"), 3000);

// Empty function => class declaration
(function test(testCode) {
  setTimeout(() => {
    if (testCode === undefined || tsetcode === null) {
      new Error("not found");
    } else {
      console.log("fail");
    }
  }, 5000);
})();
(function () {})();
*/
