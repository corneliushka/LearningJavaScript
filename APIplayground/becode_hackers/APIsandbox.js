const app = document.getElementById('racine'); // creation de la div racine


// creer une variable de requete et y assigner l'objet XMLHttpRequest
var request = new XMLHttpRequest();

// ouvrir une nouvelle connexion et utiliser GET pour avoir l'url
request.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json', true);

request.onload = function () { // fonction de la requete 
  // acceder aux donnees JSON
  var data = JSON.parse(this.response); 

  if (request.status >= 200 && request.status < 400) { // reauete vers le serveur reussie 
    data.forEach(perso => {
      const card = document.createElement('div');
      // card.setAttribute('card')
      const history = document.createElement('p');
      const img = document.createElement('img');
      const profile = document.createElement('h2');
      // h2.textContent = perso.profile;
      const wikiLink = document.createElement('a');

      console.log();
    });
  } else {
    console.log('error');
  }
}

// Send request
request.send();