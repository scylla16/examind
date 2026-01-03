// ----------------------------
// DONNÉES COMPLÈTES
// ----------------------------
const data = {
  "Français": {
    "3e": {
      "Grammaire": ["Classes grammaticales", "Fonctions grammaticales", "Syntaxe", "Orthographe"],
      "Littérature": ["Genres littéraires", "Poésie", "Roman", "Théâtre"],
      "Expression écrite": ["Commentaire", "Dissertation", "Résumé"]
    },
    "2nde": {
      "Grammaire": ["Syntaxe avancée", "Conjugaison", "Orthographe"],
      "Littérature": ["Roman", "Poésie", "Théâtre", "Argumentation"],
      "Expression écrite": ["Commentaire", "Dissertation", "Résumé"]
    },
    "1re": {
      "Grammaire": ["Analyse de phrase", "Figures de style"],
      "Littérature": ["Roman", "Poésie", "Théâtre", "Argumentation"],
      "Expression écrite": ["Commentaire", "Dissertation", "Résumé"]
    },
    "Tle": {
      "Grammaire": ["Syntaxe complexe", "Figures de style avancées"],
      "Littérature": ["Roman", "Poésie", "Théâtre", "Argumentation"],
      "Expression écrite": ["Commentaire composé", "Dissertation", "Résumé"]
    }
  },

  "Mathématiques": {
    "3e": {
      "Nombres et calculs": ["Nombres relatifs", "Fractions", "Puissances", "Racines carrées"],
      "Algèbre": ["Équations", "Inéquations", "Expressions littérales"],
      "Géométrie": ["Thalès", "Pythagore", "Triangles", "Symétrie"]
    },
    "2nde": {
      "Fonctions": ["Fonctions affines", "Fonctions linéaires", "Représentations graphiques"],
      "Géométrie": ["Vecteurs", "Trigonométrie", "Droites et plans"],
      "Probabilités": ["Calculs de probabilités", "Événements"]
    },
    "1re": {
      "Analyse": ["Dérivation", "Limites", "Continuité", "Primitives", "Intégrales"],
      "Algèbre": ["Équations du second degré", "Systèmes", "Exponentielle", "Logarithme"],
      "Statistiques": ["Moyenne", "Variance", "Écarts-types"]
    },
    "Tle": {
      "Analyse": ["Dérivation avancée", "Étude de fonctions", "Primitives", "Intégrales"],
      "Probabilités": ["Variables aléatoires", "Lois de probabilité", "Échantillonnage"],
      "Géométrie": ["Vecteurs et droites", "Géométrie dans l’espace"]
    }
  },

  "Physique-Chimie": {
    "3e": {
      "Physique": ["Mouvement", "Forces", "Énergie", "Électricité de base", "Ondes"],
      "Chimie": ["Atomes", "Molécules", "Réactions simples", "Acides et bases"]
    },
    "2nde": {
      "Physique": ["Électricité", "Énergie", "Mécanique", "Optique"],
      "Chimie": ["Réactions chimiques", "Solutions", "Tableau périodique"]
    },
    "1re": {
      "Physique": ["Mécanique", "Ondes", "Électricité", "Thermodynamique"],
      "Chimie": ["Stœchiométrie", "Réactions chimiques", "Acides/Bases", "Oxydoréduction"]
    },
    "Tle": {
      "Physique": ["Mécanique avancée", "Électricité", "Ondes", "Optique", "Énergie"],
      "Chimie": ["Chimie organique", "Réactions complexes", "Cinétique"]
    }
  },

  "SVT": {
    "3e": {
      "Biologie": ["Cellule", "ADN", "Reproduction", "Évolution"],
      "Écologie": ["Écosystèmes", "Biodiversité", "Climat"]
    },
    "2nde": {
      "Biologie": ["Cellules", "Génétique", "Reproduction", "Écosystèmes"],
      "Géologie": ["Tectonique des plaques", "Roches et minéraux"]
    },
    "1re": {
      "Biologie": ["ADN et gènes", "Immunité", "Évolution"],
      "Écologie": ["Climat", "Biodiversité", "Écosystèmes"]
    },
    "Tle": {
      "Biologie": ["Génétique avancée", "Évolution humaine", "Immunité"],
      "Écologie": ["Développement durable", "Climat", "Biodiversité"]
    }
  },

  "Histoire-Géographie": {
    "3e": {
      "Histoire": ["Révolution française", "Empire napoléonien", "Révolution industrielle"],
      "Géographie": ["Territoires français", "Urbanisation", "Développement durable"]
    },
    "2nde": {
      "Histoire": ["Première guerre mondiale", "Seconde guerre mondiale", "Guerre froide"],
      "Géographie": ["Mondialisation", "Géopolitique", "Inégalités"]
    },
    "1re": {
      "Histoire": ["France contemporaine", "Décolonisation", "Guerre froide"],
      "Géographie": ["Territoires et mondialisation", "Économie et sociétés"]
    },
    "Tle": {
      "Histoire": ["Monde contemporain", "Géopolitique actuelle"],
      "Géographie": ["Développement durable", "Urbanisation", "Climat"]
    }
  },

  "SES": {
    "2nde": {
      "Économie": ["Marchés", "Croissance", "Inflation", "Chômage"],
      "Sociologie": ["Socialisation", "Classes sociales", "Inégalités"]
    },
    "1re": {
      "Économie": ["Politiques économiques", "Marchés financiers"],
      "Sociologie": ["Inégalités", "Socialisation avancée"]
    },
    "Tle": {
      "Économie": ["Mondialisation", "Croissance", "Chômage", "Inflation"],
      "Sociologie": ["Inégalités sociales", "Mobilité sociale"]
    }
  },

  "Philosophie": {
    "Tle": {
      "Notions": ["La liberté", "La justice", "La vérité", "Le bonheur", "La conscience", "Le travail"]
    }
  },

  "Langues": {
    "3e": {
      "Anglais": ["Grammaire", "Temps verbaux", "Vocabulaire", "Expression écrite"],
      "Espagnol": ["Grammaire", "Temps verbaux", "Vocabulaire", "Expression écrite"],
      "Allemand": ["Grammaire", "Temps verbaux", "Vocabulaire", "Expression écrite"]
    },
    "2nde": {
      "Anglais": ["Grammaire", "Temps verbaux", "Expression écrite", "Compréhension"],
      "Espagnol": ["Grammaire", "Temps verbaux", "Expression écrite", "Compréhension"],
      "Allemand": ["Grammaire", "Temps verbaux", "Expression écrite", "Compréhension"]
    },
    "1re": {
      "Anglais": ["Grammaire", "Temps verbaux", "Expression écrite", "Compréhension"],
      "Espagnol": ["Grammaire", "Temps verbaux", "Expression écrite", "Compréhension"],
      "Allemand": ["Grammaire", "Temps verbaux", "Expression écrite", "Compréhension"]
    },
    "Tle": {
      "Anglais": ["Grammaire avancée", "Expression écrite", "Compréhension", "Analyse de texte"],
      "Espagnol": ["Grammaire avancée", "Expression écrite", "Compréhension", "Analyse de texte"],
      "Allemand": ["Grammaire avancée", "Expression écrite", "Compréhension", "Analyse de texte"]
    }
  },

  "Technologie": {
    "3e": {
      "Informatique": ["Algorithmique", "Programmation", "Réseaux"],
      "Sciences industrielles": ["Électricité", "Mécanique", "Électronique"]
    }
  }
};

