var button=document.querySelector(".hide-button");
var popup=document.querySelector(".search");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Открыть форму поиска гостиницы");
  popup.classList.toggle("show");
});
