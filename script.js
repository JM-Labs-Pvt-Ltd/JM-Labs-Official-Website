document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) {
          return;
        }

        setTimeout(() => {
          entry.target.classList.add("active");
        }, index * 80);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const lightbox = document.getElementById("screen-lightbox");
  const content = lightbox?.querySelector(".lightbox-content");

  const closeLightbox = () => {
    if (!lightbox || !content) {
      return;
    }

    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    content.innerHTML = "";
    document.body.style.overflow = "";
  };

  if (lightbox && content) {
    const openLightbox = (card) => {
      const media = card.querySelector("img, video");

      if (!media) {
        return;
      }

      const clone = media.cloneNode(true);
      content.innerHTML = "";
      content.appendChild(clone);

      if (clone.tagName === "VIDEO") {
        clone.controls = true;
        clone.play();
      }

      lightbox.classList.add("active");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    document.querySelectorAll(".screen-mockup").forEach((card) => {
      card.addEventListener("click", () => openLightbox(card));
    });

    lightbox.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
    lightbox.querySelector(".lightbox-backdrop")?.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    });
  }

  document.querySelectorAll(".screen-slider").forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    let currentSlide = 0;

    if (!slides.length) {
      return;
    }

    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 1800);
  });
});
