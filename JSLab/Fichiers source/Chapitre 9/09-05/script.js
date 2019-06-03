// Execution 1
// setTimeout exécute un morceau de code ou une fonction après un délai determiné.
setTimeout(function() {
    console.log("Bonjour tout le monde!");    
}, 1000);

// Execution 2
// Appelle une fonction de manière répétée, avec un certain délai fixé entre chaque appel.
setInterval(function() {
    console.log("Bonjour tout le monde!");    
}, 1000);

// Execution 3
// intervalID est un ID unique d'intervalle qui peut être passé à clearInterval()
// clearInterval stop le fonctionnementde de setInterval
// et clearTimeout stop le fonctionnementde de setTimeout.
var compteur = 0;
var intervalID = setInterval(function() {
    if(compteur > 5) {
        clearInterval(intervalID);
    }
    console.log("Bonjour tout le monde!");   
    compteur++; 
}, 1000);
