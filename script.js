let text = document.querySelector("textarea");
let limit = document.querySelector(".limit");
let totalChar = document.querySelector(".totalChar");
let remaining = document.querySelector(".remaining");
text.addEventListener("input", () => {
  if (remaining.innerText > 0) {
    totalChar.innerText = text.value.length;
    remaining.innerText = 50 - text.value.length;
  }
  if (totalChar.innerText == 50) limit.innerText = "Limit reached";
});
