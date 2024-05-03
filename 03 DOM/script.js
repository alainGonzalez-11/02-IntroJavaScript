const userDB = "Alain";
const passwordDB = "1234";

const formulario = document.getElementById("form");

formulario.addEventListener("submit", login);

function login(evento) {
  evento.preventDefault();
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  validateCredentials(user, password);
}

function validateCredentials(user, password) {
  if (user == userDB && password == passwordDB) {
    console.log("Bienvenido " + user);
  } else if (user !== userDB && password == passwordDB) {
    errorMessage("user");
  } else if (user == userDB && password !== passwordDB) {
    errorMessage("password");
  } else {
    errorMessage("user");
    errorMessage("password");
  }
}

function errorMessage(error) {
  let message = document.getElementById(`${error}Error`);
  message.className = "error";

  // Remove the new class
  setTimeout(() => {
    message.className = "hide";
  }, 1000);
}
