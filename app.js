document.addEventListener("DOMContentLoaded", () => {
  const inner = document.querySelector(".page-inner");
  if (inner) requestAnimationFrame(() => inner.classList.add("show"));

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });

  const pdfBtn = document.querySelector("[data-pdf]");
  if (pdfBtn) pdfBtn.addEventListener("click", () => window.print());

  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: .12 });
  reveals.forEach(el => observer.observe(el));
});
