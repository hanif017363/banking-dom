const input = document.getElementById("area");
const bttn = document.getElementById("btn");

bttn.addEventListener("click", function () {
  const tags = document.createElement("p");
  const write = input.value;
  const Box = document.getElementById("box");
  tags.innerText = write;
  Box.appendChild(tags);
  input.value = "";
});

input.addEventListener("keyup", function () {
  const text = input.value;

  if (text === "delete") {
    bttn.removeAttribute("disabled");
  } else {
    bttn.setAttribute("disabled", true);
  }
});
input.addEventListener("focus", function () {
  document.body.style.backgroundColor = "red";
  Event.stopPropagation();
});
input.addEventListener("blur", function () {
  document.body.style.backgroundColor = "white";
});
