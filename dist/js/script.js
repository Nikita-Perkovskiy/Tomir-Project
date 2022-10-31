function asctionSlidr1() {
  $(document).ready(function () {
    $(".arendation-block-slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    });
  });
}

function asctionSlidr2() {
  $(document).ready(function () {
    $(".catalog-open-card__slider-wrapper").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
})
  });
  
}

asctionSlidr2()


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

function openForm(){
  let buttonOpenForm = document.querySelectorAll(".button-open-form");
  const formFon = document.getElementById("form");
  buttonOpenForm.forEach(el =>{
    el.addEventListener("click", ()=>{
      formFon.classList.toggle("form--active")
      console.log(el);
    })
  })
}

function closeform(){
  let buttonCloseForm =  document.getElementById("button-close-form");
  const formFon = document.getElementById("form");
    buttonCloseForm.addEventListener("click", ()=>{
      formFon.classList.toggle("form__fon")
      console.log(el);
    })
  
}

function activeMenu(){
  const headerProperties=  document.getElementById("properties-list");
  const headerNavMenu = document.getElementById("main-nav-menu");

  headerProperties.addEventListener("click", ()=>{
      headerNavMenu.classList.toggle("header-nav__menu--active")
    })
}

activeMenu();
closeform();
openForm();
activateQuestions();
asctionSlidr1();