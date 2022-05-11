var backdrop = document.querySelector(".backdrop");
// debugger;
// console.log(backdrop);
var modal = document.querySelector(".modal");
// var modalNoButton = document.querySelectorAll(".modal_action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
// console.dir(selectPlanButtons);

var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

// console.dir(backdrop.style["background-image"]);

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = "open"; //This will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.style.display = "block";
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

// if (modalNoButton) {
  // modalNoButton.addEventListener("click", closeModal);
// }

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");

  setTimeout(function () {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener("click", function () {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});

ctaButton.addEventListener("animationstart", function (event) {
  console.log("animation start", event);
  
});

ctaButton.addEventListener("animationstart", function (event) {
  console.log("animation start", event);
});
