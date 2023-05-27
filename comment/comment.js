const button = document.getElementById("button_10");
button.addEventListener("click", function () {
  const inputBox = document.getElementById("input_box");
  const commentValue = inputBox.value;
  const mainSection = document.getElementById("all_Comments");

  const trueMan = document.createElement("p");

  trueMan.innerText = commentValue;
  mainSection.appendChild(trueMan);
  inputBox.value = "";
});
