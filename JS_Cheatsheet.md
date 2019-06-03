
# 1. JAVASCRIPT CHEATSHEET v.-0.1 - 12/04/19

(autres Cheatsheet)
[VueJS_Cheatsheet](empty)

(export de Google Keep)
(remember to insert TOC)  

Formatage v.-0.1:

[x] Variables et boucles  
[x] Fonctions  
[] WIP... Tableaux et Objets  
[] Manipulation HTML et DOM  

Sources :  

1. [OpenClassroom - Dynamisez vos sites web avec Javascript (MOOC)](https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1916776-introduction-au-javascript)  

2. [Grafikart (Youtube)](https://www.youtube.com/watch?v=PIU_2SBSZgw&list=PLjwdMgw5TTLVzD9Jq_WBd1crqDwXRn4cw)

3. [Secrets of the JavaScript Ninja 2nd Edition (Livre)](https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition)

4. [JavaScript: Novice to Ninja, 2nd Edition (Livre)](https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition)

## 1.1. - Introduction

JavaScript est un langage dit de "client-side", cad que les scripts sont executes par le navigateur chez l'internaute (le client). Contrairement aux langages (ex: PHP) dits server-side qui sont executes par le serveur web, qui vont "creer" la page web envoyee au navigateur.  

var number = 0;  
var output = number++;  
alert(number); // Affiche : « 1 »  
alert(output); // Affiche : « 0 »  

Schema suivant :  
• le visiteur-client demande une page au serveur,  
• le serveur envoie la page HTML et le Javascript,  
• le navigateur du client affiche le HTML et execute le Javascript.  

### 1.1. Quelques generalites

#### 1.1.1. La boite de dialogue

- alert() : est une fonction permettant d'afficher une boite de dialogue qui contient un message.

#### 1.1.1.2. La syntaxe du JavaScript

- L'indentation se fait generalement avec 4 espaces (2 tabulations) pour une meilleure visibilite, c'est une aide a la lecture.

- Les commentaires sont importants pour expliquer le fonctionnement d'un script; il y a les commentaires de fin de ligne ( // ) ou les commentaires multi-lignes (/*   */).

- La fonction est composee de deux choses, son nom suivi d'un couple de parantheses (ouvrante et fermante), EX : myFunction().

- Le code JavaScript est insere dans la page HTML au moyen de l'element *script*, qui contient un attribut "type" servant a indiquer le type de langage que l'on va utiliser.

- Le JavaScript externe : il est conseille d'ecrire le code JavaScript dans un fichier externe, portant l'extension ".js", il est ensuite appelle depuis la page Web au moyen de l'element *script* et de son attribut src=" " qui contient l'URL du fichier _.js .  
EX: *<&script src="hello.js"><&/script>*

- Une page web est lue par le navigateur de facon lineaire, d'abord le *head* puis les elements a l'interieur du *body*. Une bonne pratique pour accellerer le chargement de la page est de mettre les elements *script* juste avant la fermeture de l'element *body*, afin d'etre charge en dernier.

## 1.2. LES #VARIABLES et LES BOUCLES

- Une fois declaree, va servir a stocker des donnees (une valeur). Le nom d'une variable ne peut contenir que des cara teres alphanumeriques (A-Z, 0-9, et $ sont acceptes). Attention: le nom ne peut pas commencer par un chiffre et et ne peut etre utilise de mots cles utilises par JavaScript, cad les "mots reserves" (sauf si par exemple "var_", combine a un autre caractere).  

- le mot cle "var" indique qu'on va declarer une variable, ensuite il n'est plus necessaire de l'utiliser pour cette variable-la et on peut y stocker ce qu'on veut.  

- le signe "=" sert a attribuer une valeur a la variable. Lorsqu'on affecte une valeur a une variable, c'est *l'affectation*.  
EX:  
    var myVariable = 5.5;

- Il est possible de declarer plusieurs variables a la suivre avec 1 seul mot cle "var", il suffit alors de mettre une virgule (,) apres l'affectation de chacune et finir par le point virgule (;).  
EX:
    var maVariableAlpha = 2,  
        maVariableBeta = maVariableAlpha + 3,  
        maVariableGamma = maVariableAlpha + maVariableBeta;  



### 1.2.1. Manipulation des variables

#### 1.2.1.1. Types de variables

• Type numerique (alias *number*) : tout comme les autres langages, le JavaScript reconnait plusieurs ecritures pour les nombres, comme l'ecriture decimale (ex: var numiber = 5.5; ) ou l'ecriture scientifique (ex: var number 3.65e+5;) ou encore l'ecriture hexadecimale (var number = 0x391;).  

• Chaines de caracteres (alias *string*) : represente n'importe quel texte.  
On peut l'assigner de deux facons, avec des guillemets " "; ou avec des apostrophes ' ';
Lorsqu'on met une variable nombre en string, elle devient un chaine de caracteres et non plus un string.  
Si on veut mettre inserer des apostrophes ou guillemets dans le texte pour encadrer, alors inserer \" ou \' pour faire signifier au moteur JavaScript cela.  
(EX: var text = 'Ça c\'est quelque chose !'; )
 

#### 1.2.1.2. Tester l'existence de variables avec **typeof**  

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

#### 1.2.1.3. Les opérateurs arithmetiques

[Premiers en math dans JavaScript (MDN)](https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/Math)

- addition : +
- soustraction : -
- multiplication : *
- division : /
- modulo : % . Ce dernier opérateur est simplement le reste d'une division. EX: 10 % 3 = 1.

Pour faire une operation a une variable deja affectee, on peut utiliser +=, -=, *=, /= ou %= ;  
EX:
    var number = 3;
    number += 5;
    alert(number); // Affiche : « 8 »

/!\ Lorsqu'on fait une operation arithmetique entre un string et un number (ex: "Salut les gens" * 4), on obtient un NaN ( = Not a Number) pour nous prevenir que cela ne donne rien.  

addition et assignation : += // Ajoute la valeur de droite à la valeur de la variable de gauche, puis renvoie la nouvelle valeur de la variable
soustraction et assignation : -= // Soustrait la valeur de droite à la valeur de la variable de gauche, puis renvoie la nouvelle valeur de la variable  
multiplication et assignation : *= // Multiplie la valeur de droite par la valeur de la variable de gauche, puis renvoie la nouvelle valeur de la variable  
division et assignation : /= // Divise la valeur de la variable de gauche par la valeur de droite, puis renvoie la nouvelle valeur de la variable  

/!\ Il est intéressant de savoir qu'il existe un nombre infini dans Javascript et se note **Infinity**. 

#### 1.2.1.4. Concatenation et conversion des types

• La concatenation consiste a ajouter une chaine de caracteres a la fin d'une autre. EX:
var hi = 'Bonjour', name = 'toi', result;
result = hi + name;
alert(result); // Affiche : « Bonjourtoi »
L'espace est a ajouter manuellement a une variable.  
Il est possible aussi de faire la concatenation d'addition avec +=.  

#### 1.2.1.5. Interagir avec l'utilisateur

• La fonction prompt ( ) s'utilise comme alert ( ), elle renvoie ce que l'utilisateur a ecrit sous forme d'une chaine de caracteres.  
EX:  
    var text = prompt('Tapez quelque chose :');
Ainsi le texte tape sera stocke directement dans la variable "text".

#### 1.2.1.6. Convertir une chaine de caracteres en nombre

var first, second, result;
first  = prompt('Entrez le premier chiffre :');
second = prompt('Entrez le second chiffre :');
result = first + second;
alert(result);

Si on essaye ce code, on remarque qu'il y a un probleme. En effet, le texte de prompt() est recupere sous forme d'une chaine de caracteres, chiffre ou non. Du coup l'opérateur + fera une concatenation (meme si on insere des chiffres) !

Il suffit alors de convertir la chaine de caracteres en nombre. Pour cela, on aura besoin de la fonction parseInt ( ) .
EX:  
    var text = '1337',  
        number;
    number = parseInt(text);
    alert(typeof number); // Affiche : « number »
    alert(number); // Affiche : « 1337 »

#### 1.2.1.7. Comprendre null, undefined et NaN 

- null // est généralement utilisé pour indiquer l'absence d'une valeur
- undefined // pas de valeur, peut être utilisé de façon interchangeable avec *null* 
- NaN // Not a Number (pas un nombre), si il apparait apres une suite d'operations arithmetiques, il y a une couille dans le pâté. 


#### 1.2.1.8 Les Booléens 

Les booléens sont basés sur la prise de décisions. 
Les **valeurs falsy** sont : false, null, undefined, "", 0, NaN. 
Les **valeurs truthy** sont : tout le reste (y compris le string 0 et false).


### 1.2.2. Structures conditionnelles (les conditions)  

• Base de toute condition: les booléens. La condition est une sorte de test pour verifier qu'une variable contient bien une certaine valeur. Les conditions sont constituees de valeurs a tester et de deux types d'opérateurs : un *logique* et un de *comparaison*.

#### 1.2.2.1. Opérateurs de comparaison

• == : egal a (valeur)
•  != : different de
• === : contenu ET type egal a  (valeur et nature de la variable)
• !== : contenu ou type different de
•  > : superieur a  
• >= : superieur ou egal a
• < : inferieur a  
• <= : inferieur ou egal a

Lorsqu'une condition est posee, on dit qu'elle est "verifiee" lorsqu'elle renvoie TRUE (et non verifiee si c'est FALSE).

