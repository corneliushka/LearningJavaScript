// Execution 1
// Exemple de boucle for qui s'exécute tant que  i <= 10, 
// et où le compteur s'incrémente par un à chaque itération.

for(var i = 0; i <= 10; i++) {
    console.log("for : " + i);
}

// Execution 2
// Exemple de boucle for qui s'exécute tant que  i <= 10, 
// et où le compteur s'incrémente par deux à chaque itération.

for(var i = 0; i <= 10; i += 2) {
    console.log("for : " + i);
}

// Execution 3
// Exemple de boucle for qui fait un compte à rebours 
// qui part du chiffre le plus élevé et qui va vers zéro, 
// les nombres vont en décroissant. 

for(var i = 10; i >= 0; i--) {
    console.log("for : " + i);
}