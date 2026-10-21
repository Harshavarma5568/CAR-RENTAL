window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const pageShell = document.getElementById("pageShell");

  setTimeout(() => {
    loader.classList.add("hidden");
    pageShell.classList.add("loaded");
  }, 700);
});

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el) => revealObserver.observe(el));

const counters = document.querySelectorAll("[data-target]");
const animateCounter = (el) => {
  const target = Number(el.dataset.target);
  let current = 0;
  const step = target / 90;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    if (target >= 1000) {
      el.textContent = `${Math.round(current / 1000)}k+`;
    } else if (target >= 40 && target < 60) {
      el.textContent = `${(current / 10).toFixed(1)}`;
    } else if (target === 24) {
      el.textContent = `${Math.round(current)}/7`;
    } else {
      el.textContent = `${Math.round(current)}`;
    }
  }, 16);
};

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach((counter) => counterObserver.observe(counter));

document.getElementById("reserve")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your booking request has been submitted successfully!");
});

const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

mobileToggle?.addEventListener("click", () => {
  const isOpen = navLinks.style.display === "flex";
  navLinks.style.display = isOpen ? "none" : "flex";
  navLinks.style.position = "absolute";
  navLinks.style.top = "82px";
  navLinks.style.left = "20px";
  navLinks.style.right = "20px";
  navLinks.style.flexDirection = "column";
  navLinks.style.alignItems = "flex-start";
  navLinks.style.gap = "14px";
  navLinks.style.padding = "18px 20px";
  navLinks.style.background = "rgba(9,13,19,0.96)";
  navLinks.style.border = "1px solid rgba(255,255,255,0.08)";
  navLinks.style.borderRadius = "18px";
  navLinks.style.zIndex = "50";
});
