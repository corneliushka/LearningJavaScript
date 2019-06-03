// Execution 1
// getElementById renvoie l'élément dont l'ID est celui spécifié.
// L'id doit être une chaîne représentant l'identifant unique de l'élément voulu.
document.getElementById("form-contact");

// Execution 2
// On peut assigner le résultat de getElementById à une variable,
// puis travailler avec cette variable.
var monFormulaire = document.getElementById("form-contact");
console.log(monFormulaire);

// Execution 3
// La commande "dir" affiche une liste interactive des propriétés de l'objet Javascript spécifié.
var monFormulaire = document.getElementById("form-contact");
dir(monFormulaire);

// Execution 4
// On peut accéder aux propriétés de l'objet retourner par getElementById via la notation par point.
var monFormulaire = document.getElementById("form-contact");
console.log(monFormulaire.style);

// Execution 5
// La modification des propriétés de l'objet monFormulaire, 
// mettrons à jour le formulaire en temp réel.
var monFormulaire = document.getElementById("form-contact");
monFormulaire.style.visibility = "hidden";

// Execution 6
// getElementsByTagName retourne un "tableau comme objet" contenent des éléments portant le nom de balise spécifié
// dans l'ordre dans lequel ils apparaissent dans le document.
var mesInputs = document.getElementsByTagName("input");
console.log(mesInputs);

// Execution 7
// On peut accéder à un élément du tableau retourner par getElementsByTagName,
// soit par index, ou par son nom.
var mesInputs = document.getElementsByTagName("input");
console.log(mesInputs[0]);
console.log(mesInputs.email);

// Execution 8
// si le nom de balise passer à getElementsByTagName n'existe pas,
// getElementsByTagName retournera un tableau vide.
var mesInputs = document.getElementsByTagName("article");
console.log(mesInputs);


// Execution 9
// getElementsByClassName retourne un "tableau comme objet" contenent des éléments portant le nom de la classe spécifié
// dans l'ordre dans lequel ils apparaissent dans le document.
document.getElementsByClassName("form-control");