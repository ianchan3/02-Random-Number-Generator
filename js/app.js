const number = document.querySelector(".number");
const btn = document.querySelector(".reset");

btn.addEventListener("click" , () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  number.innerHTML = randomNumber;  
});