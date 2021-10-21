$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
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

let menuBtn = document.querySelectorAll(".menuBtn");
let menuList = document.getElementById("menuList");
let counter = document.querySelectorAll(".counter > h4");
let statistics = document.querySelector(".statistics");
let limit = [];
let trigered = true;
let statisticsHeight = statistics.scrollHeight;

// show menu
menuBtn.forEach((btn) => {
  btn.addEventListener("click", showMenu);
});

function showMenu() {
  menuList.classList.toggle("showMenu");
}

// statistic counter
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
