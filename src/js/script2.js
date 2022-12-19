 function openSectionBlock() {
      const sectionButtons = document.querySelectorAll(".catalog-section__button");
      sectionButtons.forEach(el => {
        el.addEventListener("click", () => {
          let parentSectionButtons = el.closest(".catalog-section")
          let catalogSectionLayoutNone = parentSectionButtons.querySelector(".catalog-section__layout-none")
          catalogSectionLayoutNone.classList.toggle("catalog-section__layout")
        })
      });
    }
    
    openSectionBlock();