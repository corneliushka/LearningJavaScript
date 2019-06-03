// execution 1
// La barre oblique inversée suivie de guillemet ou d'apostrophe
// déclenche une interprétation alternative du guillemet ou de l'apostrophe,
// Cela signifie que JavaScript va supprimer la barre oblique inversée et ne va afficher que le guillemet 
// ou l'apostrophe à l'intérieur de la chaîne 
"un \"string\", c'est quoi?"

// execution 2
// Nous obtenons un message d'erreur ici,
// car la façons dont vous devez saisir ce string et la suivante
// "un /"string/", c'est quoi?"
"un "string", c'est quoi?"


// execution 3
// douze de la ligne 1 et douze de la ligne 2
// sont deux choses différentes en ce qui concerne javascript.
"12"
12

// execution 4
// Le signe "+" va assembler le contenue de "monPrenom"
// avec l'espace entre les guillemets doubles,
// et le centenu de "monNomDeFamille",
// puis la fonction "alert" affichera le String "François Fremont"

var monPrenom = "François";
var monNomDeFamille = "Fremont";

var monNomComplet = monPrenom + " " + monNomDeFamille;
alert(monNomComplet);



