// Execution 1
// La condition entre parenthèses sur la ligne 5 indique à la boucle de continuer à exécuter
// le code entre les accolades tant que « i » est inférieur à 10. 
var i = 0;

while(i <= 10) {
    console.log("log :" + i);
    i++;
}

console.log("La nouvelle valeur de i est :" + i);

// Execution 2
// Exemple de boucle while qui affiche uniquement les nombres pairs de 2 à 20

var i = 2;

while(i <= 20) {
    console.log("log :" + i);
    i += 2;
}

console.log("La nouvelle valeur de i est :" + i);

// Execution 3
// Exemple de boucle while qui fait un compte à rebours 
// qui part du chiffre le plus élevé et qui va vers zéro, 
// les nombres vont en décroissant. 

var i = 20;

while(i >= 0) {
    console.log("log :" + i);
    i--;
}

console.log("La nouvelle valeur de i est :" + i);

// Execution 4
// Exemple de boucle while infinie.

var i = 20;
while(i >= 0) {
    console.log("log :" + i);
}

// Execution 5
// Exemple d'instruction "if else" à l'intérieur d'une boucle while

var i = 20;

while(i >= 0) {
    
    if(i === 10) {
        console.log("Dix");
    }
    else{
        console.log("log :" + i);
    }

    i--;
}

console.log("La nouvelle valeur de i est :" + i);

// Execution 6
// Exemple de boucle while infinie accidentel
var i = 20;

while(i >= 0) {
    
    if(i === 10) {
        console.log("Dix");
    }
    else{
        console.log("log :" + i);
         i--;
    }
}

// Execution 7
// Dans une boucle do...while, la condition vient après le bloc de codes que vous souhaitez exécuter.
// Il est également important de terminer avec un point-virgule. 
// Noter que le code dans une boucle do... while 
// sera toujours exécutée une fois, même si la condition n'est jamais vraie.

var i = -1;

do {
  i--;
  console.log("log : ", i);
} while( i >= 0);