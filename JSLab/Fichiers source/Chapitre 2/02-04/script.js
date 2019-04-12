var maChaine = "C'est ma chaine, laissez-la tranquille !";

// La propriété length représente la longueur d'une chaine de caractères.
// Donc le resultat ici est: 40.
maChaine.length; 

// Retourne la valeur de la chaîne courante, convertie en majuscules
// Donc le resultat ici est: "C'EST MA CHAINE, LAISSEZ-LA TRANQUILLE !".
maChaine.toUpperCase(); 

// Retourne la chaîne de caractères courante en minuscules
// Donc le resultat ici est: "c'est ma chaine, laissez-la tranquille !"
maChaine.toLowerCase(); 

// "indexOf" renvoie l'indice de la première occurence de la valeur cherchée 
// au sein de la chaîne courante (à partir de indexDébut). 
// Elle renvoie -1 si la valeur cherchée n'est pas trouvée.
// Donc le resultat ici est: 17
maChaine.indexOf("laissez-la"); 

// si le resultat de maChaine.indexOf("ABCD") est égal à -1
// l'instruction alert vas être exécuté,
// en d'autres mots si on trouve pas de "ABCD" dans maChaine
// l'instruction alert vas être exécuté.
if(maChaine.indexOf("ABCD") == -1) alert("ce mot n'existe pas");

// La méthode slice() extrait une section de la chaine de caractères 
// et renvoie une nouvelle chaine de caractères.
// Par exemple, phrase.slice(3, 10) extrait le quatrième caractère jusqu'au dixième caractère. 
// Donc le resultat ici est le string: "méthode"
var phrase = "La méthode slice() extrait une section de la chaine de caractères."
phrase.slice(3, 10); 

// La méthode substr() renvoie les caractères d'une chaîne de caractères
// commençant à un endroit donné et sur une longueur donnée. 
// Autrement dit, cette méthode renvoie la sous-chaîne de la chaîne courante à partir d'un indice
// Donc le resultat ici est le String: "méthode"
phrase.substr(3, 7);
