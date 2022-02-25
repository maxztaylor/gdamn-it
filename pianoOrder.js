const pianoSubmit = document.querySelector(".piano-order-button");
const orderConfirmation = document.querySelector(".orderConfirmation");
let pianoNum = 0;

function rangeSlider() {
  let slider = document.querySelectorAll(".piano-slider");
  let range = document.querySelectorAll(".piano-slider-range");
  let value = document.querySelectorAll(".piano-slider-value");

  slider.forEach((currentSlider) => {
    value.forEach((currentValue) => {
      let val = currentValue.previousElementSibling.getAttribute("value");
      currentValue.innerText = val;
    });

    range.forEach((elem) => {
      elem.addEventListener("input", (eventArgs) => {
        elem.nextElementSibling.innerText = eventArgs.target.value;
      });
    });
  });

}

function pianoOrder() {
  orderConfirmation.innerHTML = 'Your order has shipped! Tracking #<a href="https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1=RA222630131US" target="_blank">RA222630131US</a>';
}



rangeSlider();

pianoSubmit.addEventListener('click', pianoOrder);