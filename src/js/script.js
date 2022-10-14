function asctionSlidr1() {
  $(document).ready(function () {
    $(".arendation-block-slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    });
  });
}

asctionSlidr1();

function setAnimationHeader() {
  let i = 0;
  function animationHeader() {
    const headerBlockImages = [
      "../img/header-slider-fon-1.png",
      "../img/header-slider-fon-2.png",
      "../img/header-slider-fon-3.png",
    ];
    const slogoBlock = document.querySelector(".header-slogo__background");
    slogoBlock.style.backgroundImage = `url(${headerBlockImages[i]})`;
    i += 1;
    if (i == headerBlockImages.length) {
      i = 0;
    }
  }
  setInterval(animationHeader, 2000);
}

window.addEventListener("load", setAnimationHeader, onEntry);

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("base-information__block--show");
    }
  });
}
let observer = new IntersectionObserver(onEntry);
let elements = document.querySelectorAll(".base-information__block-a--action");
for (let elm of elements) {
  observer.observe(elm);
}

function activateQuestions(){
let questionArrow = document.querySelectorAll(".question-block__content-arrow");
questionArrow.forEach(el =>{
    el.addEventListener("click", ()=>{
      el.classList.toggle("question-block__content-arrow--active")
      let parentBlockElement = el.closest(".question-block__content-element")
      let elementContent = parentBlockElement.querySelector(".question-block__answer-wrapper")
       elementContent.classList.toggle("question-block__answer-wrapper--active")
    })
  })
}

activateQuestions();