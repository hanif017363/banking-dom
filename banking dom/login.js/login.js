document.getElementById("btn").addEventListener("click", function () {
  // admine
  const userName = "123";
  const passUser = "456";
  // email
  const loginEmail = document.getElementById("email");
  const emailValue = loginEmail.value;

  // password
  const loginPassword = document.getElementById("pass");
  const passValue = loginPassword.value;
  if (emailValue === userName && passValue === passUser) {
    window.location.href = "login2.html";
  } else {
    alert("not");
  }
});
document.getElementById("go").addEventListener("click", function () {
  window.location.href = "index.html";
});
document.getElementById("btn2").addEventListener("click", function () {
  console.log("pressed");
});
