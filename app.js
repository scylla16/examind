// ------------------------
// SPLASH SCREEN
// ------------------------
const splash = document.getElementById("splash");
const app = document.getElementById("app");
app.style.display = "none"; // cache contenu principal

setTimeout(() => {
  splash.classList.add("fadeOut");
  setTimeout(() => {
    splash.style.display = "none";
    app.style.display = "flex";
    showMatieres(); // lance le flow
  }, 500);
}, 2000);

// ------------------------
// FLOW COMPLET : MATIERES → CLASSES → THEMES → CHAPITRES
// ------------------------
const data = {
  "Mathématiques": {
    "3ème": {
      "Algèbre": ["Expressions, équations", "Factorisation", "Fonctions"],
      "Géométrie": ["Triangles", "Cercles", "Théorème de Pythagore"]
    },
    "2nde": {
      "Analyse": ["Fonctions", "Limites", "Dérivées"],
      "Géométrie": ["Vecteurs", "Trigonométrie"]
    },
    "1ère": { "Analyse": ["Fonctions", "Dérivées", "Suites"], "Probabilités": ["Événements", "Lois"] },
    "Terminale": { "Analyse": ["Intégrales", "Suites", "Fonctions"], "Probabilités": ["Lois", "Échantillons"] }
  },
  "Physique-Chimie": {
    "3ème": { "Mécanique": ["Forces", "Mouvement"], "Chimie": ["Réactions", "Tableau périodique"] },
    "2nde": { "Électricité": ["Circuits"], "Chimie": ["Réactions chimiques"] },
    "1ère": { "Mécanique": ["Newton"], "Thermodynamique": ["Énergie"] },
    "Terminale": { "Électricité": ["Courants", "Magnétisme"], "Chimie": ["Solutions", "Équilibres"] }
  },
  "Français": { /* id. */ },
  "Anglais": { /* id. */ },
  "Espagnol": { /* id. */ },
  "Allemand": { /* id. */ },
  "Technologie": { /* id. */ },
  "EMC": { /* id. */ }
};

function showMatieres() {
  app.innerHTML = ""; // vide contenu
  Object.keys(data).forEach(matiere => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = matiere;
    card.onclick = () => showClasses(matiere);
    app.appendChild(card);
  });
}

function showClasses(matiere) {
  app.innerHTML = "";
  const classes = Object.keys(data[matiere]);
  classes.forEach(classe => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = classe;
    card.onclick = () => showThemes(matiere, classe);
    app.appendChild(card);
  });
}

function showThemes(matiere, classe) {
  app.innerHTML = "";
  const themes = Object.keys(data[matiere][classe]);
  themes.forEach(theme => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = theme;
    card.onclick = () => showChapters(matiere, classe, theme);
    app.appendChild(card);
  });
}

function showChapters(matiere, classe, theme) {
  app.innerHTML = "";
  const chapters = data[matiere][classe][theme];
  chapters.forEach(chap => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = chap;
    app.appendChild(card);
  });
}
