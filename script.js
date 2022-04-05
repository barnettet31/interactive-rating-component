const submitButton = document.querySelector("#submit");
const buttonContainer = document.querySelector(".button-container");
const getRating = document.querySelector(".get-rating");
const thankYou = document.querySelector(".thank-you");
(function createBindedVariable(propertyName, targetID) {
  let newValue = 0;
  Object.defineProperty(window, propertyName, {
    set: function (value) {
      newValue = value;
      let targetRef = document.getElementById(targetID);
      targetRef.innerText = value;
    },
    get: function () {
      return newValue;
    },
  });
})("rating", "rating-selected");
buttonContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("rating-button"))
    return (window.rating = e.target.value);
});
submitButton.addEventListener("click", () => {
  if (window.rating) return toggleDisplay();
});

function toggleDisplay() {
  getRating.classList.toggle("get-rating--hidden");
  thankYou.classList.toggle("thank-you--shown");
  //this is where I would handle my submission of this review if I had one
}
