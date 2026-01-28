// ========== DATA DE RÉVISION ==========
const data = {
  "Mathématiques": {
    "3e": {
      "Nombres et calculs": [
        "Nombres relatifs",
        "Fractions",
        "Pourcentages",
        "Racines carrées",
        "Calcul littéral",
        "Priorités de calcul"
      ],
      "Équations et inéquations": [
        "Équations simples",
        "Systèmes de 2 équations",
        "Inéquations"
      ]
    },
    "2nde": {
      "Nombres et calculs": [
        "Puissances et racines",
        "Nombres rationnels et réels",
        "Écritures scientifiques"
      ],
      "Fonctions": [
        "Fonctions affines et quadratiques",
        "Représentation graphique"
      ]
    }
  }
};

// ========== LOGIQUE DE NAVIGATION ==========
const content = document.getElementById("content");

function showCards(items, onClick) {
  content.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = item;
    card.onclick = () => onClick(item);
    content.appendChild(card);
  });
}

function showSubjects() {
  showCards(Object.keys(data), showLevels);
}

function showLevels(subject) {
  showCards(Object.keys(data[subject]), level => showThemes(subject, level));
}

function showThemes(subject, level) {
  showCards(Object.keys(data[subject][level]), theme =>
    showChapters(subject, level, theme)
  );
}

function showChapters(subject, level, theme) {
  showCards(data[subject][level][theme], () => {});
}

// ========== LANCEMENT ==========
document.addEventListener("DOMContentLoaded", () => {
  showSubjects();
});
