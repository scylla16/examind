// CONTENEUR PRINCIPAL
const app = document.getElementById("app");

// DONNÉES COMPLETES (matières, classes, thèmes et chapitres)
const data = {
  "Français": {
    "3e": {
      "Littérature": ["Romans du XIXe", "Poésie", "Théâtre"],
      "Grammaire": ["Syntaxe", "Orthographe"],
      "Expression écrite": ["Rédaction", "Résumé"]
    },
    "2nde": {
      "Littérature": ["Romans classiques", "Poésie", "Théâtre"],
      "Grammaire": ["Syntaxe avancée", "Orthographe"],
      "Expression écrite": ["Commentaire", "Rédaction"]
    },
    "1re": {
      "Littérature": ["Poésie", "Roman", "Théâtre"],
      "Analyse": ["Commentaire composé", "Dissertation"]
    },
    "Tle": {
      "Littérature": ["Poésie", "Roman", "Théâtre"],
      "Philosophie et réflexion": ["Dissertation", "Sujet bac"]
    }
  },
  "Mathématiques": {
    "3e": {"Algèbre": ["Équations", "Inéquations"], "Géométrie": ["Triangles", "Cercles"]},
    "2nde": {"Algèbre": ["Fonctions", "Équations"], "Géométrie": ["Vecteurs", "Trigonométrie"]},
    "1re": {"Analyse": ["Limites", "Dérivées"], "Algèbre": ["Polynômes", "Matrices"]},
    "Tle": {"Analyse": ["Intégrales", "Dérivées"], "Probabilités": ["Loi normale", "Échantillons"]}
  },
  "Physique-Chimie": {
    "3e": {"Physique": ["Mécanique", "Électricité"], "Chimie": ["Réactions", "Solutions"]},
    "2nde": {"Physique": ["Mécanique", "Électricité", "Optique"], "Chimie": ["Acides bases", "Oxydoréductions"]},
    "1re": {"Physique": ["Électromagnétisme", "Mécanique"], "Chimie": ["Réactions chimiques"]},
    "Tle": {"Physique": ["Mécanique quantique", "Ondes"], "Chimie": ["Chimie organique"]}
  },
  "SVT": {
    "3e": {"Biologie": ["Cellule", "ADN"], "Écologie": ["Écosystèmes"]},
    "2nde": {"Biologie": ["Génétique", "Organes"], "Écologie": ["Biodiversité"]},
    "1re": {"Biologie": ["Évolution", "Physiologie"], "Géologie": ["Roches"]},
    "Tle": {"Biologie": ["Écologie avancée", "Évolution"], "Géologie": ["Tectonique"]}
  },
  "Histoire-Géographie": {
    "3e": {"Histoire": ["Révolution Française", "1ère Guerre mondiale"], "Géographie": ["Europe", "France"]},
    "2nde": {"Histoire": ["XXe siècle"], "Géographie": ["Monde contemporain"]},
    "1re": {"Histoire": ["Révolutions", "Guerres mondiales"], "Géographie": ["Europe"]},
    "Tle": {"Histoire": ["XXe siècle", "Colonialisme"], "Géographie": ["Monde"]}
  },
  "SES": {"2nde": {"Économie": ["Marché", "Demande"], "Sociologie": ["Famille"]}, "1re": {"Économie": ["Macroéconomie"], "Sociologie": ["Travail"]}, "Tle": {"Économie": ["Croissance"], "Sociologie": ["Inégalités"]}},
  "Philosophie": {"Tle": {"Philosophie": ["Éthique", "Métaphysique"]}},
  "Anglais": {
    "3e": {"Grammaire": ["Temps verbaux"], "Expression": ["Rédaction"]},
    "2nde": {"Grammaire": ["Temps verbaux"], "Expression": ["Rédaction"]},
    "1re": {"Grammaire": ["Syntaxe"], "Expression": ["Dissertation"]},
    "Tle": {"Grammaire": ["Syntaxe"], "Expression": ["Commentaire"]}
  },
  "Espagnol": {
    "3e": {"Grammaire": ["Temps verbaux"], "Expression": ["Rédaction"]},
    "2nde": {"Grammaire": ["Temps verbaux"], "Expression": ["Rédaction"]},
    "1re": {"Grammaire": ["Syntaxe"], "Expression": ["Dissertation"]},
    "Tle": {"Grammaire": ["Syntaxe"], "Expression": ["Commentaire"]}
  },
  "Allemand": {
    "3e": {"Grammaire": ["Temps verbaux"], "Expression": ["Rédaction"]},
    "2nde": {"Grammaire": ["Temps verbaux"], "Expression": ["Rédaction"]},
    "1re": {"Grammaire": ["Syntaxe"], "Expression": ["Dissertation"]},
    "Tle": {"Grammaire": ["Syntaxe"], "Expression": ["Commentaire"]}
  },
  "Technologie": {"3e": {"Technologie": ["Informatique", "Électronique"]}},
  "EMC": {"3e": {"Citoyenneté": ["Droits", "Devoirs"]}, "2nde": {"Citoyenneté": ["Institutions"]}, "1re": {"Citoyenneté": ["Droits"]}, "Tle": {"Citoyenneté": ["Débats"]}}
};

// ----------------------------
// FONCTIONS POUR AFFICHAGE
// ----------------------------

function createCard(text) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = text;
  return card;
}

function showMatieres() {
  app.innerHTML = "";
  for (let matiere in data) {
    const card = createCard(matiere);
    card.classList.add("matiere");
    card.addEventListener("click", () => showClasses(matiere));
    app.appendChild(card);
  }
}

function showClasses(matiere) {
  app.innerHTML = "";
  for (let classe in data[matiere]) {
    const card = createCard(classe);
    card.classList.add("classe");
    card.addEventListener("click", () => showThemes(matiere, classe));
    app.appendChild(card);
  }
  const retour = createCard("← Retour");
  retour.classList.add("retour");
  retour.addEventListener("click", showMatieres);
  app.appendChild(retour);
}

function showThemes(matiere, classe) {
  app.innerHTML = "";
  const themes = data[matiere][classe];
  for (let theme in themes) {
    const card = createCard(theme);
    card.classList.add("theme");
    card.addEventListener("click", () => showChapters(matiere, classe, theme));
    app.appendChild(card);
  }
  const retour = createCard("← Retour");
  retour.classList.add("retour");
  retour.addEventListener("click", () => showClasses(matiere));
  app.appendChild(retour);
}

function showChapters(matiere, classe, theme) {
  app.innerHTML = "";
  const chapters = data[matiere][classe][theme];
  chapters.forEach(chap => {
    const card = createCard(chap);
    card.classList.add("chapitre");
    app.appendChild(card);
  });
  const retour = createCard("← Retour");
  retour.classList.add("retour");
  retour.addEventListener("click", () => showThemes(matiere, classe));
  app.appendChild(retour);
}

// ----------------------------
// INITIALISATION
// ----------------------------
showMatieres();
