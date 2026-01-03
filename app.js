// ----------------------------
// TEST FLOW EXAMIND
// ----------------------------

// Conteneur principal
const app = document.getElementById("app");

// Vérification que le div existe
console.log(app); // Devrait afficher <div id="app"></div>

// Données simplifiées pour test (toutes les matières de 3e à Tle)
const data = {
  "Français": ["3e","2nde","1re","Tle"],
  "Mathématiques": ["3e","2nde","1re","Tle"],
  "Physique-Chimie": ["3e","2nde","1re","Tle"],
  "SVT": ["3e","2nde","1re","Tle"],
  "Histoire-Géographie": ["3e","2nde","1re","Tle"],
  "SES": ["2nde","1re","Tle"],
  "Philosophie": ["Tle"],
  "Anglais": ["3e","2nde","1re","Tle"],
  "Espagnol": ["3e","2nde","1re","Tle"],
  "Allemand": ["3e","2nde","1re","Tle"],
  "Technologie": ["3e"],
  "EMC": ["3e","2nde","1re","Tle"]
};

// Fonction pour créer une carte simple
function createCard(text) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = text;
  return card;
}

// Affiche les matières
function showMatieres() {
  app.innerHTML = ""; // vide avant
  for (let matiere in data) {
    const card = createCard(matiere);
    card.addEventListener("click", () => showClasses(matiere));
    app.appendChild(card);
  }
}

// Affiche les classes d’une matière
function showClasses(matiere) {
  app.innerHTML = "";
  data[matiere].forEach(classe => {
    const card = createCard(classe);
    card.addEventListener("click", () => {
      alert(`Ici tu afficheras les thèmes et chapitres de ${matiere} - ${classe}`);
    });
    app.appendChild(card);
  });

  const retour = createCard("← Retour");
  retour.addEventListener("click", showMatieres);
  app.appendChild(retour);
}

// INITIALISATION
showMatieres();
