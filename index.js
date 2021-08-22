let toggle = document.querySelector(".toggle-container");
let navbarItems = document.querySelector(".navbar_items");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navbarItems.classList.toggle("active");
});

var navBar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navBarHeight = navBar.getBoundingClientRect().height;

  if (scrollHeight > navBarHeight) {
    navBar.classList.add("nav-fixed");
  } else {
    navBar.classList.remove("nav-fixed");
  }
});

// scroll btn

const scrollImg = document.getElementsByClassName("scroll_img");
const scrollBtn = document.getElementsByClassName("scroll_btn");

let l = 0;
scrollBtn[1].onclick = () => {
  l++;
  for (let i of scrollImg) {
    if (l == 0) {
      i.style.left = "0rem";
    }
    if (l == 1) {
      i.style.left = "-22rem";
    }
    if (l == 2) {
      i.style.left = "-38rem";
    }
    if (l > 2) {
      scrollImg[0].style.left = "0";
      l = 0;
    }
  }
};

scrollBtn[0].onclick = () => {
  l--;
  for (let i of scrollImg) {
    if (l == 0) {
      i.style.left = "0px";
    }
    if (l == 1) {
      i.style.left = "-22rem";
    }
    if (l == 2) {
      i.style.left = "-38rem";
    }
    if (l < 0) {
      l = 0;
    }
  }
};

let displayImg = document.getElementById("dispImg");
function imgUrl(arg) {
  displayImg.src = arg;
}

// ***************** scroll to top *****************

const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 100) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
