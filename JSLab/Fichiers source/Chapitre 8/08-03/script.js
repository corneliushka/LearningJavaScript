// Execution 1
// Retourne le premier élément dans le document qui correspond au groupe de sélecteurs passés en paramètre,
// en partant du premier niveau du html et ordonné comme les éléments du document.
// Le groupe de sélecteurs est une chaîne qui contient un ou plusieurs sélecteurs CSS séparés par des virgules.
document.querySelector("section");

// Execution 2
// Renvoie un tableau JavaScript des éléments dans le document qui correspondent au groupe de sélecteurs passés en paramètre, 
// en partant du premier niveau du html et ordonné comme les éléments du document. 
// Le groupe de sélecteurs est une chaîne qui contient un ou plusieurs sélecteurs CSS séparés par des virgules.
document.querySelectorAll("section");

// Execution 3
// Ceci retourn l'id de l'element sélectionner par document.querySelector
document.querySelector("section").id;

// Execution 3
// Cette syntaxe est incorrect car querySelectorAll return un tableau d'éléments.
document.querySelectorAll("section").id;

// Execution 4
// Ceci retourn l'id du deuxième élément des éléments stocker dans le tableau retourner par querySelectorAll.
document.querySelectorAll("section")[1].id;

// Execution 5
// Ceci retourne un tableau d'éléments portant le nom de la classe portfolio-item.
document.querySelectorAll(".portfolio-item");

// Execution 6
// Ceci va sélectionner l'ensemble des éléments input de type texte
document.querySelectorAll("input[type='text']");

// Execution 7
// Ceci va sélectionner l'ensemble des éléments div à l'intérieur de la section avec l'id portfolio.
document.querySelectorAll("#portfolio div");
