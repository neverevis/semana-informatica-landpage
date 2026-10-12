(function () {
  /* ── Nav toggle ── */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ── Programação: tabs ── */
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".day-panel");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      panels.forEach(function (p) {
        p.classList.remove("is-active");
        p.hidden = true;
      });

      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      const panel = document.getElementById(tab.getAttribute("aria-controls"));
      panel.classList.add("is-active");
      panel.hidden = false;
    });
  });

  /* ── Speaker cards: overlay por tap (mobile) ── */
  const speakerCards = document.querySelectorAll(".speaker-card");

  function closeAllOverlays(except) {
    speakerCards.forEach(function (card) {
      if (card !== except) card.classList.remove("overlay-open");
    });
  }

  speakerCards.forEach(function (card) {
    card.addEventListener("click", function (e) {
      // Se o clique for em um link dentro do card, não interfere
      if (e.target.closest("a")) return;

      const isOpen = card.classList.toggle("overlay-open");
      if (isOpen) closeAllOverlays(card);
    });
  });

  // Fecha overlay ao clicar fora de qualquer card
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".speaker-card")) {
      closeAllOverlays(null);
    }
  });
})();
