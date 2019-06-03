var mesClients = ["Robert", "Alice", "Francis", "Elina", "Alpha"];

// Execution 1
// Cette méthode ajoute un ou plusieurs éléments à la fin d'un tableau 
// et retourne la nouvelle longueur du tableau.
mesClients.push("Sara");
console.log(mesClients);

// Le code suivant ajoute deux nouveaux éléments
// à la fin du tableau mesClients
mesClients.push("François", "Frémont");
console.log(mesClients);

// Execution 2
// Cette méthode supprime le dernier élément d'un tableau et retourne cet élément.
var retire = mesClients.pop();
console.log(mesClients);
console.log(retire);

// Execution 3
// L'opérateur delete permet de supprimer une valeur donnée d'un tableau.
// Lorsqu'on supprime cet valeur du tableau, la longueur du tableau n'est pas modifiée. 
// Cela vaut également lorsqu'on supprime la derniere valeur du tableau.
delete mesClients[3];
console.log(mesClients);

// Execution 4
// La méthode splice est utilisé souvent pour retirer une ou plusieurs valeurs d'un tableau
// a partir d'une position donnée. Splice retourn un tableau contenant les valeurs supprimés. 
// Si une seule valeure est supprimée, un tableau contenant une seule valeure est retourné.
var retire = mesClients.splice(3, 1);
console.log(mesClients);
console.log(retire); 

// Execution 5
// Cette méthode trie en place les éléments d'un tableau et retourne le tableau.
mesClients.sort();
console.log(mesClients);

// Execution 6
// Cette méthode renverse l'ordre des éléments d'un tableau, 
// le premier élément devient le dernier, et le dernier devient le premier. 
// Le tableau est modifié par cette méthode.
mesClients.reverse();
console.log(mesClients);

// Execution 7
// Rraccourci pour trier un tableau en ordre inverse
mesClients.reverse(mesClients.sort());
console.log(mesClients);

// Execution 8
// Par défaut, JavaScript va trier en fonction de la sensibilité à la casse. 
// Alors Elina avec un "E" majuscule et Elina avec « e » minuscule vont être trier différemment. 
var mesClients = ["Robert", "Alice", "Francis", "elina", "Alpha"];
mesClients.sort();
console.log(mesClients);

// Execution 9
// Ce paramètre optionnel permet de spécifier une fonction définissant l'ordre de tri. 
// Pour plus de détails, consulter cette page:
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort

function insensible_a_la_casse(a, b) {
    if(a.toUpperCase() < b.toUpperCase()) return -1;
    if(a.toUpperCase() > b.toUpperCase()) return 1;
    return 0;    
}

mesClients.sort(insensible_a_la_casse);
console.log(mesClients);

// Execution 10
// Cette méthode concatène tous les éléments d'un tableau en une chaîne de caractère.
// Si un élément vaut undefined ou null, il sera converti une chaîne vide.
// Le string entre les parenthèses indique une chaine de caractères pour séparer chaque élément du tableau, 
// si ce paramètre n'est pas utilisé, les éléments du tableau seront séparés par une virgule
var maNouvelleChaine = mesClients.join(", ");
console.log(maNouvelleChaine);
console.log(mesClients);

// Execution 11
// La méthode split() permet de diviser une chaîne de caractères 
// à partir d'un séparateur pour fournir un tableau de sous-chaînes.
// Le séparateur définit le ou les caractères à utiliser pour scinder la chaîne.
// Si le séparateur est une chaîne vide, la chaîne maNouvelleChaine sera convertie en un tableau de caractères.
var maNouvelleChaine = "Robert, Alice, Francis, Elina, Alpha";
var monNouveauTableau = maNouvelleChaine.split(", ");
console.log(monNouveauTableau);

// Execution 12
// Cette méthode détermine si le tableau contient ou non un certain élément. 
// Elle renvoie true ou false selon le cas de figure.
resultat = mesClients.includes("Robert");
console.log(resultat);

resultat = mesClients.includes("Jasmin");
console.log(resultat);