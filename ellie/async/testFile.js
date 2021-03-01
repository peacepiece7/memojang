import UserStorage from "./callback-to-promise";

const userStorage = new UserStorage();

const getUserData = (id, password) => {
  userStorage
    .loginUser(id, password)
    .then((id) => userStorage.getRoles(id))
    .then((info) => console.log(`hi ${info.name} you have a ${info.role} role`))
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
