// Execution 1
// Comme la commande prompt retourn un string, le resultat de certificationsMicrosoft + certificationsOracle
// sera different de ce que nous attendions 
var certificationsMicrosoft = prompt("Combien de certifications Microsoft avez-vous?");
var certificationsOracle = prompt("Combien de certifications Oracle avez-vous?");

var certifications = certificationsMicrosoft + certificationsOracle;
alert(certifications);

// Execution 2
var certificationsMicrosoft = prompt("Combien de certifications Microsoft avez-vous?");
var certificationsOracle = prompt("Combien de certifications Oracle avez-vous?");

// La fonction parseInt() analyse la chaîne de caractères passée entre parenthèse.
// Un nombre sans virgule est obtenu à partir de l'analyse de la chaîne de caractères. 
var certifications = parseInt(certificationsMicrosoft) + parseInt(certificationsOracle);
alert(certifications);

// La fonction parseFloat() analyse la chaîne de caractères passée entre parenthèse.
// un nombre flottant est obtenu à partir de l'analyse de la chaîne de caractères.
// Donc le resulat sera le nombre: 3.14
parseFloat("3.14");

// L'analyse de la chaîne s'arrête dès qu'un caractère qui n'est pas un chiffre est trouver,
// ce caractère, ainsi que les suivants, seront ignorés.
// Le resulat sera le nombre: 3.14
parseFloat("3.14 Bonjour tout le monde!");

// Si le premier caractère ne permet d'obtenir un nombre, ce sera NaN qui sera renvoyé.
parseFloat("Bonjour 3.14 Bonjour tout le monde!");

// Un nombre sans virgule est obtenu à partir de l'analyse de la chaîne de caractères. 
// Donc le resulat sera le nombre: 14
parseInt("3.14");
