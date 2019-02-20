# [JavaScript Cheatsheet 1 - #VARIABLES #BOUCLES   ]

(export de Google Keep) 

OpenClassRooms : https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1916776-introduction-au-javascript  
Grafikart (Youtube) :  https://www.youtube.com/watch?v=PIU_2SBSZgw&list=PLjwdMgw5TTLVzD9Jq_WBd1crqDwXRn4cw  



JavaScript est un langage dit de "client-side", cad que les scripts sont executes par le navigateur chez l'internaute (le client). Contrairement aux langages (ex: PHP) dits server-side qui sont executes par le serveur web, qui vont "creer" la page web envoyee au navigateur. 
var number = 0;
var output = number++;

alert(number); // Affiche : « 1 »
alert(output); // Affiche : « 0 »
Schema suivant : 
• le visiteur-client demande une page au serveur,  
• le serveur envoie la page HTML et le Javascript,  
• le navigateur du client affiche le HTML et execute le Javascript.  

__La boite de dialogue__
- alert() : est une fonction permettant d'afficher une boite de dialogue qui contient un message.

__La syntaxe du JavaScript__

- L'indentation se fait generalement avec 4 espaces (2 tabulations) pour une meilleure visibilite, c'est une aide a la lecture.

- Les commentaires sont importants pour expliquer le fonctionnement d'un script; il y a les commentaires de fin de ligne ( // ) ou les commentaires multi-lignes (/*   */).

 - La fonction est composee de deux choses, son nom suivi d'un couple de parantheses (ouvrante et fermante), EX : myFunction().

 - Le code JavaScript est insere dans la page HTML au moyen de l'element <script>, qui contient un attribut "type" servant a indiquer le type de langage que l'on va utiliser.

 - Le JavaScript externe : il est conseille d'ecrire le code JavaScript dans un fichier externe, portant l'extension ".js", il est ensuite appelle depuis la page Web au moyen de l'element <script> et de son attribut src=" " qui contient l'URL du fichier .js . 
EX:     <script src="hello.js"></script>

- Une page web est lue par le navigateur de facon lineaire, d'abord le <head> puis les elements du <body>. Une bonne pratique pour accellerer le chargement de la page est de mettre les elements <script> juste avant la fermeture de l'element <body>, afin d'etre charge en dernier.

## LES #VARIABLES 

- Une fois declaree, va servir a stocker des donnees (une valeur). Le nom d'une variable ne peut contenir que des cara teres alphanumeriques (A-Z, 0-9, _ et $ sont acceptes). Attention: le nom ne peut pas commencer par un chiffre et et ne peut etre utilise de mots cles utilises par JavaScript, cad les "mots reserves" (sauf si par exemple "var_", combine a un autre caractere). 

- le mot cle "var" indique qu'on va declarer une variable, ensuite il n'est plus necessaire de l'utiliser pour cette variable-la et on peut y stocker ce qu'on veut. 

- le signe "=" sert a attribuer une valeur a la variable. Lorsqu'on affecte une valeur a une variable, c'est *l'affectation*. 
EX:                                          var myVariable = 5.5;

-  Il est possible de declarer plusieurs variables a la suivre avec 1 seul mot cle "var", il suffit alors de mettre une virgule (,) apres l'affectation de chacune et finir par le point virgule (;). EX:
var	 maVariableAlpha = 2,	
	 maVariableBeta = maVariableAlpha + 3,
	 maVariableGamma = maVariableAlpha + maVariableBeta;

__Types de variables__ 

• Type numerique (alias *number*) : tout comme les autres langages, le JavaScript reconnait plusieurs ecritures pour les nombres, comme l'ecriture decimale (ex: var numiber = 5.5; ) ou l'ecriture scientifique (ex: var number 3.65e+5;) ou encore l'ecriture hexadecimale (var number = 0x391;).  

