// Execution 1
// « this » réfère à l'objet global.
// Donc «this» fait référence à l'objet globale lorsque vous êtes dans la portée globale.
console.log(this);

// Execution 2
// « this » ici réfère aussi à l'objet global.
// Donc «this» fait référence à l'objet globale lorsque vous appelez une fonction de cette façon.
function test1(){
    console.log(this);
}

test1();

// Execution 3
// Lorsqu'une fonction est appelée en tant qu’une méthode d'objet, 
// «this» fait référence à l'objet qui appelle la méthode.
function Personne(nom_complet, age, administrateur) {
    this.nom_complet = nom_complet;
    this.age = age;
    this.administrateur = administrateur;
    this.afficherThis = function() {
        console.log(this);
    }
}

var personne = new Personne("François chaloux", 32, false);
personne.afficherThis();