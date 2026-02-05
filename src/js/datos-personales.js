let user = JSON.parse(localStorage.getItem("data"));

const userName = document.getElementById("name");
const userLastName = document.getElementById("lastName");
const userEmail = document.getElementById("email");
const userDni = document.getElementById("identidad");
const userData = document.getElementById("dateNatal");

userLastName.value = user.lastName;
userName.value = user.name;
userEmail.value = user.email;
userDni.value = user.dni;
userData.value = user.birthdate;
