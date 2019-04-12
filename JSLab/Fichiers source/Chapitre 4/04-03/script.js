// Execution 1
// Ici quand i est égale a 5, le reste de l'itération va être ignoré, 
// et une nouvelle itération vas commencer.
for(var i = 0; i <= 10; i++) {
    if(i === 5) {
      continue;
    }
    console.log("for : " + i);
}

// Execution 2
// La boucle vas continuer à chaque fois qu'il rencontre un nombre paire
for(var i = 0; i <= 10; i++) {
    if(i % 2 === 0) { continue;}
    console.log("for : " + i);
}

// Execution 3
// Exemple de boucle while infinie accidentel avec continue
var i = 0;
while( i <= 10) {
  if(i === 5 ) { continue; }
  console.log(i);
  i++;
}

// Execution 4
// Nous avons ajouter un autre opérateur d'incrémentation quant i === 5 
// pour ne pas tomber dans une boucle infinie accidentellement.
while( i <= 10) {
  if(i === 5 ) { i++; continue; }
  console.log(i);
  i++;
}

// Execution 5
// Exemple de continue lors d'une boucle à l'intérieur d'une autre
for(var i = 0; i <= 5; i++) {
    if(i % 2 === 0) { continue; } 
    for(var j = 0; j <= 5; j++) {
        if(j === 3) {continue;}
        console.log(i + " - " + j);
    }
}

// Execution 5
// Exemple de continue avec une étiquette
boucle1: for(var i = 0; i <= 5; i++) {
    if(i % 2 === 0) { continue; } 
        for(var j = 0; j <= 5; j++) {
            if(j === 3) {continue boucle1;}
            console.log(i + " - " + j);
        }
    }