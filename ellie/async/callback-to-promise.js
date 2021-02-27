// part 12

class UserStorage {
  loginUser = (id, password) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("not found"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();

const getUserData = (id, password) => {
  userStorage
    .loginUser(id, password)
    .then((id) => userStorage.getRoles(id))
    .then((info) => console.log(info))
    .catch((error) => console.log(error));
};

/*
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
*/
getUserData("ellie", "dream");
