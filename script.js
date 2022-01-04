const colors = ["green","red","fgba(133,122,200","#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
   const randomNumber = getRandomNumber();
   console.log(randomNumber);

   document.body.style.backgroundColor = colors[randomNumber];
   color.textCotent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}