• Chaines de caracteres (alias *string*) : represente n'importe quel texte. 
On peut l'assigner de deux facons, avec des guillemets " "; ou avec des apostrophes ' ';
Lorsqu'on met une variable nombre en string, elle devient un chaine de caracteres et non plus un string. 
Si on veut mettre inserer des apostrophes ou guillemets dans le texte pour encadrer, alors inserer \" ou \' pour faire signifier au moteur JavaScript cela. 
(EX: var text = 'Ça c\'est quelque chose !'; )

• Les booleens (alias *boolean*) : un type bien particulier qui n'aura que deux etats : vrai ou faux (true / false). 

__Tester l'existence de variables avec **typeof**__
Variables
Si un jour on a besoin de tester l'existence d'une variable ou de verifier son type, l'instruction *typeof* est tres utile. 
EX:
var number = 2;
alert(typeof number); // Affiche : « number »
*
var text = 'Mon texte';
alert(typeof text); // Affiche : « string »
*
var aBoolean = false;
alert(typeof aBoolean); // Affiche : « boolean »

Si l'instruction nous renvoie "undefined", c'est que soit la variable est inexistante, soit qu'elle est declaree mais ne contient rien. 

__Les operateurs arithmetiques__ 

addition : +
soustraction : -
multiplication : *
division : /
modulo : % . Ce dernier operateur est simplement le reste d'une division. 

Pour faire une operation a une variable deja affectee, on peut utiliser +=, -=, *=, /= ou %= ; EX:
var number = 3;
number += 5;
alert(number); // Affiche : « 8 »


/!\ Lorsqu'on fait une operation arithmetique entre un string et un number (ex: "Salut les gens" * 4), on obtient un NaN ( = Not a Number) pour nous prevenir que cela ne donne rien. 

__Concatenation et conversion des types__

• La concatenation consiste a ajouter une chaine de caracteres a la fin d'une autre. EX:
var hi = 'Bonjour', name = 'toi', result;
result = hi + name;
alert(result); // Affiche : « Bonjourtoi »
L'espace est a ajouter manuellement a une variable. 
Il est possible aussi de faire la concatenation d'addition avec +=. 

__Interagir avec l'utilisateur__

• La fonction prompt ( ) s'utilise comme alert ( ), elle renvoie ce que l'utilisateur a ecrit sous forme d'une chaine de caracteres. 
EX:  
var text = prompt('Tapez quelque chose :');
Ainsi le texte tape sera stocke directement dans la variable "text".

__Convertir une chaine de caracteres en nombre__

var first, second, result;
first  = prompt('Entrez le premier chiffre :');
second = prompt('Entrez le second chiffre :');
result = first + second;
alert(result);

Si on essaye ce code, on remarque qu'il y a un probleme. En effet, le texte de prompt() est recupere sous forme d'une chaine de caracteres, chiffre ou non. Du coup l'operateur + fera une concatenation (meme si on insere des chiffres) !

Il suffit alors de convertir la chaine de caracteres en nombre. Pour cela, on aura besoin de la fonction parseInt ( ) . EX: 

var  text = '1337', 
	number;
number = parseInt(text);
alert(typeof number); // Affiche : « number »
alert(number); // Affiche : « 1337 »

__Structures conditionnelles (les conditions) : généralités__

• Base de toute condition: les booleens. La condition est une sorte de test pour verifier qu'une variable contient bien une certaine valeur. Les conditions sont constituees de valeurs a tester et de deux types d'operateurs : un *logique* et un de *comparaison*.

Operateurs de comparaison : 

• == : egal a 
•  != : different de
• === : contenu et type egal a 
• !== : contenu ou type different de
•  > : superieur a 
• >= : superieur ou egal a
• < : inferieur a 
• <= : inferieur ou egal a

Lorsqu'une condition est posee, on dit qu'elle est "verifiee" lorsqu'elle renvoie TRUE (et non verifiee si c'est FALSE). 

Precision sur le == : une comparaison entre 4 et '4' sera verifiee TRUE car meme contenu.
Precision sur le === : comparaison entre un 4 et '4' sera non verifiee car pas le meme type.

Les operateurs logiques : 
Fonctionnement sur le meme principe qu'une "table de verite" en electronique.

