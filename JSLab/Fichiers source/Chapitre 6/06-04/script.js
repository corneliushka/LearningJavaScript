// Execution 1
// Si nous executons cela, nous allons rien voire, car on n’a fait aucune instruction
// pour afficher n’importe quoi à partir de l’intérieur de la fonction, 
// comme nous l'avons fait précédemment avec console.log().
function calculerSomme(valeur1, valeur2) {
  var somme = valeur1 + valeur2;    
}

calculerSomme(3, 4);

// Execution 2
// Si nous essayons d'alerter somme de l'extérieur de la fonction,
// nous allons avoir une erreur qui dit que la variable somme est indéfinie,
// car " somme" est une variable qui existe uniquement dans la fonction,
// il n'existe pas à l'extérieur de la fonction.
function calculerSomme(valeur1, valeur2) {
  var somme = valeur1 + valeur2;  
}

alert(somme); 
calculerSomme(3, 4);

// Execution 3
// L'instruction return met fin à l'exécution d'une fonction
// et définit une valeur à renvoyer à la fonction appelante.
// L'expression qu'on souhaite retourner, si elle est absente, 
// la valeur retourner par défaut sera undefined.

function calculerSomme(valeur1, valeur2) {
  var somme = valeur1 + valeur2;  
  return somme;
}

var resultat = calculerSomme(3, 4);
alert(resultat);

// Execution 4
// Nous n'avons pas besoin d'alerter le premier resultat à l'écran. 
// Nous pourrions, à la place, faire plus d'opérations avec, 
// nous pourrions appeler «calculerSomme» encore une fois, prendre 3 et l’ajouter à "résultat1".
function calculerSomme(valeur1, valeur2) {
  var somme = valeur1 + valeur2;  
  return somme;
}

var resultat1 = calculerSomme(3, 4);
var resultat2 = calculerSomme(3, resultat1);
alert(resultat2);

// Execution 5
// Il est désormais possible pour une fonction d'avoir plusieurs instructions return, 
// mais juste une seule instruction return sera exécuté.
function verifierEmail() {
  var champ = document.getElementById("e-mail");
  if(champ.value === "") {
      return true;
  }
  else {
      return false;
  }    
}

var resultat = verifierEmail();
if(resultat === true) {
    alert("Une adresse e-mail est obligatoire");
}

// Execution 6
// Lorsqu'une instruction return est utilisée dans une fonction, 
// l'exécution de la fonction se termine. 
// Donc dans cette exemple nous allons nous contenter de retourner la valeur, 
// au lieu d'utiliser l'instruction break.
// Une toute dernière chose a mentionné, c'est que nous pouvons pas sauter de ligne 
// entre le mot clé « return » et la valeur à retourner.
function obtenirJour(nbr) {
    switch (nbr) {
        case 0: return "Lundi";
        case 1: return "Mardi";
        case 2: return "Mercredi";
        case 3: return "Jeudi";
        case 4: return "Vendredi";
        case 5: return "Samedi";
        case 6: return "Dimanche";
    }
}

var jour = obtenirJour(2);
alert(jour);