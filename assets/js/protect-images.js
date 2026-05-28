// assets/js/protect-images.js
(() => {
  // Block right-click context menu on images
  document.addEventListener("contextmenu", (e) => {
    const img = e.target && (e.target.tagName === "IMG" ? e.target : e.target.closest?.("img"));
    if (img) e.preventDefault();
  });

  // Block drag-to-save on images
  document.addEventListener("dragstart", (e) => {
    if (e.target && e.target.tagName === "IMG") e.preventDefault();
  });

  // Optional: block long-press "save image" on iOS is not fully controllable,
  // but disabling touch callout via CSS (next step) helps in Safari.
})();
