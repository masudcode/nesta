const mobileOpenBtn = document.querySelector(".ph-list");
const mobileCloseBtn = document.querySelector(".ph-x");
const mobileNavList = document.querySelector(".for-mobile");

mobileCloseBtn.addEventListener("click", () => {
  mobileNavList.classList.toggle("open-nav");
  console.log(mobileNavList);
});

mobileOpenBtn.addEventListener("click", () => {
  mobileNavList.classList.toggle("open-nav");
  console.log(mobileNavList);
});

/////////////////////////////////////////

const HeroSectionEle = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.querySelector(".nav-background").classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.querySelector(".nav-background").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  },
);

obs.observe(HeroSectionEle);
