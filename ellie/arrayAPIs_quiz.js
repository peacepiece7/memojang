// part 9
// Q1. make a string out of an array
{
  const foods = ["pizza", "potato", "hotdog", "pancafe"];
  console.log(foods.toString());
}
// Q2. make an array out of a string
{
  const fruits = "🍕,🍟,🌭,🥞";
  const frutsList = new Array(fruits);
  console.log(frutsList);
}
// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const newArray = array.slice(2, array.length);
  console.log(newArray);
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
  for (let i = 0; i < students.length; i++) {
    if (students[i].score === 90) {
      console.log(students[i].name);
    }
  }
}

// Q6. make an array of enrolled students
{
  const enrolledStudents = [];
  students.forEach((value) => {
    if (value.enrolled === true) {
      enrolledStudents.push(value);
    }
  });
  console.log(enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const scoreList = [];
  for (i = 0; i < students.length; i++) {
    scoreList.push(students[i].score);
  }
  console.log(scoreList);
}

// Q8. check if there is a student with the score lower than 50
{
  for (i = 0; i < students.length; i++) {
    if (students[i].score < 50) {
      console.log(students[i]);
    }
  }
}

// Q9. compute students' average score
{
  let studentsAverage = 0;
  students.forEach((element) => {
    studentsAverage += element.score;
  });
  studentsAverage /= students.length;
  console.log(studentsAverage);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  let studentScore = new Array();
  students.forEach((element) => {
    studentScore.push(element.score);
  });
  const strStudentScroe = studentScore.join();
  console.log(typeof strStudentScroe, strStudentScroe);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  {
    let studentScore = new Array();
    students.forEach((element) => {
      studentScore.push(element.score);
    });
    const strStudentScroe = studentScore.sort();
    console.log(typeof strStudentScroe, strStudentScroe);
  }
}
