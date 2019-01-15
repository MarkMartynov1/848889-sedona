var btn = document.querySelector(".hide-button");
var blockHidden = document.querySelector(".search");

function(evt) {evt.preventDefault(); function showBlock()

  blockHidden.classList.add('b-show');

}
btn.addEventListener('click', showBlock);
