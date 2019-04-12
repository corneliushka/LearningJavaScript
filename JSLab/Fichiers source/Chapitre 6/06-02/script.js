// Execution 1
// Lorsqu'on appellera la fonction calculerScore(1), 
// cela aura pour effet de créer une variable "points" avant d'exécuter la fonction, 
// et cette variable aura pour valeur 1 et elle sera détruite une fois la fonction exécutée.
var monScore = 0;
function calculerScore(points) {
    monScore += points;
    console.log(monScore);
}

calculerScore(1);
calculerScore(5);
calculerScore(1);
calculerScore(10);
