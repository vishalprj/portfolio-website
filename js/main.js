const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    closeModal();
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    openModal();
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

//open close modal;
function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  header.classList.remove("open");
}
function openModal() {
  modal.style.display = "block";
  overlay.style.display = "block";
  header.classList.add("open");
}

window.addEventListener("click", outsideClick);

const modal = document.querySelector(".modal");
function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}

//Adding header-scroll to the navbar

const headerScroll = document.querySelector(".header-scroll");

window.addEventListener("scroll", addClass);

// let scrollPosition = window.scrollY;
function addClass(e) {
  let scrollPosition = window.scrollY;

  if (scrollPosition >= 60) {
    header.classList.add("header-scroll");
  } else {
    header.classList.remove("header-scroll");
  }
}