Precision sur le == : une comparaison entre 4 et '4' sera verifiee TRUE car meme contenu.
Precision sur le === : comparaison entre un 4 et '4' sera non verifiee car pas le meme type.

#### 1.2.2.2. Les opérateurs logiques

Fonctionnement sur le meme principe qu'une "table de verite" en electronique.

• && : ET (AND) : valeur1 && valeur2
Cet opérateur verifie la confition lorsque toutes les valeurs qui lui sont passees valent TRUE. Si une seule d'entre elles vaut FALSE alors la condition n'est pas verifiee. EX:
    var result = true && true;
    alert(result); // Affiche : « true »
    result = true && false;
    alert(result); // Affiche : « false »
    result = false && false;
    alert(result); // Affiche : « false »

• || : OU (OR) : valeur1 || valeur2
Opérateur plus "souple" car il renvoie TRUE si une des valeurs soumise contient TRUE, qu'importe les autres valeurs.  
    var result = true || true;
    alert(result); // Affiche : « true »
    result = true || false;
    alert(result); // Affiche : « true »
    result = false || false;
    alert(result); // Affiche : « false »

• ! : NON (NOT) : !valeur
Il se differencie des deux opérateurs precedents car il ne prend qu'une seule valeur a la fois. S'il se nomme "NON", c'est que sa fonction est d'inverser la valeur qui lui est passee, ainsi TRUE deviendra FALSE et inversement.  
    var result = false;
    result = !result; // On stocke dans « result » l'inverse de « result »
    alert(result); // Affiche « true » car on voulait l'inverse de « false »
    result = !result;
    alert(result); // Affiche « false » car on a inversé de nouveau « result », (on passe de « true » à « false »)

