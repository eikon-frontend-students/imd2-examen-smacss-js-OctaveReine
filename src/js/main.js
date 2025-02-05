document.addEventListener("DOMContentLoaded", function () {
  // Définition des couleurs d'origine et des variantes pour chaque élément
  const elementsColors = {
    header: { original: "#005564", variant: "#8A2BE2" }, // Bleu → Violet
    "flavors-title": { original: "#005564", variant: "#FF4500" }, // Bleu → Orange
    "flavor-1": { original: "#A0D187", variant: "#FFD700" }, // Vert → Jaune
    "flavor-2": { original: "#A0D187", variant: "#DC143C" }, // Vert → Rouge
    "flavor-3": { original: "#A0D187", variant: "#4682B4" }, // Vert → Bleu acier
    "about-title": { original: "#005564", variant: "#FF69B4" }, // Bleu → Rose
    "icon-1": { original: "#C0D9D9", variant: "#32CD32" }, // Bleu clair → Vert clair
    "icon-2": { original: "#C0D9D9", variant: "#8B4513" }, // Bleu clair → Marron
    "icon-3": { original: "#C0D9D9", variant: "#FF6347" }, // Bleu clair → Tomate
    "icon-4": { original: "#C0D9D9", variant: "#20B2AA" }, // Bleu clair → Turquoise
    "icon-5": { original: "#C0D9D9", variant: "#9370DB" }, // Bleu clair → Lavande
  };

  // Fonction pour basculer la couleur d'un élément spécifique
  function toggleElementColor(event) {
    let element = event.target;
    let id = element.getAttribute("data-id");

    if (!id || !elementsColors[id]) return; // Vérification que l'élément a bien une couleur définie

    let currentColor = getComputedStyle(element).backgroundColor;
    let originalColor = elementsColors[id].original;
    let variantColor = elementsColors[id].variant;

    // Alterner entre la couleur originale et la variante
    element.style.backgroundColor =
      currentColor === originalColor ? variantColor : originalColor;
  }

  // Attacher l'événement de clic à chaque élément concerné
  document.querySelector(".header").setAttribute("data-id", "header");
  document
    .querySelector(".flavors h2")
    .setAttribute("data-id", "flavors-title");
  document.querySelector(".about h2").setAttribute("data-id", "about-title");

  document.querySelectorAll(".flavor-card").forEach((card, index) => {
    card.setAttribute("data-id", `flavor-${index + 1}`);
  });

  document.querySelectorAll(".icon").forEach((icon, index) => {
    icon.setAttribute("data-id", `icon-${index + 1}`);
  });

  // Ajout de l'écouteur d'événements sur tous les éléments concernés
  document.querySelectorAll("[data-id]").forEach((element) => {
    element.addEventListener("click", toggleElementColor);
  });
});
