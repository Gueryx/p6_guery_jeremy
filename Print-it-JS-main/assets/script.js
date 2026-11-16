const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récuperer la flèche gauche et la flèche droite du diaporama
const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");

// Récupérer l'élément du DOM qui contiendra les points de navigation du diaporama
const dotsContainer = document.querySelector(".dots");



// Ecouter l'événement click sur la flèche gauche
arrowleft.addEventListener("click", () => {
	console.log("Flèche gauche cliquée");
});
	
// Ecouter l'événement click sur la flèche droite
arrowright.addEventListener("click", () => {
	console.log("Flèche droite cliquée");
});


// Parcourir le tableau 'slides' pour créer les points de navigation du diaporama
for (let i = 0; i < slides.length; i++) { // Permet de compter automatiquement le nombre d'éléments dans le tableau

	// Créer un élément <div> pour chaque point de navigation
	const dot = document.createElement("div");

	dot.classList.add("dot"); // Ajouter la classe "dot" à l'élément <div>

	// Si c'est le premier point (index 0), on lui ajoute aussi la classe 'dot_selected'
	if (i === 0) {
		dot.classList.add("dot_selected");
	}
	
	// Ajouter ce point dans le conteneur des points (.dots)
	dotsContainer.appendChild(dot);

}