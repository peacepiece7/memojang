"use strict";
// JSON
// JavaScript Object Notation

// 1. Object to JSOM
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

const rabbit = {
  name: "torri",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`jump! ${rabbit.name}`);
  },
};
rabbit.jump();

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]);
console.log(json);

// 내가 이해 할 수 있는 것
json = JSON.stringify(rabbit, function jsonfy(key, value) {
  console.log(key);
  console.log("------------");
  console.log(value);
  if (key === "name") {
    return (value = "ellie");
  } else {
    return value;
  }
});
console.log(json);

// 엘리가 쓴 것
// 내 생각인데 (value = "ellie") 이 부분이 'ellie'인 이유는 api에 보면 => any 이고,
// (this : any, key:string, value: any)라서 any를 반환하니까 return 'ellie' 라고 적으면
// 조건이 맞을 경우 value : 'ellie' 라고 인식하는 듯 함

// 앞에 this : any는 함수 이름이다! object안에서 쓰는 this.function()뭐 이런거에 쓰는 this 아닐까..?!
// 아마도 !!!
json = JSON.stringify(rabbit, (key, value) => {
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2.JSON parse

console.clear();

json = JSON.stringify(rabbit);
let obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
// obj.jump();
// json(obj) => stringify => json(string) => parse => json(string)

obj = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
  // new Date("2020-08-04") = 현제 시간이 "2020-08-04"
  // new Date(value) = 현제 시간이 value로 받아오는 시간
});
console.log(obj);
