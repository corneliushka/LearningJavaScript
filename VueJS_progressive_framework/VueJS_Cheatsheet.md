# 1. VUE.JS CHEATSHEET v.-0.1 - 11/03/19

Sources:

## 1.1 Introduction  

Le CDN a mettre dans le HTML avant de demarrer une app Vue est :  

*<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>*

### Creer des interfaces, des "vues"

On instancie Vue (new Vue), on greffe un nouvel element (EX: el: '#app'), on lui indique une variable avec une valeur.

L'autre aspect c'est le decoupage en composants, avec une certaine logique/aspects.  
Ainsi nous aurons des blocs qui seront reutilisables et personnalisables par la suite.  
L'avantage c'est de pouvoir utiliser le composant ailleurs.

<!-- La facon de fonctionner ce sont des petites methodes assez simples.
Une page vue.js fonctionne avec des composants 

@click = c'est un raccourci vue.js qui va permettre d'appeller une methode situee dans le scrips 'methods'

v-show
v-model

// au lieu de reflechir avec des "if" on met directement dans le html vue-show ou autre pour avoir le display de ce qu'on veut.  -->

Pour utiliser un pre-processeur (type SASS) avec Vue, on peut voir du cote de [vue-loader](https://github.com/vuejs/vue-loader), avec l'integration des [css-modules](https://vue-loader.vuejs.org/guide/css-modules.html#usage).  

#### 1.1.1 Prise en main : Hello World

[Cours d'introduction sur Scrimba](https://scrimba.com/p/pXKqta/cQ3QVcr)

On a 3 fichiers : le HTML, le CSS, le JS.

##### Sous le JS

On declare l'app Vue, :

- *el* va cibler un identifiant du HTML  
- *data* sera un objet contenant des definitions (comme dans .js) avec des valeurs. Ces valeurs changees dans le vont s'adapter sur la page dynamiquement.

var app = new Vue({  
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

Ainsi on peut aussi reatribuer autre chose a l'objet tel que :

    app.message = "I'have changed the data ! ";

##### Conditionnelles et Boucles (dans le HTML) 

- v-if : attribut "directive", cad que *v* suivi de *-* signifie que c'est un attribut special de Vue. La declaration d'une propriete de l'attribut veut dire que la div/span est affichee si la propriete est evaluee comme vraie.  
C'est une forme de conditionnelle sur Vue.js.  

- v-for : autre attribut, permettant de simuler une boucle for et ainsi d'ajouter des elements. Comme pour une to-do liste.  

- v-on : permettre aux utilisateurs d'interagir avec l'app Vue.