(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  /* Preloader Effect */
  window.addEventListener("load", () => {
    const preloader = $(".preloader");
    if (!preloader) return;
    preloader.style.transition = "opacity 600ms";
    preloader.style.opacity = "0";
    setTimeout(() => (preloader.style.display = "none"), 600);
  });

  /* Smooth scroll to top for any a[href="#top"] */
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href="#top"]');
    if (!link) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* Swiper sliders — initialize each only if its container exists on the page */
  const swiperConfigs = [
    {
      selector: ".social-app-slider",
      opts: {
        slidesPerView: 4,
        speed: 2000,
        spaceBetween: 40,
        loop: true,
        autoplay: { delay: 5000 },
        breakpoints: {
          768: { slidesPerView: 6 },
          991: { slidesPerView: 9 },
        },
      },
    },
    {
      selector: ".our-interface-slider",
      opts: {
        slidesPerView: 1,
        speed: 2000,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 5000 },
        pagination: { el: ".interface-pagination", clickable: true },
        breakpoints: {
          568: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1025: { slidesPerView: 4 },
        },
      },
    },
    {
      selector: ".testimonial-slider",
      opts: {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 5000 },
        pagination: { el: ".testimonial-pagination", clickable: true },
        navigation: { nextEl: ".testimonial-button-next", prevEl: ".testimonial-button-prev" },
      },
    },
    {
      selector: ".company-supports-slider",
      opts: {
        slidesPerView: 2,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 5000 },
        pagination: { el: ".testimonial-pagination", clickable: true },
        breakpoints: {
          768: { slidesPerView: 3 },
          991: { slidesPerView: 4 },
          1025: { slidesPerView: 5 },
        },
      },
    },
    {
      selector: ".testimonial-slider-elite",
      opts: {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 5000 },
        breakpoints: {
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        },
      },
    },
    {
      selector: ".testimonial-slider-royal",
      opts: {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 5000 },
        breakpoints: {
          768: { slidesPerView: 2 },
          991: { slidesPerView: 2 },
        },
      },
    },
  ];

  swiperConfigs.forEach(({ selector, opts }) => {
    if (!$(selector)) return;
    new Swiper(`${selector} .swiper`, opts);
  });

  /* Image Reveal Animation (GSAP) */
  if ($(".reveal")) {
    gsap.registerPlugin(ScrollTrigger);
    $$(".reveal").forEach((container) => {
      const image = container.querySelector("img");
      const tl = gsap.timeline({
        scrollTrigger: { trigger: container, toggleActions: "play none none none" },
      });
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1, { xPercent: -100, ease: Power2.out });
      tl.from(image, 1, { xPercent: 100, scale: 1, delay: -1, ease: Power2.out });
    });
  }

  /* Heading text animations (GSAP + SplitText) */
  function initHeadingAnimation() {
    if ($(".text-effect")) {
      gsap.registerPlugin(SplitText);
      $$(".text-effect").forEach((el) => {
        el.split = new SplitText(el, { type: "lines,words,chars", linesClass: "split-line" });
        gsap.set(el.split.chars, { opacity: 0.3, x: "-7" });
        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: { trigger: el, start: "top 92%", end: "top 60%", scrub: 1 },
          x: "0",
          y: "0",
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
        });
      });
    }

    if ($(".text-anime-style-1")) {
      $$(".text-anime-style-1").forEach((element) => {
        const split = new SplitText(element, { type: "chars, words" });
        gsap.from(split.words, {
          duration: 1,
          delay: 0.5,
          x: 20,
          autoAlpha: 0,
          stagger: 0.05,
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
    }

    if ($(".text-anime-style-2")) {
      $$(".text-anime-style-2").forEach((element) => {
        const split = new SplitText(element, { type: "chars, words" });
        gsap.from(split.chars, {
          duration: 1,
          delay: 0.1,
          x: 20,
          autoAlpha: 0,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
    }

    if ($(".text-anime-style-3")) {
      $$(".text-anime-style-3").forEach((element) => {
        if (element.animation) {
          element.animation.progress(1).kill();
          element.split.revert();
        }
        element.split = new SplitText(element, { type: "lines,words,chars", linesClass: "split-line" });
        gsap.set(element, { perspective: 400 });
        gsap.set(element.split.chars, { opacity: 0, x: "50" });
        element.animation = gsap.to(element.split.chars, {
          scrollTrigger: { trigger: element, start: "top 90%" },
          x: "0",
          y: "0",
          rotateX: "0",
          opacity: 1,
          duration: 1,
          ease: Back.easeOut,
          stagger: 0.02,
        });
      });
    }
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(initHeadingAnimation);
  } else {
    window.addEventListener("load", initHeadingAnimation);
  }

  /* WOW.js fade-ins */
  new WOW().init();
})();