• && : ET (AND) : valeur1 && valeur2
Cet operateur verifie la confition lorsque toutes les valeurs qui lui sont passees valent TRUE. Si une seule d'entre elles vaut FALSE alors la condition n'est pas verifiee. EX:
var result = true && true;
alert(result); // Affiche : « true »
result = true && false;
alert(result); // Affiche : « false »
result = false && false;
alert(result); // Affiche : « false »

• || : OU (OR) : valeur1 || valeur2
Operateur plus "souple" car il renvoie TRUE si une des valeurs soumise contient TRUE, qu'importe les autres valeurs. 
var result = true || true;
alert(result); // Affiche : « true »
result = true || false;
alert(result); // Affiche : « true »
result = false || false;
alert(result); // Affiche : « false »

• ! : NON (NOT) : !valeur
Il se differencie des deux operateurs precedents car il ne prend qu'une seule valeur a la fois. S'il se nomme "NON", c'est que sa fonction est d'inverser la valeur qui lui est passee, ainsi TRUE deviendra FALSE et inversement. 
var result = false;
result = !result; // On stocke dans « result » l'inverse de « result »
alert(result); // Affiche « true » car on voulait l'inverse de « false »
result = !result;
alert(result); // Affiche « false » car on a inversé de nouveau « result », (on passe de « true » à « false »)

• Combiner les operateurs :  
EX:
var condition1, condition2, result;
condition1 = 2 > 8; // false
condition2 = 8 > 2; // true
result = condition1 && condition2;
alert(result); // Affiche « false »

=> Il est possible de raccourcir le code en combinant le tout sur une seule ligne : 

var result = 2 > 8 && 8 > 2;
alert(result); // Affiche « false »


__La condition "If Else"__

• Structure conditionnelle IF pour dire "SI"
De parentheses qui contiennent la condition a analyser, ou le booleen qui sera retourne par les operateurs conditionnels. 
Accolades permettant de definir la portion de code qui sera executee si la condition se verifie.

Le code s'execute si le booleen recu est TRUE, alors que FALSE empeche l'execution. EX:
if (2 < 8 && 8 >= 4) { // Cette condition renvoie « true », le code est donc exécuté
    alert('La condition est bien vérifiée.');
}
if (2 > 8 || 8 <= 4) { // Cette condition renvoie « false », le code n'est donc pas exécuté
    alert("La condition n'est pas vérifiée mais vous ne le saurez pas vu que ce code ne s'exécute pas.");
}

• La fonction confirm( ) : permet d'avoir en parametre une chaine de caracteres qui sera affiche a l'ecran et retournera un booleen en fonction de l'action de l'user (execution si OK donc TRUE, non-execution si 'annuler' et donc FALSE).
Tres pratique a utiliser avec les conditions. 
EX: 
if (confirm('Voulez-vous exécuter le code JavaScript de cette page ?')) {
    alert('Le code a bien été exécuté !');
}

• La structure ELSE pour dire "SINON". 
Si on veut faire executer un code lors de la verification d'une condition et un autre lorsque c'est pas le cas : il est possible de le faire avec deux conditions IF. 
/!\ Cependant la structure ELSE est plus optimale. 
Pour indenter les structures IF ELSE, on procede ainsi : 
if ( /* condition */ ) {
    // Du code…
} else {
    // Du code…
}


• La structure ELSE IF pour dire "SINON SI".
- Une premiere condition est a tester,
- Une deuxieme condition est presente et sera testee si la premiere echoue,
- Si aucune condition ne se verifie, la structure ELSE fait son travail.

EX:
var floor = parseInt(prompt("Entrez l'étage où l'ascenseur doit se rendre (de -2 à 30) :"));
if (floor == 0) {
	alert('Vous vous trouvez déjà au rez-de-chaussée.');
} else if (-2 <= floor && floor <= 30) {
	alert("Direction l'étage n°" + floor + ' !');
} else {
	alert("L'étage spécifié n'existe pas.");
}

