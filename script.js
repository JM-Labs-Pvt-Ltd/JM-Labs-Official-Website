document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const themeLabel = themeToggle?.querySelector(".theme-toggle-label");
  const brandIcons = document.querySelectorAll(".brand-icon");
  const favicon = document.querySelector("link[rel='icon']");
  const themeAssets = {
    dark: {
      icon: "./jm-labs-icon-final.svg",
      label: "Light",
      ariaLabel: "Switch to light mode",
      pressed: "false",
    },
    light: {
      icon: "./jm-labs-icon-final-light.svg",
      label: "Dark",
      ariaLabel: "Switch to dark mode",
      pressed: "true",
    },
  };

  const applyTheme = (theme, persist = false) => {
    const nextTheme = theme === "light" ? "light" : "dark";
    const assets = themeAssets[nextTheme];

    root.dataset.theme = nextTheme;

    if (persist) {
      try {
        localStorage.setItem("jmlabs-theme", nextTheme);
      } catch {
        // Ignore storage failures in restricted contexts.
      }
    }

    if (themeToggle && themeLabel) {
      themeLabel.textContent = assets.label;
      themeToggle.setAttribute("aria-label", assets.ariaLabel);
      themeToggle.setAttribute("aria-pressed", assets.pressed);
    }

    brandIcons.forEach((icon) => {
      icon.setAttribute("src", assets.icon);
    });

    if (favicon) {
      favicon.setAttribute("href", assets.icon);
    }
  };

  const initialTheme = root.dataset.theme || "dark";
  applyTheme(initialTheme);

  themeToggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme, true);
  });

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
