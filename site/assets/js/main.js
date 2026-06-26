/* Nyangbe Barnes - lightweight site behavior.
   No dependencies. Loaded with `defer` so it never blocks rendering. */
(function () {
  "use strict";

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a") && menu.classList.contains("open")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* ---- Sticky mobile quote bar: hide once the footer is in view ---- */
  var bar = document.getElementById("quote-bar");
  var footer = document.querySelector(".site-footer");
  if (bar && footer && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        bar.style.transform = entry.isIntersecting ? "translateY(100%)" : "translateY(0)";
      });
    }, { threshold: 0.05 }).observe(footer);
  }

  /* ---- Quote form: client-side validation + graceful fallback ----
     No live backend yet. Until one is connected, this opens the visitor's
     email client pre-filled and confirms on screen. Replace the mailto step
     with a real endpoint (Formspree, Basin, serverless) when available. */
  var form = document.getElementById("quote-form");
  if (form) {
    var status = document.getElementById("form-status");
    var BUSINESS_EMAIL = form.getAttribute("data-email") || "";

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Honeypot: if filled, it is a bot. Silently drop.
      var trap = form.querySelector('input[name="company"]');
      if (trap && trap.value) return;
      if (!form.reportValidity()) return;

      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      var phone = (data.get("phone") || "").toString().trim();
      var service = (data.get("service") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();

      var body = [
        "Name: " + name,
        "Email: " + email,
        "Phone: " + phone,
        "Service needed: " + service,
        "",
        "Details:",
        message
      ].join("\n");
      var subject = "Free quote request - " + (service || "Cleaning") + " - " + name;

      if (BUSINESS_EMAIL) {
        window.location.href =
          "mailto:" + BUSINESS_EMAIL +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(body);
      }

      if (status) {
        status.textContent =
          "Thank you, " + (name || "there") +
          ". Your request is ready to send. We reply to every quote within 24 hours.";
        status.classList.add("show");
      }
      form.reset();
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