/!\ La structure ELSE IF peut etre utilisee plusieurs fois de suite, il faut juste que la condition avec la structure IF soit juste avant. 

__La Condition Switch__

La condition IF ELSE est utile dans de nombreux cas, cependant pour faire du cas par cas, on utilise SWITCH. 

var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));
switch (drawer) {
    case 1:
        alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
    break;
    case 2:
        alert('Contient du matériel informatique : des câbles, des composants, etc.');
    break;
    case 3:
        alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
    break;
    case 4:
        alert('Contient des vêtements : des chemises, des pantalons, etc.');
    break;
    default:
        alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
}

- Le mot cle "switch est suivi de la variable a analyser et une paire d'accolades.
- Se trouvent dans les accolades tous les cas de figure pour la variable definis par le mot cle "case" suivi de la valeur a prendre en compte et " : ".
- A chaque fin de "case" on met un "break;" pour casser le switch et eviter l'execution du reste du code. 
- A la fin on peut ecrire le mot cle "default" suivi de deux points pour executer un code si aucun cas n'est rencontre.

/!\ Si on attend un chiffre dans le prompt, ne pas oublier de l'encadrer dans une fonction parseInt( ) afin de convertir le type de valeur, de string en nombre (pas necessaire si on specifie le string lors des case (ex: case '1' : ).

__Les ternaires__
L'operateur (ternaire) conditionnel de JavaScript comporte trois operandes et est utilise comme raccourci pour la declaration des instructions If...Else. Il se decompose comme suit :
- nom de la variable qui va accueillir le resultat de la ternaire,
- la variable qui sera analysee par la ternaire,
- un " ? " suivi d'une valeur (nombre, texte),
- " : " suivis d'une deuxieme valeur et enfin le point-virgule marquant la fin de la ligne d'instructions.
=> si la variable analysee vaut TRUE alors la valeur retournee par la ternaire est celle apres le " ? " 
=> si elle vaut FALSE alors la valeur retournee sera celle apres les " : " 

EX:
var startMessage = 'Votre catégorie : ',
    endMessage,
    adult = confirm('Êtes-vous majeur ?');
endMessage = adult ? '18+' : '-18';
alert(startMessage + endMessage);

__Conditions sur les variables__ 
=> lors d'une structure conditionnelle if/else, la variable est convertie en booleen (TRUE/FALSE) 
=> l'operateur OU / || : en plus de sa fonction principale, il permet de renvoyer la premiere variable possedant une valeur evaluee a TRUE. 

## LES #BOUCLES 

__L'incrementation__

Soit : 
	var number = 0;
	number = number + 1;

• L'incrementation permet d'ajouter une unite a un nombre au moyen d'une syntaxe courte : 
number++; ou bien ++number;  pour ajouter 1 (incrementer).
number--; ou bien --number; pour soustraire 1 (decrementer).

/!\ Si on place l'operateur ++ avant la variable, cela incremente la variable (number) et retourne la valeur de number incrementee (c'est a dire 1) :
var number = 0;
var output = ++number;
alert(number); // Affiche : « 1 »
alert(output); // Affiche : « 1 »

/!\ Si on place l'operateur apres la variable a incrementer, l'operation retourne la valeur de number avant qu'elle soit incrementee :
var number = 0;
var output = number++;
alert(number); // Affiche : « 1 »
alert(output); // Affiche : « 0 »

__La boucle WHILE__

• La boucle est une structure analogue aux structures conditionnelles, sauf qu'elle repete une serie d'instructions jusqu'a ce qu'on dise d'arreter. A chaque repetition de la boucle on parle d'iteration. 
• Il est necessaire de definir une condition pour le fonctionnement de la boucle. 
• Tant que la condition est vraie (TRUE), la boucle se repete. 
• Des que la boucle est fausse (FALSE), la boucle s'arrete. 
EX:
while (condition) {
    instruction_1;
    instruction_2;
    instruction_3;
}

• La boucle While se repete tant que la condition est validee/remplie (il faut s'arranger qu'a un moment elle ne soit plus vraie). 
EX:
var number = 1;
while (number < 10) {
    number++;
}
alert(number); // Affiche : « 10 »