• Combiner les opérateurs :  
EX:
    var condition1, condition2, result;
    condition1 = 2 > 8; // false
    condition2 = 8 > 2; // true
    result = condition1 && condition2;
    alert(result); // Affiche « false »

=> Il est possible de raccourcir le code en combinant le tout sur une seule ligne :  

var result = 2 > 8 && 8 > 2;
alert(result); // Affiche « false »

#### 1.2.2.3. La condition "If Else"

• Structure conditionnelle IF pour dire "SI"
De parentheses qui contiennent la condition a analyser, ou le booléen qui sera retourne par les opérateurs conditionnels.
Accolades permettant de definir la portion de code qui sera executee si la condition se verifie.

Le code s'execute si le booléen recu est TRUE, alors que FALSE empeche l'execution. EX:
if (2 < 8 && 8 >= 4) { // Cette condition renvoie « true », le code est donc exécuté
    alert('La condition est bien vérifiée.');
}
if (2 > 8 || 8 <= 4) { // Cette condition renvoie « false », le code n'est donc pas exécuté
    alert("La condition n'est pas vérifiée mais vous ne le saurez pas vu que ce code ne s'exécute pas.");
}

• La fonction confirm( ) : permet d'avoir en parametre une chaine de caracteres qui sera affiche a l'ecran et retournera un booléen en fonction de l'action de l'user (execution si OK donc TRUE, non-execution si 'annuler' et donc FALSE).
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

#### 1.2.2.4. La Condition Switch

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

Il est possible de rassembler un ensemble d'instructions, qui seront vérifiées jusqu'à ce que le switch fonctionne (jusque au *break*).

