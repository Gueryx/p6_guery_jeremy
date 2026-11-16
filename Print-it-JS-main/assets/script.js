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

// Sélectionner/Récuperer la flèche gauche et la flèche droite du diaporama
const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");

// Ecouter l'événement click sur la flèche gauche
arrowleft.addEventListener("click", () => {
	console.log("Flèche gauche cliquée");
});
	
// Ecouter l'événement click sur la flèche droite
arrowright.addEventListener("click", () => {
	console.log("Flèche droite cliquée");
});

