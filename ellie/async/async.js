// part 13
// syntactic sugar : async, await 처럼 promise위에 덪 붙여서 가독성을 올려주는 api를 뜻함 prototype위에 덪 붙여진 api를 뜻함
// async & await
// clear style of using promise (promise, awiat을 써야하는 경우는 경험으로 알 수 있따 함)

// 1. async
async function fetchUser() {
  // do network request in 10 secs
  return "ellie";
}
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
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