// ----------------------------
// AFFICHAGE DYNAMIQUE
// ----------------------------
const app = document.getElementById("app");

// Fonction pour créer les cartes
function createCard(text, classes = []) {
  const card = document.createElement("div");
  card.classList.add("card", ...classes);
  card.textContent = text;
  return card;
}

// Fonction principale pour générer le flow
function showMatieres() {
  app.innerHTML = "";
  for (let matiere in data) {
    const card = createCard(matiere, ["matiere"]);
    card.addEventListener("click", () => showClasses(matiere));
    app.appendChild(card);
  }
}

function showClasses(matiere) {
  app.innerHTML = "";
  for (let classe in data[matiere]) {
    const card = createCard(classe, ["theme"]);
    card.addEventListener("click", () => showThemes(matiere, classe));
    app.appendChild(card);
  }
  const retour = createCard("← Retour", ["retour"]);
  retour.addEventListener("click", showMatieres);
  app.appendChild(retour);
}

function showThemes(matiere, classe) {
  app.innerHTML = "";
  for (let theme in data[matiere][classe]) {
    const card = createCard(theme, ["theme"]);
    card.addEventListener("click", () => showChapitres(matiere, classe, theme));
    app.appendChild(card);
  }
  const retour = createCard("← Retour", ["retour"]);
  retour.addEventListener("click", () => showClasses(matiere));
  app.appendChild(retour);
}

function showChapitres(matiere, classe, theme) {
  app.innerHTML = "";
  data[matiere][classe][theme].forEach(chapitre => {
    const card = createCard(chapitre, ["chapitre"]);
    app.appendChild(card);
  });
  const retour = createCard("← Retour", ["retour"]);
  retour.addEventListener("click", () => showThemes(matiere, classe));
  app.appendChild(retour);
}

// ----------------------------
// INIT
// ----------------------------
showMatieres();
