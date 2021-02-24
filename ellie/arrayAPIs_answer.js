// part 9
"use strict";
// Q1. make a string out of an array
const foods = ["pizza", "potato", "hotdog", "pancafe"];
const result = foods.join(", and ");
console.log(result);

// 오브젝트를 mutation하는 아이인지?

// Q2. make an array out of a string
{
  const fruits = "🍕,🍟,🌭,🥞";
  const result = fruits.split(",");
  console.log(result);
}
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  // 기존 배열과 리턴값이 모두 바뀜
  console.log(`quiz 03: ${array}`);
  console.log(`quiz 03: ${result}`);
}
// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  // 기존 배열도 변형되지 않고 good!
  const newArray = array.slice(2, array.length);
  console.log(`quiz 04: ${array}`);
  console.log(`quiz 04: ${newArray}`);
  const result1 = array.splice(0, 2);

  // 이렇게 하면 기존 배열이 변형됨 (mutble api)
  console.log(`quiz 04 false: ${array}`);
  console.log(`quiz 04 fales: ${result1}`);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // callls , => 로 표시 되어 있으니까 callback 함수로 표현 해야 한다.
  // value is S = boolean 값으로 표현 함을 의미
  // Returns the value of the first element in the array where predicate is true, and undefined
  // 배열의 첫번째 요소를 reuturn 함,
  // 하나의 값만을 찾음
  // arrow function return is omitted
  /*
  const result = students.find(function(value, index){
      return value.score === 90
}) 
*/
  const result = students.find((value) => value.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
// arrow function return is omitted

{
  const result = students.filter((element) => element.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// argument는 최대한 이해하기 쉽게, 한눈에 보이게 작성하기
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// some: 하나만 조건이 맞을 경우 true, every: 모두 맞아야 할 경우 true
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => {
    console.log("------");
    console.log(prev);
    console.log(curr.score);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// api를 여러개 조합해서 쓸 수 있음!
{
  const result = students
    .map((student) => student.score)
    .filter((student) => student >= 45)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// and descent
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result);
}
