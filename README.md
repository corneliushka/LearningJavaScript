# LearningJavaScript :

Repository pour apprendre et pratiquer le JavaScript; repo de reference pour le parcours de JavaScript BeCode Lovelace3.9 : https://github.com/becodeorg/BXL-Lovelace-3.9/tree/master/parcours/04.1-Javascript  

# Nomination des fichiers et buts : 

- **index.html** : La page d'accueil du training JavaScript.  
- **series.html** : La page pour la pratique des DOM et manipulation HTML par le JavaScript.  
- **EXERCICES.js** : pour les exercices logiques de JavaScript.  
- **series.js** : pour les exercices concernant les series d'application de JavaScript au HTML ( cf. https://github.com/becodeorg/BXL-Lovelace-3.9/tree/master/parcours/04.1-Javascript )  
- **sandbox.js** : tester du code et algorithmes.  
- **style.css** : le style des pages HTML.  



var Sources = { 
	OpenClassRoom : https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript/1917996-les-objets-et-les-tableaux ,
	GrafikartParcoursTableau : https://www.grafikart.fr/forum/topics/23348 ,
	GrafikartParcoursObjetJS : https://www.grafikart.fr/forum/topics/26631 , 	
	W3Schools : https://www.w3schools.com/js/js_objects.asp,
};


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

__Les tableaux__ 

Un tableau/array, est une variable qui contient plusieurs valeurs, les *items*. Chaque item est accessible au moyen d'un indice (index) et dont la numerotation commence a partir de 0. 

• Indices : la numerotation des items commence toujours a 0 (il y aura toujours donc un decalage d'une unite). 

• Declarer un tableau: on utilise *var*. Le contenu se trouve entre crochets et chaque valeur est separee par une virgule. Les valeurs sont introduites comme variables simples (il faut des guillemets ou apostrophes pour definir les chaines de caracteres).  EX: 
var myArray = ['Sebastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'] : 
alert(myArray[1]); // affiche 'Laurence'

__Operations sur les tableaux__

/!\ Une methode est une fonction interne a un objet. /!\
/!\ Une propriete est une variable interne a un objet. /!\

• La methode *push()* permet d'ajouter un ou plusieurs items a la fin du tableau. Peut recevoir un nombre illimite de parametres.
• La methode *unshift()*, permet d'ajouter un ou plusieurs items au debut du tableau (pas frequent mais utile).
• Les methodes *shift()* et *pop()* retirent respectivement le premier et le dernier element d'un tableau. 
EX: 
	var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
	myArray.shift(); // Retire « Sébastien »
	myArray.pop(); // Retire « Guillaume »
	alert(myArray); // Affiche « Laurence,Ludovic,Pauline »

• Les chaines de caracteres possedent une methode *split()* permettant de decouper un tableau en fonction d'un separateur. 
EX: // ici a chaque espace, la chaine de caracteres est decoupee en portions a chaque espace et celles-ci sont placees dans un tableau.
	var cousinsString = 'Pauline Guillaume Clarisse',
   		cousinsArray = cousinsString.split(' ');
	alert(cousinsString);
	alert(cousinsArray);

• L'inverse de *split()*, cad creer une chaine de caracteres depuis un tableau, c'est *join()* : 
EX: // ici une chaine de caracteres sera creee, les valeurs de chaque item seront separees par un tiret. Si rien n'est specifie, tout sera colle. 
	var cousinsString_2 = cousinsArray.join('-');
	alert(cousinsString_2);


__Parcourir un tableau__

• Parcourir avec *for in* , principe simple : faire autant d'iterations qu'il y a d'items. 
EX: 
// on commence par definir la variable de boucle *i*, ensuite on regle la condition pour qu'elle s'execute autant de fois qu'il y a d'items (cad 5).
	var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
	for (var i = 0; c = myArray.length; i < c; i++) {
    	alert(myArray[i]);
	}

__Les objets litteraux__

Il peut etre pratique d'acceder a un tableau aussi au moyen d'un identifiant. Par exemple dans un tableau de prenoms, l'item appele *sister* pourrait retourner la valeur "Laurence". (pseudo tableau)

	var family = {
    		self: 'Sébastien',
    		sister: 'Laurence',
    		brother: 'Ludovic',
    		cousin_1: 'Pauline',
    		cousin_2: 'Guillaume'
	};

*** 

__Acces aux items d'un tableau__

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


__Parcourir un objet avec *for in* __ 

Le fonctionnement est quasi le meme que pour un tableau, sauf qu'ici il faut fournir une "variable cle" qui recoit l'ID (au lieu de l'index) et de specifier l'obet a parcourir : 
EX: // ici on stocker l'identifiant dans 'id' pour parcourir l'objet "family"
	for (var id in family) { 
    		alert(family[id]);
	}

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










