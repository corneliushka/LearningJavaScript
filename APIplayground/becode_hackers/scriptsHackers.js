// creer une variable de requete et y assigner l'objet XMLHttpRequest
var request = new XMLHttpRequest();

// ouvrir une nouvelle connexion et utiliser GET pour avoir l'url
request.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json', true);

request.onload = function () { // fonction de la requete 
  // acceder aux donnees JSON

  if (request.status >= 200 && request.status < 400) { // reauete vers le serveur reussie 
    var data = JSON.parse(this.response); 
    data.forEach(perso => {
      let card = document.createElement('div');
      let history = document.createElement('p');
      let img = document.createElement('img');
      let profile = document.createElement('h2');
      let wikiLink = document.createElement('a');

      console.log(perso.history);
    });
  } else {
    console.log('Error HTTP');
  }
}

// Send request
request.send();