• Ici la variable "proceed" est ce qu'on appelle une <<variable temoin>>, ou bien une variable de boucle. 
Tant qu'on incremente, les prenoms s'ajoutent, lorsque la variable "nick" est null, fin de la boucle
EX:
var nicks = '',
    nick,
    proceed = true;
    
    while (proceed) {
    	nick = prompt('Entrez un prénom :');
    	if (nick) {
        nicks += nick + ' '; // Ajoute le nouveau prénom ainsi qu'une espace juste après
    	} else {
        proceed = false; // Aucun prénom n'a été entré, donc on fait en sorte d'invalider la condition
    	}
}
alert(nicks); // Affiche les prénoms à la suite

• On peut mettre fin a une boucle avec "break" (apres le Else), le break s'utilise exactement comme dans la structure conditionnelle switch. 
• L'instruction "continue" peut s'utiliser a la place de "break" pour mettre fin a une iteration. Mais dans ce cas la boucle n'est pas stopee, elle passe a l'iteration suivante.

__La boucle FOR__

• La boucle FOR ressemble beuacoup au fonctionnement de la boucle WHILE, sauf que dans les parantheses on n'a pas seulement une condition mais 3 blocs : 
1 - l'initialisation : on initialise la variable, elle s'execute juste avant que la boucle ne demarre,
2...- la condition: s'execute avant chaque passage de boucle,
3 - l'incrementation : utilise pour incrementer une variable a chaque iteration de la boucle. S'utilise apres chaque passage de boucle.

for (var iter = 0; iter < 4; iter++) {
    alert('Itération n°' + iter);
}

• CONVENTION de programmmation : les  variables de boucles FOR sont généralement nommées *i*. Si une boucle se trouve dans une autre boucle, la variable de cette boucle sera nommée *j* , puis *k* et ainsi de suite.

• La portee des variables de boucle : il est déconseillé de declarer une variable au sein d'une boucle, mais la declarer immediatement dans l'initialisation. Mais une fois que la boucle est initialisee, 

## EN RESUME
* L'incrémentation est importante au sein des boucles. Incrémenter ou décrémenter signifie ajouter ou soustraire une unité à une variable. Le comportement d'un opérateur d'incrémentation est différent s'il se place avant ou après la variable.
* La boucle While permet de répéter une liste d'instructions tant que la condition est vérifiée. Si condition "FALSE", la boucle ne s'execute pas. 
* La boucle do While est une variante de While qui sera exécutée au moins une fois, peu importe la condition.
* La boucle For est une boucle utilisée pour répéter une liste d'instructions un certain nombre de fois. C'est donc une variante très ciblée de la boucle While, elle s'execute un nombre determinee de fois. 


*	*	*	*	*	*	*	*	*	*

# [JavaScript Cheatsheet 2 - #FONCTIONS ]

## LES #FONCTIONS __

L'avantage : reduit considerablement un code long/complexe juste en appelant la fonctione la contenant. 

__Creer sa 1ere fonction__

function myFunction(arguments) {
    // Le code que la fonction va devoir exécuter
}

• le mot cle "function" est present a chaque declaration de fonction.
• vient ensuite le mot cle de la fonction (ex: "myFunction").
• vient un couple de parantherses dans laquelle on declare des arguments/parameters, elles fournissent les infos a la fonction pour son execution. 
• vient un couple d'accolades contenant le code que la fonction devra executer (et utilisant les arguments)

=> une fois declaree, la fonction peut etre appellee autant de fois qu'on veut. 

__La portee des variables__

• les variables *Globales* : lorsque une variable est declaree en dehors de la fonction. Pas de probleme, on peut l'appeler dans une fonction.
• les variables *Locales* : lorsque une variable est declaree a l'interieur d'une fonction. La variable ne pourra pas etre utilisee a l'exterieur et le code ne pourra pas s'executer. Il faut toujours privilegier les variables locales. 

