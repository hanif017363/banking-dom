document.getElementById("nigga").style.textAlign = "center";
function orange() {
  document.body.style.backgroundColor = "orange";
}
const purplebg = document.getElementById("purple_bg");

function purplecl() {
  document.body.style.backgroundColor = "purple";
}
purplebg.onclick = purplecl;
const greenBg = document.getElementById("green_bg");
greenBg.addEventListener("click", greenfun);
function greenfun() {
  document.body.style.backgroundColor = "green";
}
const blueBg = document.getElementById("blue_bg");
blueBg.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});
document.getElementById("pink_bg").addEventListener("click", function () {
  document.body.style.backgroundColor = "pink";
});
