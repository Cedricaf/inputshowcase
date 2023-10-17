const dancing = document.getElementById("js--Dancing");
const pixelify = document.getElementById("js--Pixelify");
const shadows = document.getElementById("js--Shadows");

const input = document.getElementById("js--input");

input.oninput = function (event) {
  dancing.innerText = event.target.value;
  pixelify.innerText = event.target.value;
  shadows.innerText = event.target.value;
};

const hearts = document.getElementsByClassName("showcase__heart");

for (let index = 0; index < hearts.length; index++) {
  hearts[index].onclick = function (event) {
    for (let index = 0; index < hearts.length; index++) {
      hearts[index].classList = "fa-regular fa-heart showcase__heart";
    }
    hearts[index].classList = "fa-solid fa-heart showcase__heart";
  };
}

labelInput.onclick = function () {
  header.style.backgroundColor = "gray";
  showcase.style.backgroundColor = "gray";
};

function changeBackgroundColor() {
  const header = document.getElementById("header");
  const showcase = document.getElementById("showcase");

  const labelInput = document.getElementById("toggle");


  if (labelInput.checked) {
    header.style.backgroundColor = "gray";
    showcase.style.backgroundColor = "gray";
  } else {
    header.style.backgroundColor = "colors.$background";
    showcase.style.backgroundColor = "colors.$background";
  }
  
}

