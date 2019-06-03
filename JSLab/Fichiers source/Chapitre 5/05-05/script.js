// Execution 1
// Retourne une valeur correspondant au temps courant
var maintenant = new Date();
console.log(maintenant);

// Execution 2
// "0" ici représente le nombre de millisecondes depuis le 1 Janvier 1970 00:00:00 UTC 
var date = new Date(0);
console.log(data);

// Execution 3
// "31536000000" représente le nombre de millisecondes depuis le 1 Janvier 1970 00:00:00 UTC 
var date = new Date(31536000000);
console.log(date);

// Execution 4
// 2016: représente l'année.
// 0: représente le mois, commençant à partir de  0 pour Janvier jusqu'à 11 pour Décembre.
// 26: représente le jour du mois (1-31)
var date = new Date(2016, 0, 26);
console.log(date);

// Execution 5
// 22: représentant l'heure d'un jour (0-23).
// 45: représentant le segment de minute (0-59) du temps lu.
// 00: représentant le segment de secondes (0-59) du temps lu.
var date = new Date(2016, 0, 26, 22, 45, 00);
console.log(date);

// Execution 6
// "March 26, 2016": est une chaîne de caractère représentant une date. 
// La chaîne doit être dans la format utiliser ici.
var date = new Date("March 26, 2016");
console.log(date);

// Execution 7
// Renvoie le jour (date) du mois (1-31) pour la date spécifiée selon le temps universel.
var date = new Date();
console.log(date.getUTCDate());

// Execution 8
// Renvoie le mois (0-11) pour la date spécifiée selon le temps universel.
var date = new Date();
console.log(date.getUTCMonth());

// Execution 9
// Renvoie l'année (avec 4 chiffres pour une année à 4 chiffres) pour la date spécifiée selon l'heure locale
var date = new Date();
console.log(date.getFullYear());

// Execution 10
// Renvoie l'année (habituellement avec 2 ou 3 chiffres) 
// pour la date spécifiée selon l'heure locale. Utilisez plutôt getFullYear().
var date = new Date();
console.log(date.getYear());

// Execution 11
// Définit l'année complète (4 chiffres pour une année à 4 chiffres) pour la date spécifiée selon l'heure locale.
var date = new Date();
console.log(date.setFullYear(2020));

// Execution 12
// La comparaison des deux dates ici (date1 et date2) renvoie 'false'
// même si ils on été définis de la même manière, parce que Date est un objet de type référence,
// donc ils sont des objets differents, donc l'opérateur de comparaison vas renovyer false
var date1 = new Date(10, 10, 2000);
var date2 = new Date(10, 10, 2000);
console.log(date1 === date2); //false

// Execution 13
// getTime() Renvoie la valeur numérique de la date spécifiée sous la forme du nombre de millisecondes 
// depuis le 1er janvier 1970, 00:00:00 UTC (les valeurs renvoyées pour les dates antérieures seront négatives).
// donc ici nous comparons des valeurs numérique qui sont égales, donc la comparison return true
var date1 = new Date(10, 10, 2000);
var date2 = new Date(10, 10, 2000);
console.log(date1.getTime() === date2.getTime()); //true