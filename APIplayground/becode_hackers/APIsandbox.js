const app = document.getElementById('racine'); // creation de la div racine


// creer une variable de requete et y assigner l'objet XMLHttpRequest
var request = new XMLHttpRequest();

// ouvrir une nouvelle connexion et utiliser GET pour avoir l'url
request.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json', true);

request.onload = function () { // fonction de la requete 
  // acceder aux donnees JSON
  var data = JSON.parse(this.response); 

  if (request.status >= 200 && request.status < 400) { // reauete vers le serveur reussie 
    data.forEach(this.reponse => {
      let card = document.createElement('div');
      // card.setAttribute('card')
      let history = document.createElement('p');
      let img = document.createElement('img');
      let profile = document.createElement('h2');
      // h2.textContent = perso.profile;
      let wikiLink = document.createElement('a');

      console.log();
    });
  } else {
    console.log('error');
  }
}

// Send request
request.send();