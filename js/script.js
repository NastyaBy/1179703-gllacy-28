var popupFeedback = document.querySelector(".modal-info");
var popupFeedbackBtn = document.querySelectorAll(".map-info-button");
var popupFeedbackCloseBtn = document.querySelectorAll(
  ".modal-info-close-button"
);
var slider = document.querySelectorAll(".slider-list-item");
var sliderBtn = document.querySelectorAll(".slider-navigation-button");

// popup
popupFeedbackBtn[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  togglePopupFeedback();
});

popupFeedbackCloseBtn[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  togglePopupFeedback();
});

function togglePopupFeedback() {
  popupFeedback.classList.toggle("js-show");
}

// slider
slider[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  toggleSlider();
});

sliderBtn[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  toggleSliderBtn();
});

function toggleSlider() {
  slider.classList.add("js-slide-current");
}

function toggleSliderBtn() {
  sliderBtn.classList.add("js-current");
}
