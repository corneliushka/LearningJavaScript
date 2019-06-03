// Execution 1
// RegExp permet de créer un objet représentant une expression rationnelle permettant 
// de reconnaître un motif (pattern en anglais) dans un texte.
// Le "on" ici entre parenthèse représente Le motif qu'on cherche à faire correspondre pour l'expression rationnelle, 
// et le "g" ici signifie qu'il ne doit pas se limiter à la première correspondance, mais il doit continuer
// jusqu'à ce qu'il trouve toutes les correspondances.
var maChaine = "Bonjour tout le monde !";
var monRegExp = new RegExp("on", "g");

// La méthode test() vérifie s'il y a une correspondance entre un texte et une expression rationnelle. 
// Elle retourne true en cas de succès et false dans le cas contraire.
console.log(monRegExp.test(maChaine));

// Execution 2
// La méthode test() va retourner "false", 
// car les expressions régulières sont sensible à la casse 
var maChaine = "Bonjour tout le monde !";
var monRegExp = new RegExp("On", "g");
console.log(monRegExp.test(maChaine));

// Execution 3
// La méthode test() va retourner "true", 
// car nous avons ajouter le flag "i" qui signifie "ignorer La casse".
var maChaine = "Bonjour tout le monde !";
var monRegExp = new RegExp("On", "gi");
console.log(monRegExp.test(maChaine));

// Execution 4
// Exemple d'un objet RegExp en utilisant une notation littéralle. 
var maChaine = "Bonjour tout le monde !";
var monRegExp = /on/g;
console.log(monRegExp.test(maChaine));

// Execution 4
// Plusieurs appels successifs à test() sur une même instance d'une expression rationnelle
// permettent de rechercher après la dernière occurence.
var maChaine = "Bonjour tout le monde !";
var monRegExp = /on/g;

console.log(monRegExp.test(maChaine));
console.log(monRegExp.test(maChaine));
console.log(monRegExp.test(maChaine));

// Execution 5
// La méthode exec() exécute la recherche d'une correspondance sur une chaîne de caractères donnée. 
// Elle renvoie un tableau contenant les résultats ou null.
var maChaine = "Bonjour tout le monde !";
var monRegExp = /on/g;
console.log(monRegExp.exec(maChaine));

// Execution 6
// Si on utilise le flag "g" dans l'expression rationnelle,
// on peut utiliser la méthode exec() plusieurs fois afin de trouver 
// les correspondances successives dans la chaîne.
var maChaine = "Bonjour tout le monde !";
var monRegExp = /on/g;

var resultat = monRegExp.exec(maChaine);
while(resultat) {
    console.log(resultat);
    resultat = monRegExp.exec(maChaine);
}

// Execution 7
// Comme le resultat de exec est un tableau, 
// on peut accéder aux valeurs de ce resultat on utilisant simplement 
// les crochet et l'indice de l'élément souhaiter. 
var maChaine = "Bonjour tout le monde !";
var monRegExp = /on/g;

var resultat = monRegExp.exec(maChaine);
while(resultat) {
    console.log(resultat[0]);
    resultat = monRegExp.exec(maChaine);
}

// Execution 8
// resultat.index retourn la position (compté à partir de 0) de la correspondance dans la chaîne.
var maChaine = "Bonjour tout le monde !";
var monRegExp = /on/g;

var resultat = monRegExp.exec(maChaine);
while(resultat) {
    console.log(resultat.index);
    resultat = monRegExp.exec(maChaine);
}

// Execution 9
// resultat.input retourn la chaîne de caractères utilisée en entrée.	
var maChaine = "Bonjour tout le monde !";
var monRegExp = /on/g;

var resultat = monRegExp.exec(maChaine);
while(resultat) {
    console.log(resultat.input);
    resultat = monRegExp.exec(maChaine);
}


// Examinons quelques patterns
// Le flag "^" signifie que "Bonjour" doit se trouver au début de la chaîne de caractères.
var monRegExp2 = /^Bonjour/;

// Le flag "$" signifie que "Bonjour" doit se trouver à la fin de la chaîne de caractères.
var monRegExp2 = /Bonjour$/;

// Ceci signifie que n'import lequel des lettres entre les crochets, 
// suivi pour l'expression "on" va correspondre.
var monRegExp2 = /[jt]on/;

// Le symbole "." represente n'importe quels caractères
var monRegExp2 = /[jt]on./;

// Si vous voulez utiliser un caractère réservé en tant que text et non pas en tant que symbole,
// il est nécessaire d'échapper les caractères spéciaux comme pour les chaînes de caractères 
// (c'est-à-dire de entourer les caractères spéciaux avec des antis-slash)

var monRegExp2 = /[jt]on\/\./;