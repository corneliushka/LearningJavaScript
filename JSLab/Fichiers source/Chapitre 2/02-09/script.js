// En informatique, un booléen est un type de données logique
// qui ne peut prendre que deux valeurs : true ou false.
// true pour "vrais" et false pour "faux".
true;
false;

// Les trois signes d'égale comparent si le contenue de maVoiture 
// est identique au centenu de monAutreVoiture
// dans ce cas le moteur JavaScript vas returner "false", car ils ne sont pas les mêmes.
var maVoiture = "peugeot";
var monAutreVoiture = "Hyundai";
maVoiture === monAutreVoiture;

// Le moteur JavaScript vas returner "true", 
// car les contenues des deux variables sont maintenant identique.
monAutreVoiture = "peugeot";
maVoiture === monAutreVoiture;

// La function Boolean convertie la valeur passée entre parenthèses a une valeur booléenne.
// si la valeur omise est un string none vide, Boolean retourne true.
// Donc, dans ce cas le resultat est : true.
Boolean("Bonjour");

// Nous avons un string vide passée entre parenthèses,
// donc le resultat est : false.
Boolean("");

// L'espace a une valeur ASCII, donc le resultat sera true.
Boolean(" ");

// Si la valeur omise a "Boolean" est un nombre diffrent de 0, Boolean retourne true.
// Donc, dans ce cas le resultat est : true.
Boolean(10);

// la valeur omise a "Boolean" est 0,
// donc le resultat sera : false.
Boolean(0);


// En résumé les valeurs 0, -0, null, false, NaN, undefined ou un String vide ("")
// sont considérés comme des valeurs "falsy", toutes les autres valeurs, 
// y compris un objet ou une chaine de caractères "false",
// sont considérés comme des valeurs "Truthy"
