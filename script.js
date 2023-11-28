// const container = document.querySelector(".main-slider-container");
// const nextButton = document.querySelector(".right-arrow");
// const prewButton = document.querySelector(".left-arrow");

// function nextSlide() {
//   if (container.classList.contains("slide-1")) {
//     container.classList.add("slide-2");
//     container.classList.remove("slide-1");
//   }
//   if (container.classList.contains("slide-2")) {
//     container.classList.add("slide-3");
//     container.classList.remove("slide-2");
//   }
//   if (container.classList.contains("slide-3")) {
//     container.classList.add("slide-1");
//     container.classList.remove("slide-3");
//   }
// }
// function prewSlide() {
//   if (container.classList.contains("slide-1")) {
//     container.classList.remove("slide-1");
//     container.classList.add("slide-3");
//   }
//   if (container.classList.contains("slide-2")) {
//     container.classList.remove("slide-2");
//     container.classList.add("slide-1");
//   }
//   if (container.classList.contains("slide-3")) {
//     container.classList.remove("slide-3");
//     container.classList.add("slide-2");
//   }
// }

// nextButton.addEventListener("click", function () {
//   nextSlide();
// });
// prewButton.addEventListener("click", function () {
//   prewSlide();
// });

const container = document.querySelector(".main-slider-container");
const nextButton = document.querySelector(".right-arrow");
const prewButton = document.querySelector(".left-arrow");

let currentSlide = 1; // Початковий стан слайду

function showSlide(slideNumber) {
  // Видаляємо всі класи слайдів
  container.classList.remove("slide-1", "slide-2", "slide-3");
  // Додаємо клас відповідно до номера слайда
  container.classList.add(`slide-${slideNumber}`);
}

function nextSlide() {
  currentSlide = (currentSlide % 3) + 1; // Обчислюємо номер наступного слайда
  showSlide(currentSlide);
}

function prewSlide() {
  currentSlide = ((currentSlide - 2 + 3) % 3) + 1; // Обчислюємо номер попереднього слайда
  showSlide(currentSlide);
}

nextButton.addEventListener("click", nextSlide);
prewButton.addEventListener("click", prewSlide);
