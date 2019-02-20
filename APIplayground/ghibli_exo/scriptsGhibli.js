
// RETRIEVING THE DATA WITH AN HTTP REQUEST
var request = new XMLHttpRequest();                                 // 1. creation d'une variable de requete et lui affecter le XMLHttpREquest
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true); // 2. ouvrir une nouvelle connexion, utiliser la requete GET sur l'url pour extraire les data

request.onload = function () {            // 3. notre fonction qui fera la requete
    
    if (request.status >= 200 && request.status < 400) { // 8. On imbrique tout dans une condition IF de statut requete HTTP
        
        // WORKING WITH THE JSON RESPONSE 
        var data = JSON.parse(this.response); // 5. on va creer la variable 'data' qui contiendra tout le JSON en tant qu'un tableau d'objets
        data.forEach(movie => {               // 6. la méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau 'movie'
            console.log(movie.title);         // 7. on va logger chaque titre qui s'affichera dans le HTML. (affichage dans console sur page HTML)
        const card = document.createElement('div'); // 13a. creation div avec classe 'card'
        card.setAttribute('class', 'card');

        const h1 = document.createElement('h1'); // 13b. creation h1 et lui donner contenu titre film
        h1.textContent = movie.title; 

        const p = document.createElement('p'); // 13c. creation p et lui donner contenu description film
        movie.description = movie.description.substring(0, 300); // (limit to 350 chars)
        p.textContent = movie.description; // end with an ellipse 

        container.appendChild(card); // 14. ajoute les cards au container (la 'div')

        card.appendChild(h1); // 15. chaque card contiendra le 'h1' (titre) et le 'p' (description)
        card.appendChild(p);
        });  
    } else {
        console.log('Error HTTP')
    }
}

request.send(); // 4. envoi de la requete 

// DISPLAYING THE DATA : visible seulement avec l'inspecteur, pas dans le code HTML !

const app = document.getElementById('root'); // 9. variable app pour l'acces a la div 'root' 
const logo = document.createElement('img'); // 10. creation logo principal de la page
logo.src = 'logo.png'; // 10b. assigner l'attribut src a l'image
const container = document.createElement('div'); // 11. creation element 'div'
container.setAttribute('class', 'container'); // 11b. donner l'attribut 'class' a container

app.appendChild(logo); // 12. methode pour ajouter le logo au site (div id='root') /!\ 
app.appendChild(container); // 12b. methode pour ajouter le container au site (div id='root')