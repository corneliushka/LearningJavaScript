// Execution 1
// La déclaration function permet de définir une fonction.
// Le navigateur mémorise la fonction en mémoire et il est prêt à agir dès que nous l'appelons. 
function consoleAleatoire() {
    var nombreAleatoire = Math.floor( Math.randoom() * 100 ) + 1;
    console.log(nombreAleatoire);
}

// Execution 2
// Afin d'appeler une fonction, il suffit da tapper le nom de la fonction suivit des parenthèse. 
// Les parenthèses c'est ce qui appelle la fonction. 
function consoleAleatoire() {
    var nombreAleatoire = Math.floor( Math.randoom() * 100 ) + 1;
    console.log(nombreAleatoire);
}

consoleAleatoire();

// Execution 3
// Pour utiliser une fontion à plusieurs reprises,
// il suffit de l'appeler à nouveau. 
function consoleAleatoire() {
    var nombreAleatoire = Math.floor( Math.randoom() * 100 ) + 1;
    console.log(nombreAleatoire);
}

consoleAleatoire();
consoleAleatoire();
consoleAleatoire();
consoleAleatoire();

// Execution 4
// Une expression de fonction est très similaire et a presque la même syntaxe qu'une déclaration de fonction. 
// Une expression de fonction vous permet d’affecter une fonction anonyme à une variable.
var consoleAleatoire = function () {
    var nombreAleatoire = Math.floor( Math.randoom() * 100 ) + 1;
    console.log(nombreAleatoire);
};

consoleAleatoire();
consoleAleatoire();
consoleAleatoire();
consoleAleatoire();