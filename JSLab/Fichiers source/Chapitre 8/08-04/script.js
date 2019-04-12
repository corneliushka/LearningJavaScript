// Execution 1
// Ici nous changons l'image vers la quelle l'élément monImage pointe. 
var monImage = document.querySelector("img");
monImage.src = "img/portfolio/sous-marin.png";

// Execution 2
// Ici nous ajoutons l'attribut "id" à monImage, à l'aide de la notation par point.
var monImage = document.querySelector("img");
monImage.id = "img-sous-marin";
console.log(monImage);

// Execution 3
// Il y a quelques exceptions en ce qui concerne l'ajout ou la modification
// des du élément du DOM avec la notation par point, par exemple "class" est un mot réserve en JavaScript.
var monImage = document.querySelector("img");
monImage.class = "maClass";
console.log(monImage);

// Execution 4
// L'attribus className définit ou obtient l'attribut class de l'élément spécifié.
// Le nom className est utilisé pour cette propriété au lieu de classà cause de conflits éventuels 
// avec le mot-clé « class » dans beaucoup de langages utilisés pour manipuler le DOM.
var monImage = document.querySelector("img");
monImage.className = "maClass";
console.log(monImage);

// Execution 5
// innerHTML récupère ou définit tout le contenu au sein d'un élément donné.
var monElement = document.querySelector("#nav-portfolio");
monElement.innerHTML = "Mes projets";

// Execution 6
// Vous allez remarquer ici que monElement contient des tas de chose d'autre qu'un simple text,
// et c'est une mauvaise pratique de manipuler l'ensemble de ces choses en utilisiant innerHTML.
var monElement = document.querySelector("#portfolio");
console.log(monElement.innerHTML);