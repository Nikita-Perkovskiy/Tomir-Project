function asctionSlidr1() {
  $(document).ready(function () {
    $(".arendation-block-slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    });
  });
}


function setAnimationHeader() {
  const headerItems = Array.from(document.querySelectorAll(".header-slogo__background-item"));
 
let i = 0;
function animationHeader() {
headerItems[i].style.display = "block";
headerItems.map((el, index) => index === i ? el.style.display = "block" : el.style.display = "none" )
i += 1;
    if (i === headerItems.length) {
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

function activeMenu(){
  const headerProperties=  document.getElementById("properties-list");
  const headerNavMenu = document.getElementById("main-nav-menu");

  headerProperties.addEventListener("click", ()=>{
      headerNavMenu.classList.toggle("header-nav__menu--active")
    })
}

function activeBurger(){
const menu = document.querySelector('.hamburger'); 
const headerNavMenu = document.getElementById("main-nav-menu");

menu.addEventListener('click', () => { 
	menu.classList.toggle('hamburger--active'), 
  headerNavMenu.classList.toggle("header-nav__menu--active");
});
}

activeMenu();
activateQuestions();
asctionSlidr1();
activeBurger();