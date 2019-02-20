/* LES VARIABLES

-La vie eternelle-

var annee = prompt("Quel est votre age?");
var anneeRestant = prompt("Combien d'annees pensez vous encore vivre ?");
var boisson = "cafe";
var consoBoisson = 2;
var portions = (2*365)*anneeRestant;
var prixTotal = (portions/36)*3.42
alert("Il vous reste a boire " +portions+ " tasses de " +boisson+ " pour les " + anneeRestant + " prochaines annees. Il vous en coutera encore " + prixTotal);


***

-Decomposition d'un probleme en variables-

var result = (1 + 2) * 3 + 4 / 2; (Decompostion du probleme, respecter l'ordre des priorites mathematiques)
var A = 1 + 2;
var B = 3;
var C = 4 / 2;
result = A * B + C
alert(result);

***

*/

/* LA LOGIQUE 

-Choix de langue-

var Fr = "Fr",
	Es = "Es",
	En = "En";
var messageFr = "Bonjour tout le monde",
	messageEs = "Hola, Mundi",
	messageEn = "Hello, World";
var answer = prompt("Quelle est votre langue Fr/Es/En?");
    if (answer == Fr) { 
	    alert(messageFr);
    } else if (answer == Es) {
    alert(messageEs);
	} else if (answer == En) {
	alert(messageEn);
    } 

***

-Affichage des scores-

var score = prompt("Quel est le score?");
var A = (score >= 90),
	B = (score > 50),
	C = (score <= 50);
var result = null;
	if (A) {
	alert("Vous avez le rang A");
    } else if (B) {
 	alert("Vous avez le rang B");
	} else if (C) {
	alert("Vous avez le rang C");
    }

***

-Mettre au pluriel-

var motSingulier = "competence",
    nombreItem = 1,
    resultat = "Je possede " +nombreItem+ " " +motSingulier;
    if (nombreItem > 1) {
        alert(resultat + "s");
        } else {
            alert(resultat);
        }

***

- Le SWITCH - 

var jourSemaine = prompt('Quel jour de la semaine etes-vous le plus productif ? (lundi au dimanche)');
switch (jourSemaine) {
    case 'lundi':
        alert("C'est bien, toi t'as prevu tes tartines et tout non ?");
    break;
    case 'mardi':
        alert("Toi t'as rate ton lundi et t'essayes de rentrer dans la course.");
    break;
    case 'mercredi':
        alert("Garde le cap.");
    break;
    case 'jeudi':
        alert("Pile au milieu de semaine, c'est la moyenne a-ce-kip");
    break;
    case 'vendredi':
        alert("Arrete tes couilles, tu donnes le coup de boost avant le weekend toi?");
    break;
    case 'samedi':
        alert("Ta madre elle fait des petits gateaux c'est ca ?");
    break;
    case 'dimanche':
        alert("MDR Apres une grasse mat' tu donnes tout ce que t'as? ");
    break;
    default:
        alert("C'est pas un jour ca !")
}

*/



/*  LES FONCTIONS

var soustraction = function(a,b) {
    return a - b;
    } 
var addition = function(a,b) {
    return a + b;
    }
var multiplication = function(a,b) {
    return a * b;
    }
var division = function(a,b) {
    return a / b;
    }  

***

var pourcentageDe = prompt("Quel pourcentage de la valeur vous souhaitez?");
var valeur = prompt("Quelle valeur");

function calculPour100(pourcentageDe,valeur) {
        return Math.floor(pourcentageDe*valeur/100);  
        }

var reponse = calculPour100(pourcentageDe,valeur);
alert("Le pourcentage de la valeur est " + reponse);

***

var distance = prompt("Quelle est la distance a parcourir ?"),
    tempsHeure = prompt("Combien d'heures ont ete necessaires pour parcourir la distance ?");

    function calculVitesse(distance, tempsHeure) {
            return Math.floor(distance/tempsHeure);
            }
var vitesse = calculVitesse(distance, tempsHeure); 
alert("Votre vitesse est de " +vitesse+ " km/h");

/////
- Demander un nombre a un user - 

v.1


function askNumber () {  // Fonction demandant un nombre a l'utilisateur
    var string, number; // declaration d'une variable string et number
    while (true) { // une boucle qui va se repeter tant que l'user ne met pas un nombre correct 
    string = prompt("Veuillez entrer un nombre"); // est demande au user d'entrer un nombre 
    number = parseInt(string); // le nombre en "string" insere sera converti en nombre
        if (!isNaN(number)) { // si c'est bien un nombre, la fonction le retourne avec un return .
            return number;
        }
    }
}
alert('Le nombre est ' + askNumber()); // affichage alert avec un string et le return de la fonction askNumber

v.2

function askNumber(){ // Fonction demandant un nombre a l'utilisateur
    var number; // declaration d'une variable number

    while (isNaN(number)) { // le test isNan est dans un boucle conditionnelle 'while'
        number = parseInt(prompt('Entrez un nombre entier positif')); // la chaine de caracteres de l'user est converti en nombre et assigne a la variable 'nombre' 
    }

    return number; // la fonction retourne la variable 'nombre'
}

alert('Le nombre est ' + askNumber()); // affichage alert avec un string et le return de la fonction askNumber


*/


