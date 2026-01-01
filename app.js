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
