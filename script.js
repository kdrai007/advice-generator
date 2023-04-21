//api->https://api.adviceslip.com/advice
const diceBtn = document.querySelector(".dice");
const adviceId = document.querySelector(".advice_id span");
const adviceDetail = document.querySelector(".advice span");
console.log(adviceId.textContent);
console.log(adviceDetail.textContent);
function fetchApi() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.slip.id);
      adviceId.textContent = "" + data.slip.id;
      adviceDetail.textContent = data.slip.advice;
    });
}
fetchApi();
diceBtn.addEventListener("click", fetchApi);