/*  LES BOUCLES
////
- Simple boucle While - 
var note = 1;
while (note <= 10) {
	alert("Vous avez la note numero " + note);
	note++;
}
////
- Pair et impair -

var increment = 0;
while (increment < 20) {
    increment = increment + 1;
    function nbrePair(increment) {
        if (increment/2 == Math.round(increment/2)) {
            return "pair";
        } else {
            return "impair";
        };
    } 
    var parite = nbrePair(increment);
    console.log(increment + " est un chiffre " + parite);
}


- Multiplication Tables - 

var increment = 0;
while (increment < 10) {
    increment = increment + 1;
    function operationMultiplication(increment) {
        return increment * 9;
} 
var result = operationMultiplication(increment);
console.log(increment + " * 9 = " + result);
}

- Assigner des grades - 

var increment = 0;
while (increment < 100) {
    increment = increment + 1;
    function grade(increment) {
        var A = "grade A, excellence",
            B = "grade B, correct",
            C = "grade C, a peine suffisant",
            D = "grade D, pas bon",
            F = "grade F, a retravailler";
        if (increment >= 90) {
            return A;
        } else if (increment >= 80) {
            return B;
        } else if (increment >= 70) {
            return C; 
        } else if (increment >= 65) {
            return D;
        } else {
            return F;
        }
        
    } 
    var result = grade(increment);
    console.log("Pour " + increment + " points vous avez le " + result);
}

- Pyramide - 


V.1
var star = ['* ', '* * ', '* * * ', '* * * * ', '* * * * * ']
console.log(star[0]);
console.log(star[1]);
console.log(star[2]);
console.log(star[3]);
console.log(star[4]);


V.2
var star = ['* ']
console.log(star[0].repeat(1));
console.log(star[0].repeat(2));
console.log(star[0].repeat(3));
console.log(star[0].repeat(4));
console.log(star[0].repeat(5));


V.3
let star = '' ;
for (i=0;i<5;i++) {
    for (j=0;j<=i;j++) {
        star += '*' ;
    } 
    star += '\n';
}
console.log(star);


V.4 (the best, @Pierre-Louis)
var star = " " 
for (var b = 0; b < 5; b++) {
     star = " *" + star;
     console.log(star); 
    };

V.5 (pyramide inversee / pyramide centrale)

*/


/* LES TABLEAUX 

let helloFrom = function (personName) {
    return "Bonjour de " + personName;
}
let people = ["Tom", "Yoda", "Ron"];
people.push("Bob", "Dr Mal");
for (let i = 0; i < people.length; i++) {
    let greeting = helloFrom(people[i]);
    console.log(greeting);
}

- Addition - 

(a tester)
const array = [1,2,3,4,5,6,7,8,9];
function somme(a,b) {
    return a + b;
}
array.reduce(function(a,b))

- Join - 

var cousinsArray = ['','Celui', 'Dont', 'On', 'Ne', 'Prononce', 'Pas', 'Le', 'Nom'];
var cousinsArray2 = cousinsArray.join(' #');
alert(cousinsArray2);

- Stocker elements dans tableau + join avec virgule -

var prenoms = [], // creation d'un tableau vide
    prenom;

while (prenom = prompt("Entrez un prenom: ")) { //boucle while qui va demander d'encoder et enregisrer dans la variable 'prenom'
    prenoms.push(prenom); // on ajoute chaque insertion dans le tableau 'prenoms'
}

if (prenoms.length > 2) { // on va regarder le nombre d'items 
    alert(prenoms.join(', ')); // affiche les prenoms a la suite
} else {
    alert('Il n\'y a pas assez d\'elements dans le tableau');
}

*/




/* OBJETS 
 
- Acces aux objets / Ajout d'item - 

var myObject = {
    item1: 'Texte 1',
    item2: 'Texte 2',
    item3: {
        paraph1: 'debut',
        paraph2: 'milieu',
        paraph3: 'fin'
    }
};

//alert(myObject.item3.paraph1); // va afficher 'debut'

//var id = 'item2'; // on met l'identifiant dans une variable
//alert(myObject[id]); // va afficher 'Texte 2'

//myObject['item4'] = 'Index'; // ajout item
//alert(myObject.item4); 





*/





/*
TIPS: 

- HOW TO CONVERT STRING IN NUMBERS WITH PARSING -
var first, second, result; 
first = prompt('Entrez le premier chiffre :');
second = prompt('Entrez le second chiffre: ');
result = parseIt(first) + parseInt(second);
alert(result); 

- CONFIRMER l'EXECUTION DU CODE .JS SUR UNE PAGE -
if (confirm('Voulez-vous exécuter le code JavaScript de cette page ?')) {
    alert('Le code a bien été exécuté !');
}


*/