// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Filters Script
let taxSwitch = document.getElementById("switchCheckDefault");
  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (info of taxInfo) {
      if(info.style.display != "inline") {
        info.style.display = "inline";
      } else {
        info.style.display = "none";
      }
    }
  });

  const filters = document.getElementById("filters");
  const leftBtn = document.querySelector(".left");
  const rightBtn = document.querySelector(".right");

  function slideRight() {
    filters.scrollBy({
      left: 250,
      behavior: "smooth"
    });
  }

  function slideLeft() {
    filters.scrollBy({
      left: -250,
      behavior: "smooth"
    });
  }

  function updateButtons() {
    leftBtn.style.visibility = filters.scrollLeft > 1 ? "visible" : "hidden";
    const maxScroll = filters.scrollWidth - filters.clientWidth;
    rightBtn.style.visibility = filters.scrollLeft >= maxScroll - 2 ? "hidden" : "visible";
  }

  filters.addEventListener("scroll", updateButtons);
  window.addEventListener("resize", updateButtons);
  window.addEventListener("load", updateButtons);