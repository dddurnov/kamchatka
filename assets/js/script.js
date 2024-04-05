document.addEventListener("DOMContentLoaded", function () {
  createSlider("#slider1", "#prev1", "#next1", "#slider1 .slide", 211, 35);
  createSlider("#slider2", "#prev2", "#next2", "#slider2 .slide", 211, 35);
  createSliderLeft("#slider3", "#prev3", "#next3", "#slider3 .slide", 211, 35);
  createSliderLeft("#slider4", "#prev4", "#next4", "#slider4 .slide", 211, 35);
  createSlider("#slider5", "#prev5", "#next5", "#slider5 .slide", 211, 35);
  createSliderLeft("#slider6", "#prev6", "#next6", "#slider6 .slide", 211, 35);
  createSlider("#slider7", "#prev7", "#next7", "#slider7 .slide", 211, 35);
  createSliderLeft("#slider8", "#prev8", "#next8", "#slider8 .slide", 211, 35);
  createSlider(
    "#about-slider",
    "#about-prev",
    "#about-next",
    ".about-slide",
    352,
    96
  );
});

function createSlider(
  sliderSelector,
  prevButtonSelector,
  nextButtonSelector,
  slideSelector,
  slideWidth,
  slideGap
) {
  var currentIndex = 0;
  var slides = document.querySelectorAll(slideSelector);
  var slidesCount = slides.length;
  var slidesContainer = document.querySelector(sliderSelector);
  var prevButton = document.querySelector(prevButtonSelector);
  var nextButton = document.querySelector(nextButtonSelector);

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < slidesCount - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  function updateSlider() {
    var offset = -currentIndex * (slideWidth + slideGap);
    slidesContainer.style.transform = "translateX(" + offset + "px)";
    if (currentIndex === 0) {
      prevButton.classList.add("slider__buttons-inactive");
    } else {
      prevButton.classList.remove("slider__buttons-inactive");
    }

    if (currentIndex === slidesCount - 1) {
      nextButton.classList.add("slider__buttons-inactive");
    } else {
      nextButton.classList.remove("slider__buttons-inactive");
    }

    slides.forEach(function (slide) {
      slide.classList.remove("slide-active");
    });

    slides[currentIndex].classList.add("slide-active");
  }

  updateSlider();
}

function createSliderLeft(
  sliderSelector,
  prevButtonSelector,
  nextButtonSelector,
  slideSelector,
  slideWidth,
  slideGap
) {
  var currentIndex = 0;

  var x = document.querySelectorAll(slideSelector);
  var slides = [...x].reverse();

  var slidesCount = slides.length;
  var slidesContainer = document.querySelector(sliderSelector);
  var prevButton = document.querySelector(prevButtonSelector);
  var nextButton = document.querySelector(nextButtonSelector);

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < slidesCount - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  function updateSlider() {
    var offset = currentIndex * (slideWidth + slideGap);
    slidesContainer.style.transform = "translateX(" + offset + "px)";
    if (currentIndex === 0) {
      prevButton.classList.add("slider__buttons-inactive");
    } else {
      prevButton.classList.remove("slider__buttons-inactive");
    }

    if (currentIndex === slidesCount - 1) {
      nextButton.classList.add("slider__buttons-inactive");
    } else {
      nextButton.classList.remove("slider__buttons-inactive");
    }

    slides.forEach(function (slide) {
      slide.classList.remove("slide-active");
    });

    slides[currentIndex].classList.add("slide-active");
  }

  updateSlider();
}
