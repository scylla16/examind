// Données structurées : matières → thèmes → chapitres
const data = [
  {
    matiere: "Maths",
    themes: [
      { theme: "Géométrie", chapitres: ["Triangles rectangles", "Théorème de Thalès", "Cercles", "Trigonométrie"] },
      { theme: "Algèbre", chapitres: ["Factorisation", "Équations", "Inéquations"] },
      { theme: "Fonctions", chapitres: ["Fonctions linéaires", "Fonctions affines", "Quadratiques"] },
      { theme: "Probabilités", chapitres: ["Loi uniforme", "Probabilité conditionnelle"] }
    ]
  },
  {
    matiere: "Français",
    themes: [
      { theme: "Littérature", chapitres: ["Roman", "Poésie", "Théâtre"] },
      { theme: "Grammaire", chapitres: ["Syntaxe", "Accords", "Conjugaison"] },
      { theme: "Analyse de texte", chapitres: ["Figures de style", "Résumé", "Commentaire"] }
    ]
  },
  {
    matiere: "Histoire-Géo",
    themes: [
      { theme: "Histoire", chapitres: ["Révolution Française", "1ère Guerre mondiale", "Révolution industrielle"] },
      { theme: "Géographie", chapitres: ["Europe", "France", "Mondialisation"] }
    ]
  },
  {
    matiere: "SVT",
    themes: [
      { theme: "Biologie", chapitres: ["ADN", "Cellules", "Photosynthèse"] },
      { theme: "Écologie", chapitres: ["Écosystèmes", "Biodiversité"] }
    ]
  },
  {
    matiere: "Physique-Chimie",
    themes: [
      { theme: "Physique", chapitres: ["Mécanique", "Électricité", "Optique"] },
      { theme: "Chimie", chapitres: ["Réactions chimiques", "Tableau périodique"] }
    ]
  },
  {
    matiere: "Anglais",
    themes: [
      { theme: "Grammaire", chapitres: ["Present simple", "Past simple", "Future simple"] },
      { theme: "Vocabulaire", chapitres: ["Famille", "Voyage", "École"] }
    ]
  },
  {
    matiere: "Espagnol",
    themes: [
      { theme: "Grammaire", chapitres: ["Présent", "Passé", "Futur"] },
      { theme: "Vocabulaire", chapitres: ["Maison", "École", "Voyage"] }
    ]
  },
  {
    matiere: "SES",
    themes: [
      { theme: "Économie", chapitres: ["Marché", "Inflation", "Chômage"] },
      { theme: "Sociologie", chapitres: ["Famille", "Éducation", "Travail"] }
    ]
  },
  {
    matiere: "Philosophie",
    themes: [
      { theme: "Thèmes principaux", chapitres: ["Éthique", "Politique", "Connaissance"] }
    ]
  }
];

// Variables pour navigation
let currentMatiere = null;
let currentTheme = null;

// Conteneur principal
const container = document.getElementById('fiches-container');

// Fonction pour afficher les matières
function afficherMatieres() {
  container.innerHTML = '';
  data.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card matiere';
    div.innerText = item.matiere;
    div.onclick = () => { currentMatiere = item; afficherThemes(item); };
    container.appendChild(div);
  });
}

// Fonction pour afficher les thèmes d'une matière
function afficherThemes(matiere) {
  container.innerHTML = '';
  // Bouton retour
  const retour = document.createElement('button');
  retour.className = 'retour';
  retour.innerText = '← Retour aux matières';
  retour.onclick = () => { currentMatiere = null; afficherMatieres(); };
  container.appendChild(retour);

  matiere.themes.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card theme';
    div.innerText = item.theme;
    div.onclick = () => { currentTheme = item; afficherChapitres(item); };
    container.appendChild(div);
  });
}

// Fonction pour afficher les chapitres d'un thème
function afficherChapitres(theme) {
  container.innerHTML = '';
  // Bouton retour
  const retour = document.createElement('button');
  retour.className = 'retour';
  retour.innerText = '← Retour aux thèmes';
  retour.onclick = () => { currentTheme = null; afficherThemes(currentMatiere); };
  container.appendChild(retour);

  theme.chapitres.forEach(chap => {
    const div = document.createElement('div');
    div.className = 'card chapitre';
    div.innerText = chap;
    container.appendChild(div);
  });
}

// Au chargement, on affiche les matières
afficherMatieres();
