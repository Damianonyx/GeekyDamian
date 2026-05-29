/* 
  Damianonyx CV Portfolio Website Script
  Handles mobile navigation, theme switching, reveal animations, and footer year.
*/

// ================= CURRENT YEAR =================
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ================= MOBILE MENU =================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// ================= LIGHT / DARK MODE =================
const root = document.documentElement;
const lightModeBtn = document.getElementById("lightModeBtn");
const darkModeBtn = document.getElementById("darkModeBtn");

const savedTheme = localStorage.getItem("damianonyx-theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  updateThemeButtons(savedTheme);
}

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("damianonyx-theme", theme);
  updateThemeButtons(theme);
}

function updateThemeButtons(theme) {
  if (!lightModeBtn || !darkModeBtn) return;

  if (theme === "light") {
    lightModeBtn.classList.add("active");
    darkModeBtn.classList.remove("active");
  } else {
    darkModeBtn.classList.add("active");
    lightModeBtn.classList.remove("active");
  }
}

if (lightModeBtn) {
  lightModeBtn.addEventListener("click", () => setTheme("light"));
}

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => setTheme("dark"));
}

// ================= SCROLL REVEAL ANIMATION =================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
