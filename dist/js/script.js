$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
});

window.addEventListener("load", setAnimationHeader, onEntry);

function setAnimationHeader() {
  let i = 0;
  function animationHeader() {
    const headerBlockImages = [
      "../img/header-slider-fon.png",
      "../img/header-slider-fon.png",
      "../img/header-slider-fon.png",
      "../img/header-slider-fon.png",
    ];
    const slogoBlock = document.querySelector(".header-slogo__background");
    slogoBlock.style.backgroundImage = `url(${headerBlockImages[i]})`;
    i += 1;
    if (i == headerBlockImages.length) {
      i = 0;
    }
    console.log(i);
  }
  setInterval(animationHeader, 2000);
}

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("base-information__block--show");
    }
  });
}
let observer = new IntersectionObserver(onEntry);
let elements = document.querySelectorAll(".rr");
for (let elm of elements) {
  observer.observe(elm);
}
