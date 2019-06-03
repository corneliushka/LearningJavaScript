// Execution 1
// Dans l'exemple suivant, on itère sur le tableau mesClients en utilisant la propriété length 
// afin de connaître son nombre d'élément. La valeur de chaque élément est ensuite afficher dans la console.
var mesClients = ["Sara", "Francis", "Robert", "Alpha"]; 
for(var i = 0; i < mesClients.length; i++) {
    console.log(mesClients[i]);
}

// Execution 2
// Dans le cas d'un parcours de tableau utilisant for...in, 
// on pourrait très bien avoir un ordre qui ne soit pas le même entre les différents environnements. 
// Pour cette raison, il est préférable d'utiliser une boucle for ou une boucle forEach 
// lorsqu'on souhaite parcourir des tableaux dans un ordre bien défini.
var mesClients = ["Sara", "Francis", "Robert", "Alpha"]; 
for(var index in mesClients) {
    console.log(index + " est " + mesClients[index]);
}

// Execution 3
// forEach() exécute la fonction entre les parenthèses une fois pour chaque élément du tableau, 
// dans l'ordre croissant des indices, donc console.log va être exécuter 4 fois
var mesClients = ["Sara", "Francis", "Robert", "Alpha"]; 
mesClients.forEach(function () {
    console.log("Bonjour tout le monde!");
});

// Execution 4
// Lorsque forEach() exécute la fonction entre les parenthèses,
// on peut accéder à l'élément auquelle elle est exécuté 
// par la variable placer entre les parenthèse, qui est dans ce cas l'attribut 'nom'.
var mesClients = ["Sara", "Francis", "Robert", "Alpha"]; 
mesClients.forEach(function (nom) {
    console.log("Bonjour " + nom + "!");
});
