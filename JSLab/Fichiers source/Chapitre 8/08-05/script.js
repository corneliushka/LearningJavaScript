// Execution 1
// document.createElement crée un élément du type spécifié.
var monImage = document.createElement("img");
console.log(monImage);

// Execution 2
var monImage = document.createElement("img");
monImage.src = "img/portfolio/sous-marin.png";
monImage.alt = "Image illustrant un sous-marin";
console.log(monImage);

// Execution 3
// La méthode appendChild Ajoute un élément à la fin de la liste des enfants d'un élément parent spécifié. 
var monImage = document.createElement("img");
monImage.src = "img/portfolio/sous-marin.png";
monImage.alt = "Image illustrant un sous-marin";

var mesElements = document.querySelectorAll(".portfolio-item");
mesElements[5].appendChild(monImage);

// Execution 4
// Un autre avantage de cette façon de créations d’élément 
// est que si nous voulons effectuer quelques changement sur  l'élément créer,
// dans ce cas monImage, nous n'avons pas à le sélectionner encore une fois via les différentes méthodes 
// de sélection qui existe, car mon Image ici point toujours sur son élément associé du DOM.
var monImage = document.createElement("img");
monImage.src = "img/portfolio/sous-marin.png";
monImage.alt = "Image illustrant un sous-marin";

var mesElements = document.querySelectorAll(".portfolio-item");
mesElements[5].appendChild(monImage);

monImage.className = "img-responsive";

// Execution 5
var li = document.createElement("li");
li.className = "page-scroll";

var monLien = document.createElement("a");
monLien.innerHTML = "Poster un projet";
monLien.href = "#";

li.appendChild(monLien);
console.log(li);

// Execution 6
// La méthode children retourn un tableau JavaScript des éléments enfants d'un élément parent spécifié. 
var ul = document.querySelector("ul.navbar-nav");
console.log(ul.children);

// Execution 7
// La méthode insertBefore ajoute un élément avant un élément de référence 
// parmi les éléments enfant d'un élément parent spécifié (voir le cours);
var li = document.createElement("li");
li.className = "page-scroll";

var monLien = document.createElement("a");
monLien.innerHTML = "Poster un projet";
monLien.href = "#";

li.appendChild(monLien);

var ul = document.querySelector("ul.navbar-nav");
ul.insertBefore(li, ul.children[2]);


