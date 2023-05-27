const bttn = document.getElementById("btn");
bttn.addEventListener("click", function () {
  const box = document.getElementById("comment_box");
  const text = box.value;
  const tags = document.createElement("p");
  tags.innerText = text;
  const comment = document.getElementById("comments");
  comment.appendChild(tags);
  box.value = "";
});
