// Execution 1
function moyenne(mesNotes) {

  var resultat = 0;

  for(var i = 0; i < mesNotes.length; i++) {
    resultat += mesNotes[i];
  }

  return resultat / mesNotes.length;

}

var mesNotes = [12, 14, 16];
var resultat = moyenne(mesNotes);

console.log(moyenne);
console.log(resultat);



// Execution 2
function moyenne(mesNotes) {

  var resultat = 0;

  for(var i = 0; i < mesNotes.length; i++) {
    resultat += mesNotes[i];
  }

  return resultat / mesNotes.length;

}

var mesNotes = [12, 14, 16];
var resultat = moyenne;

console.log(moyenne);
console.log(resultat);


// Execution 3
function moyenne(mesNotes) {

  var resultat = 0;

  for(var i = 0; i < mesNotes.length; i++) {
    resultat += mesNotes[i];
  }

  return resultat / mesNotes.length;

}

var mesNotes = [12, 14, 16];
var resultat = moyenne;

console.log(moyenne);
console.log(resultat(mesNotes));


// Execution 4
function moyenne(mesNotes, suivant) {

  var resultat = 0;

  for(var i = 0; i < mesNotes.length; i++) {
    resultat += mesNotes[i];
  }

  suivant(resultat / mesNotes.length);

}

var mesNotes = [12, 14, 16];
moyenne(mesNotes, function(resultat) {
  console.log(resultat);
});



// Execution 5
function moyenne(mesNotes, suivant) {

  var resultat = 0;

  for(var i = 0; i < mesNotes.length; i++) {
    resultat += mesNotes[i];
  }

  suivant(resultat / mesNotes.length);

}

function suivant(resultat) {
  console.log(resultat);
}

var mesNotes = [12, 14, 16];
moyenne(mesNotes, suivant);

// Execution 6
function afficher(message) {

  function afficher_message() {
    console.log("Message: " + message);
  }

  return afficher_message;

}

var afficher_bonjour = afficher("Bonjour tout le monde!");
afficher_bonjour();



// Execution 7
function balise_HTML(balise) {

  function emballer_text(text) {
      console.log("<" + balise + ">" + text + "</" + balise + ">");
  }

  return emballer_text;

}

var afficher_h1 = balise_HTML("h1");
console.log(afficher_h1);


// Execution 7
function balise_HTML(balise) {

  function emballer_text(text) {
      console.log("<" + balise + ">" + text + "</" + balise + ">");
  }

  return emballer_text;

}

var afficher_h1 = balise_HTML("h1");
afficher_h1("Ceci est mon premier titre.");
afficher_h2("Ceci est mon deuxième titre.");

var afficher_paragraph = balise_HTML("p");
afficher_paragraph("Ceci est mon premier paragraphe");
afficher_paragraph("Ceci est mon deuxième paragraphe");




