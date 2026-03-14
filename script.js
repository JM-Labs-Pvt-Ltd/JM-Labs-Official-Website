document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Scroll Reveal Engine with Staggered Delay
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a slight delay based on index for a staggered effect
        setTimeout(() => {
          entry.target.classList.add("active");
        }, index * 100);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Current Year Helper
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  // Lightbox Logic
  const lightbox = document.getElementById("screen-lightbox");
  if (lightbox) {
    const content = lightbox.querySelector(".lightbox-content");
    const closeBtn = lightbox.querySelector(".lightbox-close");
    const backdrop = lightbox.querySelector(".lightbox-backdrop");

    const openLightbox = (el) => {
      const media = el.querySelector("img, video").cloneNode(true);
      content.innerHTML = "";
      content.appendChild(media);
      if (media.tagName === "VIDEO") {
        media.play();
        media.controls = true;
      }
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
      lightbox.classList.remove("active");
      content.innerHTML = "";
      document.body.style.overflow = "";
    };

    document.querySelectorAll(".screen-mockup").forEach((card) => {
      card.addEventListener("click", () => openLightbox(card));
    });

    [closeBtn, backdrop].forEach((el) => {
      if (el) el.addEventListener("click", closeLightbox);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  // Auto-Slider Logic for Settlement
  document.querySelectorAll(".screen-slider").forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    let currentSlide = 0;

    if (slides.length > 0) {
      setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
      }, 1500); // 1.5 second delay as requested
    }
  });
});
