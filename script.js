// const btn = document.getElementById("toggle");
// const body = document.body;

// btn.onclick = () => {
//   if (body.classList.contains("dark")) {
//     body.classList.replace("dark", "light");
//     btn.innerHTML = "☀️";
//   } else {
//     body.classList.replace("light", "dark");
//     btn.innerHTML = "🌙";
//   }
// };
gsap.registerPlugin(ScrollTrigger);

/* SECTION SLIDE UP */
gsap.utils.toArray("section").forEach((section, i) => {
  if (i === 0) return;

  gsap.from(section, {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    },
  });
});

/* BACKGROUND PARALLAX */
gsap.to(".hero", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to("#about", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".about",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
const words = [
  " AI tools ",
  " Software Development ",
  " Coding my Ideas ",
  " AI Solutions ",
  " and much more ",
];

let i = 0; // word index
let j = 0; // letter index
let isDeleting = false;

const typing = document.getElementById("typing");

function type() {
  let currentWord = words[i];

  if (isDeleting) {
    typing.textContent = currentWord.substring(0, j--);
  } else {
    typing.textContent = currentWord.substring(0, j++);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && j === currentWord.length) {
    speed = 1500; // wait before deleting
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

type();
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,   // 👈 3 slides ek saath
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
  
});
const swiperContainer = document.querySelector(".mySwiper");

swiperContainer.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

swiperContainer.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});
