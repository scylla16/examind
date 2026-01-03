function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });
  document.getElementById(pageId).classList.remove('hidden');
}

// FICHES TEST (TEMPORAIRES)
const fiches = [
  { titre: "Maths – Thalès", niveau: "3e", type: "courte", contenu: "Formules et exemples" },
  { titre: "Français – Figures de style", niveau: "3e", type: "courte", contenu: "Métaphore, comparaison..." },
  { titre: "Histoire – Révolution française", niveau: "2nde", type: "courte", contenu: "Dates clés" },
  { titre: "SVT – Génétique", niveau: "1ère", type: "longue", contenu: "ADN et gènes" },
  { titre: "Philo – La liberté", niveau: "Terminale", type: "longue", contenu: "Définitions et auteurs" }
];

const container = document.getElementById("fiches-list");

fiches.forEach(fiche => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${fiche.titre}</h3>
    <p>Niveau : ${fiche.niveau}</p>
    <p>Type : ${fiche.type}</p>
    <p>${fiche.contenu}</p>
  `;
  container.appendChild(div);
});
const fiches = [
  { titre: "Maths – Pythagore", type: "courte", contenu: "Dans un triangle rectangle, a² + b² = c²." },
  { titre: "Français – Figures de style", type: "courte", contenu: "Métaphore : comparaison implicite." },
  { titre: "Histoire – Révolution Française", type: "courte", contenu: "1789 : prise de la Bastille." },
  { titre: "SVT – Photosynthèse", type: "courte", contenu: "Plantes transforment CO2 + lumière → glucose + O2." },
  { titre: "Anglais – Present simple", type: "courte", contenu: "I eat, you eat, he/she eats…" },
  { titre: "Maths – Factorisation", type: "courte", contenu: "(a+b)(a-b) = a² - b²." },
  { titre: "Français – Subjonctif", type: "courte", contenu: "Il faut que tu viennes." },
  { titre: "Histoire – 1ère Guerre mondiale", type: "courte", contenu: "1914-1918, conflit mondial." },
  { titre: "SVT – ADN", type: "courte", contenu: "Support de l’information génétique." },
  { titre: "Anglais – Future simple", type: "courte", contenu: "I will go, you will go…" },
  { titre: "Maths – Théorème de Thalès", type: "longue", contenu: "Si une droite est parallèle à un côté d’un triangle, ... [contenu détaillé]" },
  { titre: "Histoire – Révolution industrielle", type: "longue", contenu: "Du XVIIIe au XIXe siècle, l’industrie se transforme ... [contenu détaillé]" },
  { titre: "Français – Analyse de texte", type: "longue", contenu: "Pour analyser un texte : lire attentivement, repérer les thèmes, ... [contenu détaillé]" },
];