=> Toute variable declaree dans une fonction n'est utilisable que dans cette meme fonction. 
Dans l'execution d'une fonction, c'est la variable locale qui prend le dessus sur la variable globale.
Dans l'execution du code general (donc une fois la fonction terminee), c'est la variable globale qui prend ses droits. 


__Les arguments__

Selon les fonctions, pas besoin de specifier des arguments. Parfois il y en a un, parfois plusieurs. L'argument qu'on passe dans la fonction peut etre utilise comme variable a l'interieur. 

EX : 
function myFunction(arg) { // Notre argument est la variable « arg »
    // Une fois que l'argument a été passé à la fonction, vous allez le retrouver dans la variable « arg »
    alert('Votre argument : ' + arg);
}
myFunction('En voilà un beau test !');


//  ici la fonction est declaree attend son execution quand on l'appelle
// on a l'appel de la fonction a la derniere ligne, en lui passant un argument
// la fonction va attendre d'avoir tous les arguments avant de s'executer.
// la fonction prompt () s'execute puis renvoie la valeur de l'user, apres cela myFunction() s'execute (car tous les arguments sont recus) . C'estu ne fonction dite *native*

function myFunction(arg) {
    alert('Votre argument : ' + arg);
}
myFunction(prompt('Que souhaitez-vous passer en argument à la fonction ?'));


__Les arguments multiples__ 

// les differents arguments sont separes par une virgule. 
// a l'execution de la fonction, il n'y a qu'a passer les arguments qu'on veut a notre fonction.

function moar(first, second) {
    // On peut maintenant utiliser les variables « first » et « second » comme on le souhaite :
    alert('Votre premier argument : ' + first);
    alert('Votre deuxième argument : ' + second);
}
moar(
	'Un !',
	'Deux !'
);

__Les arguments facultatifs__ (PAS CLAIR)

Si on cree une fonction accueillant un argument mais qu'on ne le specifie pas lors de l'appel, on obtient *undefined* (= indefini). Les arguments facultatifs de'une fonction doit toujours se trouver en derniere position. 

function optional(arg) {
    alert(arg); // On affiche l'argument non spécifié pour voir ce qu'il contient
}
optional();

__Les valeurs de retour__

Essentiellement, les fonctions ne peuvent retourner qu'une seule et unique valeur chacune (hors tableau et objet) ! 
Pour cela il suffit d'utiliser l'instruction return suivie de la valeur a retourner. 
Le return met fin a la fonction puis retourne la valeur (le reste ne sera pas execute). Idem si on fait 2 return, le premier mettra fin a la fonction.

EX:
function sayHello() {
    return 'Bonjour !'; // L'instruction « return » suivie d'une valeur, cette dernière est donc renvoyée par la fonction
    alert('Attention ! Le texte arrive !');
}
alert(sayHello()); // Ici on affiche la valeur retournée par la fonction sayHello()


__Les fonctions anonymes__

Tres important, les fonctions anonymes sont utiles pour les objets, evenements, variables statistiques, closures. 
Ces fonctions ne possedent pas de nom. 

EX:
function (arguments) {
// le code de la fonction anonyme 
}

Ainsi on peut assigner une fonction anonyme a une variable : 

var sayHello = function() {
    alert('Bonjour !');
};

Des lors, on peut appeler notre fonctions par le nom de la variable a laquelle nous l'avons assigne :  sayHello(); 

En JavaScript, il faut distinguer dans le code les structures et les instructions : 
• STRUCTURES : les fonctions, les conditions, les boucles. (pas besoin de ; )
• INSTRUCTIONS:  les assignations de variable, l’exécution de fonction, etc. ( ; necessaire)

Les fonctions peuvent servir a isoler une partie du code, pour eviter qu'il n'affecte le reste. 
// la fonction est isolee entre des parantheses puis est suivie d'une paire () pour y faire appel immediatement et l'executer.
(function() {
    // Code isolé
})() 

=> Ces fonctions immediatement executees s'appellent les "Immediately-Invoked Function Expression" (IIFE)






















































