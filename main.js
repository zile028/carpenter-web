// header slider
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  autoplay: true,
  navText: [
    '<i class="fas fa-chevron-circle-left"></i>',
    '<i class="fas fa-chevron-circle-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// -------------------------------------------------------

// show menu
let menuBtn = document.querySelectorAll(".menuBtn");
let menuList = document.getElementById("menuList");
let menuLink = menuList.querySelectorAll("a");

menuBtn.forEach((btn) => {
  btn.addEventListener("click", showMenu);
});
menuLink.forEach((link) => {
  link.addEventListener("click", showMenu);
});
function showMenu() {
  menuBtn.forEach((btn) => {
    btn.classList.toggle("active");
  });
  menuList.classList.toggle("active");
}
// ----------------------------------------------------------

// experiance counter
let counter = document.querySelectorAll(".experience h3");
let statistics = document.querySelector(".experience");
let limit = [];
let trigered = true;
let statisticsHeight = statistics.scrollHeight;

counter.forEach((el) => {
  limit.push(parseInt(el.innerText));
  el.innerText = 0;
});

window.onscroll = () => {
  if (trigered && statistics.offsetTop < window.scrollY + statisticsHeight) {
    trigered = false;
    startCount();
  }
};

function startCount() {
  let timer = setInterval(() => {
    counter.forEach((el, index) => {
      if (parseInt(el.innerText) < limit[index]) {
        el.innerText = parseInt(el.innerText) + 1;
      } else {
        limit[index] = 0;
      }
    });
    if (
      limit.every((el) => {
        return el == 0;
      })
    ) {
      clearInterval(timer);
    }
  }, 10);
}
