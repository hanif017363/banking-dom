const Box = document.getElementById("box");
Box.addEventListener("focus", function () {
  document.body.style.backgroundColor = "red";
});
Box.addEventListener("blur", function () {
  document.body.style.backgroundColor = "white";
});
Box.addEventListener("keyup", function () {
  const btn2 = document.getElementById("btn");
  const text = Box.value;
  if (text === "delete") {
    btn2.removeAttribute("disabled");
  } else {
    btn2.setAttribute("disabled", true);
  }
});
