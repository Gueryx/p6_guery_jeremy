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

// Initialisation de l'index de la slide courante (on commence à 0)
let currentIndex = 0;

// Sélection des éléments du DOM nécessaires
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

// Génération dynamique des bullet points (étape 3)
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (i === 0) {
		dot.classList.add("dot_selected");
	}
	dotsContainer.appendChild(dot);
}

// Sélectionner tous les points qui viennent d'être créés
const dots = document.querySelectorAll(".dot");


// Ecouter l'événement pour la flèche de droite
arrowRight.addEventListener("click", () => {
	console.log("Clic de la flèche de droite");

	// On incrémente l'index pour passer à l'image suivante
    currentIndex++;
    
    // Mise à jour de l'image, du texte et des points
    updateCarousel();
});

// Ecouteur d'événement pour la flèche gauche
arrowLeft.addEventListener("click", () => {
    console.log("Clic sur la flèche de gauche");
    
    // On décrémente l'index pour passer à l'image précédente
    currentIndex--;
    
    // Mise à jour de l'image, du texte et des points
    updateCarousel();
});


// Fonction pour mettre à jour l'affichage du carrousel
function updateCarousel() {
    // Mettre à jour l'image de la bannière
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;

    // Mettre à jour le texte (tagLine) avec innerHTML
    bannerText.innerHTML = slides[currentIndex].tagLine;

    // Mettre à jour les bullet points (gérer la classe dot_selected)
	
    // On parcourt tous les points pour retirer la sélection...
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot_selected");
    }
    // ...et on l'ajoute uniquement sur le point actif (currentIndex)
    dots[currentIndex].classList.add("dot_selected");
}