switch (drawer) {
    case 1:
    case 2:
    case 3: 
        alert('Vous venez d'ouvrir un des 3 premiers tiroirs'); break;
    case 4: 
        alert('4e tiroir: ..contient des vêtements : des chemises, des pantalons, etc.'); break;
        .
        .
        .
')


- Le mot cle "switch est suivi de la variable a analyser et une paire d'accolades.
- Se trouvent dans les accolades tous les cas de figure pour la variable definis par le mot cle "case" suivi de la valeur a prendre en compte et " : ".
- A chaque fin de "case" on met un "break;" pour casser le switch et eviter l'execution du reste du code.
- A la fin on peut ecrire le mot cle "default" suivi de deux points pour executer un code si aucun cas n'est rencontre.

/!\ Si on attend un chiffre dans le prompt, ne pas oublier de l'encadrer dans une fonction parseInt( ) afin de convertir le type de valeur, de string en nombre (pas necessaire si on specifie le string lors des case (ex: case '1' : ).

#### 1.2.2.5. Les ternaires  

L'opérateur (ternaire) conditionnel de JavaScript comporte trois operandes et est a utiliser comme raccourci pour la declaration des instructions If...Else. Il se decompose comme suit :
    EX: var score = condition ? valeur1 : valeur2 ;

- nom de la variable qui va accueillir le resultat de la ternaire (= score),  
- la condition qui sera analysee par la ternaire,
- un " ? " suivi d'une première valeur (if)
- " : " suivis d'une deuxieme valeur (else) et enfin le point-virgule marquant la fin de la ligne d'instructions.
=> si la variable analysee vaut TRUE alors la valeur retournee par la ternaire est celle apres le " ? "  
=> si elle vaut FALSE alors la valeur retournee sera celle apres les " : "  

EX:
var startMessage = 'Votre catégorie : ',
    endMessage,
    adult = confirm('Êtes-vous majeur ?');
endMessage = adult ? '18+' : '-18';
alert(startMessage + endMessage);

#### 1.2.2.6. Conditions sur les variables

=> lors d'une structure conditionnelle if/else, la variable est convertie en booléen (TRUE/FALSE)
=> l'opérateur OU / || : en plus de sa fonction principale, il permet de renvoyer la premiere variable possedant une valeur evaluee a TRUE.  

### 1.2.3. BOUCLES  

#### 1.2.3.1. L'incrémentation et la décrementation

Soit :  
    var number = 0;
    number = number + 1;

• L'incrémentation permet d'ajouter une unite a un nombre au moyen d'une syntaxe courte :
number++; ou bien ++number;  pour ajouter 1 (incrémenter).
number--; ou bien --number; pour soustraire 1 (decrementer).

/!\ Si on place l'opérateur ++ avant la variable, cela incremente la variable (number) et retourne la valeur de number incrémentée (c'est a dire 1) :
    var number = 0;
    var output = ++number;
    alert(number); // Affiche : « 1 »
    alert(output); // Affiche : « 1 »

/!\ Si on place l'opérateur apres la variable a incrémenter, l'operation retourne la valeur de number avant qu'elle soit incrémentée :
    var number = 0;
    var output = number++;
    alert(number); // Affiche : « 1 »
    alert(output); // Affiche : « 0 »

Lorsqu'on fait une opération supplémentaire avec une variable incrémentée, il faut choisir si on l'incrémente 
- avant // incrémentation avant que le calcul soit fait : 
        var score = 10  
        var resultat = ++score * 2 (==> 22)
- après // incrémentation après que le calcul soit fait 
        var score = 10  
        var resultat = score++ * 2 (==> 21)

#### 1.2.3.2. La boucle WHILE

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

• Ici la variable "proceed" est ce qu'on appelle une __variable temoin__, ou bien une variable de boucle.  
Tant qu'on incremente, les prenoms s'ajoutent, lorsque la variable "nick" est null, fin de la boucle
EX:

```js
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
alert(nicks);
```

 // Affiche les prénoms à la suite

• On peut mettre fin a une boucle avec "break" (apres le Else), le break s'utilise exactement comme dans la structure conditionnelle switch.  
• L'instruction **continue** peut s'utiliser a la place de "break" pour mettre fin a une iteration. Mais dans ce cas la boucle n'est pas stopee, elle passe a l'iteration suivante. Très utile pour skip des actions. 

#### 1.2.3.3. La boucle FOR  

• La boucle FOR ressemble beuacoup au fonctionnement de la boucle WHILE, sauf que dans les parantheses on n'a pas seulement une condition mais 3 blocs :
1 - l'initialisation : on initialise la variable, elle s'execute juste avant que la boucle ne demarre,
2...- la condition: s'execute avant chaque passage de boucle,
3 - l'incrementation : utilise pour incrémenter une variable a chaque iteration de la boucle. S'utilise apres chaque passage de boucle.

for (var iter = 0; iter < 4; iter++) {
    alert('Itération n°' + iter);
}

• CONVENTION de programmmation : les  variables de boucles FOR sont généralement nommées *i*. Si une boucle se trouve dans une autre boucle, la variable de cette boucle sera nommée *j* , puis *k* et ainsi de suite.

• La portee des variables de boucle : il est déconseillé de declarer une variable au sein d'une boucle, mais la declarer immediatement dans l'initialisation. Mais une fois que la boucle est initialisee.  

#### 1.2.3.4. La boucle DO WHILE  

#### 1.2.3.5. EN RESUME

- L'incrémentation est importante au sein des boucles. Incrémenter ou décrémenter signifie ajouter ou soustraire une unité à une variable. Le comportement d'un opérateur d'incrémentation est différent s'il se place avant ou après la variable.
- La boucle While permet de répéter une liste d'instructions tant que la condition est vérifiée. Si condition "FALSE", la boucle ne s'execute pas.  
- La boucle do While est une variante de While qui sera exécutée au moins une fois, peu importe la condition.
- La boucle For est une boucle utilisée pour répéter une liste d'instructions un certain nombre de fois. C'est donc une variante très ciblée de la boucle While, elle s'execute un nombre determinee de fois.  

## 1.3. LES #FONCTIONS  

L'avantage : reduit considerablement un code long/complexe juste en appelant la fonctione la contenant.  

### 1.3.1. Les elements d'une fonction

#### 1.3.1.1. Creer sa premiere fonction

function myFunction(arguments) {
    // Le code que la fonction va devoir exécuter
}

• le mot cle "function" est present a chaque declaration de fonction.
• vient ensuite le mot cle de la fonction (ex: "myFunction").
• vient un couple de parantherses dans laquelle on declare des arguments/parameters, elles fournissent les infos a la fonction pour son execution.  
• vient un couple d'accolades contenant le code que la fonction devra executer (et utilisant les arguments)

=> une fois declaree, la fonction peut etre appellee autant de fois qu'on veut.  

#### 1.3.1.2. La portee des variables

• les variables *Globales* : lorsque une variable est declaree en dehors de la fonction. Pas de probleme, on peut l'appeler dans une fonction.
• les variables *Locales* : lorsque une variable est declaree a l'interieur d'une fonction. La variable ne pourra pas etre utilisee a l'exterieur et le code ne pourra pas s'executer. Il faut toujours privilegier les variables locales.  

=> Toute variable declaree dans une fonction n'est utilisable que dans cette meme fonction.  
Dans l'execution d'une fonction, c'est la variable locale qui prend le dessus sur la variable globale.
Dans l'execution du code general (donc une fois la fonction terminee), c'est la variable globale qui prend ses droits.  

#### 1.3.1.3. Les arguments

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

#### 1.3.1.4. Les arguments multiples

// les differents arguments sont separes par une virgule.  
// a l'execution de la fonction, il n'y a qu'a passer les arguments qu'on veut a notre fonction.
EX:
    function moar(first, second) {
        // On peut maintenant utiliser les variables « first » et « second » comme on le souhaite :
        alert('Votre premier argument : ' + first);
        alert('Votre deuxième argument : ' + second);
    }
    moar(
        'Un !',
        'Deux !'
    );

#### 1.3.1.5. Les arguments facultatifs

Si on cree une fonction accueillant un argument mais qu'on ne le specifie pas lors de l'appel, on obtient *undefined* (= indefini). Les arguments facultatifs de'une fonction doit toujours se trouver en derniere position.  

function optional(arg) {
    alert(arg); // On affiche l'argument non spécifié pour voir ce qu'il contient
}
optional();

#### 1.3.1.6. Les valeurs de retour

Essentiellement, les fonctions ne peuvent retourner qu'une seule et unique valeur chacune (hors tableau et objet) !  
Pour cela il suffit d'utiliser l'instruction return suivie de la valeur a retourner.
Le return met fin a la fonction puis retourne la valeur (le reste ne sera pas execute). Idem si on fait 2 return, le premier mettra fin a la fonction.

EX:
    function sayHello() {
        return 'Bonjour !'; // L'instruction « return » suivie d'une valeur, cette dernière est donc renvoyée par la fonction
        alert('Attention ! Le texte arrive !');
    }
    alert(sayHello()); // Ici on affiche la valeur retournée par la fonction sayHello()


### 1.3.2. L'invocation des fonctions (et manieres de faire des fonctions)

#### 1.3.2.1. Les fonctions anonymes

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

#### 1.3.2.2 La fonction *arrow* 

Nous avons vu la façon classique d'invoquer une fonction : 

    function LikeButton () {
        return (
            <i className = "fa fa-heart like-button"/>
        )
    }

Cette fonction peut être convertie en fonction anonyme :

    const LikeButton = function() {
        return (
            <i className = "fa fa-heart like button"/>
        )
    } 

Ensuite, la fonction peut être simplifiée en fonction **arrow** 

    const LikeButton = () => {
        return (
            <i className="fa fa-heart like-button"/>
        );
    }

Si la fonction ne contient qu'une seule et unique expression : 
    const LikeButton = () => (i className="....");


## 1.4 Les tableaux


var Sources = { 
	[OpenClassRoom](https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1917996-les-objets-et-les-tableaux)
	[GrafikartParcoursTableau](https://www.grafikart.fr/forum/topics/23348)
	[GrafikartParcoursObjetJS](https://www.grafikart.fr/forum/topics/26631)	
	[W3Schools](https://www.w3schools.com/js/js_objects.asp)
};  


Un tableau/array, est une variable qui contient plusieurs valeurs, les *items*. Chaque item est accessible au moyen d'un indice (index) et dont la numerotation commence a partir de 0. 

• Indices : la numerotation des items commence toujours a 0 (il y aura toujours donc un decalage d'une unite). 

• Declarer un tableau: on utilise *var*. Le contenu se trouve entre crochets et chaque valeur est separee par une virgule. Les valeurs sont introduites comme variables simples (il faut des guillemets ou apostrophes pour definir les chaines de caracteres).  EX: 
var myArray = ['Sebastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'] : 
alert(myArray[1]); // affiche 'Laurence'

### 1.4.1 Operations sur les tableaux

/!\ Une methode est une fonction interne a un objet. /!\
/!\ Une propriete est une variable interne a un objet. /!\

- La methode *push()* permet d'ajouter un ou plusieurs items a la fin du tableau. Peut recevoir un nombre illimite de parametres.
• La methode *unshift()*, permet d'ajouter un ou plusieurs items au debut du tableau (pas frequent mais utile).
• Les methodes *shift()* et *pop()* retirent respectivement le premier et le dernier element d'un tableau. 
EX: 
	var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
	myArray.shift(); // Retire « Sébastien »
	myArray.pop(); // Retire « Guillaume »
	alert(myArray); // Affiche « Laurence,Ludovic,Pauline »



- Les chaines de caracteres possedent une methode *split()* permettant de decouper un tableau en fonction d'un separateur spécifié. 
EX: // ici a chaque espace (on peut mettre autre chose), la chaine de caracteres est decoupee en portions a chaque espace et celles-ci sont placees dans un tableau.
	var cousinsString = 'Pauline Guillaume Clarisse',
   		cousinsArray = cousinsString.split(' ');
	alert(cousinsString);
	alert(cousinsArray);

- L'inverse de *split()*, cad creer une chaine de caracteres depuis un tableau, c'est *join()*. *join* prend un paramètre facultatif, qui sera le séparateur entre les éléments.


    EX: // ici une chaine de caracteres sera creee, les valeurs de chaque item seront separees par un tiret. Si rien n'est specifie, tout sera colle. 
	var cousinsString_2 = cousinsArray.join('-');
	alert(cousinsString_2);
    

Soit :

        ```javascript
        var mesClients = ["Robert", "Alice", "Francis", "Elina", "Alpha"]
        ```

- Méthode *sort()* pour classer les items par ordre alphabétique.
        mesClients.sort();
        ["Alice, "Alpha", "Elina", "Francis", "Robert"]

- Méthode *reverse()* pour trier par ordre alphabétique inverse.
        mesClients.reverse();
        ["Robert", "Francis", "Elina", "Alpha", "Alice"]

/!\ Attention car sort/reverse sont sensibles à la casse, poyr y rémédier:
    - Il faut créer la fonction

        ```javascript 
        function insensible_a_la_case (a,b) {
            if(a.toUpperCase() < b.toUpperCase()) return -1;
            if(a.toUpperCase() > b.toUpprCase()) return 1;
        } 
        ```

    - Puis appeller la fonction 
- 
        ```javascript
        mesClients.sort(insenslble_a_la_case)
        ```

- La méthode *array.includes("string) renvoie true ou false si selon la valeur est présente dans le tableau ou non. 

### 1.4.2 Parcourir un tableau

Très utile si on doit accéder à une liste. Pour chaque élément d'un tableau, on doit l'afficher ou le comparer par exemple. En d'autres termes, lorsqu'il faut répéter une étape pour nombre d'éléments. 

#### 1.4.2.1 For i(n)

• Parcourir avec *for i(n)* , principe simple : faire autant d'iterations qu'il y a d'items dans un tableau. 

EX_1: 
// on commence par definir la variable de boucle *i*, ensuite on regle la condition pour qu'elle s'execute autant de fois qu'il y a d'items (cad 5).
	var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
	for (var i = 0; c = myArray.length; i < c; i++) {
    	alert(myArray[i]);
	}

#### 1.4.2.2 For Index in

EX_2: *index in*
    // nous aurons la variable index qui va itérer automatiquement tout le tableau pour le display des valeurs, dans le rendu souhaité.
    var mesClients = ["Sara", "Francis, "Robert", "Alpha"];
    for(var index in mesClients) {
        console.log(index + " est " + mesClients[index]);
    }
    0 est Sara
    1 est Francis
    2 est Robert
    3 est Alpha

#### 1.4.2.3 forEach 

Ce que ForEach fait, c'est d'exécuter la fonction a l'intérieur de la paranthèse dans chaque élément du tableau. 

    var mesClients = ["Sara", "Francis, "Robert", "Alpha"];
    mesClients.forEach(function(nom)) {
        console.log("Bonjour " + nom);
    }


#### 1.4.3 l'objet *date*

[l'objet date - Udemy](https://www.udemy.com/cours-javascript/learn/v4/t/lecture/6249858?start=0)
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

EX:
        var maintenant = new Date();
        >maintenant // va afficher la date

Il existe d'autres objets dates à allouer à notre variable date : 


    maintenant.*getUTCDate()*;
    maintenant.*getFullYear()*;

Les dates sont de type objet, on peut les comparer et on obtiendra "false" si elles sont différentes. 

    var date1 = new Date(10, 10, 2000);
    var date2 = new Date(10, 10, 2000);

    date1 == date2; 
    false
    date1.getTime() == date2.getTime();
    true




#### 1.4.4 Cloner un tableau

1) creer son tableau en .js
2) creer nouvelle variable avec slice() 
EX:
	let arrayClone = arrayOriginal.slice(0); //


### 1.4.4 Les objets litteraux

Il peut etre pratique d'acceder a un tableau aussi au moyen d'un identifiant. Par exemple dans un tableau de prenoms, l'item appele *sister* pourrait retourner la valeur "Laurence". (pseudo tableau)

	var family = {
    		self: 'Sébastien',
    		sister: 'Laurence',
    		brother: 'Ludovic',
    		cousin_1: 'Pauline',
    		cousin_2: 'Guillaume'
	};

*** 

### 1.4.5 Acces aux items d'un tableau__

La syntaxe d'un objet et l'acces a un objet se presente comme suit : 
	var myObject = {
		    item1: 'Texte 1',
		    item2: 'Texte 2',
 		    item3: {
      			  paraph1: 'debut',
      			  paraph2: 'milieu',
     			   paraph3: 'fin'
   		    }
	};
alert(myObject.item3.paraph1); // va afficher 'debut'

OU BIEN

alert(myObject['item2']; // on specifie le nom de la propriete pour connaitre l'indice, utile si l'identifiant est contenu dans une variable. 
EX:
	var id = 'item2';
	alert(myObject[id]);

__Ajout des items dans un tableau__

Il est possible d'ajouter un item en specifiant un identifiant pas encore present. 
EX: // ici 'index' est ajoute et accessible via l'identifiant *item4* 
	myObject['item4'] = 'Index'; 



__Introduction aux objets__

Etant un langage *oriente objet*, cela veut dire que JavaScript dispose d'objets. 

• Un objet est un concept, une idée ou une chose.
• Un objet possède une structure qui lui permet de pouvoir fonctionner et d'interagir avec d'autres objets. 
• Le JavaScript met à notre disposition des objets natifs, c'est-à-dire des objets directement utilisables. Vous avez déjà manipulé de tels objets sans le savoir : un nombre, une chaîne de caractères ou même un booléen.

Les objets contiennent 3 choses : 

• Un constructeur; un code qui est execute quand on utilise un nouvel objet. Permet d'effectuer des actions comme definir des variables au sein de l'objet (ex: nombre de caracteres d'une chaine de caracteres). Pour les objets natifs cela est fait automatiquement.

• des proprietes; toute valeur qui va etre placee dans une variable au sein de l'objet ( = variable contenue dans l'objet), elle contient des infos necessaires au fonctionnement de l'objet.

• des methodes; c'est ce qui permet de modifier l'objet. Les methodes sont des fonctions contenues dans l'objet et permettant de realiser des operations sur le contenu de l'objet. Ex: dans le cas d'une chaine de caracteres, une methode pourra permettre de la mettre en majuscules. 

=>  la presence d'un point lors de l'appel d'un objet permet d'acceder aux proprietes et methodes d'un objet. 
EX: 
- var myString = 'Ceci est une chaîne de caractères'; // On crée un objet String
- alert(myString.length); // On affiche le nombre de caractères, au moyen de la propriété « length »
- alert(myString.toUpperCase()); // On récupère la chaîne en majuscules, avec la méthode toUpperCase()

Les objets natifs  :
• number : l'objet qui genere des nombres;
• Boolean : l'objet qui gere les booleens;
• string: l'objet qui gere les chaines de caracteres.
• Array : gere les tableaux. 

__Utilisation des objets litteraux__

Utile pour ordonner un code. Dans une fonction, pour faire en sorte que *return* retourne plusieurs variables, il faut les placer dans un tableau et le retourner. Cependant il est plus commode d'utiliser un objet litteral. 
EX: 
	function getCoords() {
    		/* un certain script qu'on mettra ici */
    		return {
        		x: 12,
        		y: 21
    		};
	}
	var coords = getCoords(); // la valeur de la fonction est mise dans une variable, l'acces a x et y est simplifie. 
	alert(coords.x); // 12
	alert(coords.y); // 21














## 1.x Quelques Methodes essentielles  

### 1.x.1 Maths Object

L'objet Math est un objet natif dont les méthodes et propriétés permettent l'utilisation de constantes et fonctions mathématiques. Cet objet n'est pas une fonction.

Description Contrairement aux autres objets globaux, Math n'est pas un constructeur. Toutes les propriétés et les méthodes de Math sont statiques.

Pour accéder à la constante PI, on utilise Math.PI. Pour accéder à la fonction sinus, on utilise Math.sin(x) où x est l'argument de cette méthode.

Les constantes sont définies avec la précision des nombres réels en JavaScript.

EX Syntaxe :  
    var x = Math.PI;            // Returns PI
    var y = Math.sqrt(16);      // Returns the square root of 16

#### Description de la methode  

Math.ceil(x) //Returns the value of x rounded up to its nearest integer
Math.floor(x) //Returns the value of x rounded down to its nearest integer
Math.max(x, y, z, ...) // Returns the number with the highest value
Math.min(x, y, z, ...) // Returns the number with the lowest value
Math.random() // Returns a random number between 0 and 1 (Interesting in Video games)
Math.round(x) // Returns the value of x rounded to its nearest integer
Math.pow(BaseX, ExposantY) // retourne l'exposant de la base
Math.sqrt() // Fait retourne la racine carrée d'un nombre.

EX:  
    *var nombreAleatoire = Math.floor(Math.random() * range//nbreMax-nbreMin) + restantNbreMax-ou-nbreMin*  
    var nombreAleatoire = Math.floor(Math.random() * 28) + 1991; // donne une annee entre 1991 et 2019  
EX:
    // autre methode par fonction :
    function getRandomInt (min, max) {return Math.floor(Math.random() * (max - min + 1)) + min;}
EX:
    // pour avoir un nombre aleatoire entre 0 et 1 (true-false), on peut utiliser  
    Math.round(Math.random())


### 1.x.2 [Méthodes de String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) 

- maVariable.length ; permet de connaitre le nombre de caractères dans le string assigné à la variable.
- maVariable.toUpperCase() ; mettre le contenu de la variable (chaine de caracteres) en lettres capitales.
- maVariable.toLowerCase() ; mettre le contenu de la variable (chaine de caracteres) en lettes minuscules.
- maChaine.indexOf("any string") ; va renvoyer la position dans laquelle la chaine est trouvée (si elle existe). Si cela n'existe pas, on peut mettre une condition qui est égale à -1, comme par exemple : 
    if(maChaine.indexOf("ABCD") == -1) alert("ce mot n'existe pas");
- méthode slide() permet d'extraire une section de la chaine des caractères et la renvoyer, comme par exemple : 
    var phrase = "La méthode slice() extrait une section de la chaine de caractères."
    phrase.slice(3, 10); 


#### Transformation  

parseFloat // Va parser un string ou valeur et transformer en nombre decimal.  
parseInt  // Va parser un string ou valeur et transformer en nombre (integer).

## 1.x Document Object Model  

### 1.x.1 Interface DOMTokenList  

[DOMTokenList](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)


event.target : https://developer.mozilla.org/fr/docs/Web/API/Event/target

#### Element.classList

L'[Element.classList](https://developer.mozilla.org/fr/docs/Web/API/Element/classList) permet d'acceder a la liste des classes d'un element, comme avec une chaine delimitee par des espace avec la propriete element.className.

Methodes :

- Element.classList.add("") : Ajoute les classes spécifiées.  
- Element.classList.remove("") : Supprime les classes spécifiées.
- Element.classList.toggle("") : Si un seul argument est présent : change l'existence d'une classe dans la liste. Si la classe existe, alors la supprime et renvoie *false*, dans le cas inverse, ajoute cette classe et retourne *true*.


## 1.x ES6 

### 1.x.1 Les keywords Let & Const 

EcmaScript 6 ajoute *let* et *const*, qui sont deux nouvelles méthodes de déclarer des variables block-scopés. 

- Let est une variable changeanble. On l'utilise dorénavant à la place de var.
- Const définit une constance, elle renvoie une erreur si on essaie de la réassigner (mais on peut toujours modifier la data au sein de la variable). Const renvoie un signal d'intention.

        const answer = 42;
        answer = 43;   // error!

        const numbers = [1, 2, 3];
        numbers[0] = 'this is fine'; // no error


### Console. 

console.log() : 
console.error() : 
console.table() : retourne une interface de tableau. 