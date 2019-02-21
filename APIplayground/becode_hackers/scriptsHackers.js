
// RETRIEVING THE DATA WITH AN HTTP REQUEST
var request = new XMLHttpRequest();
request.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json', true);
request.onload = function () { 

  if (request.status >= 200 && request.status < 400) { // requete vers le serveur reussie 
    
    // WORKING WITH THE JSON RESPONSE 
    var data = JSON.parse(this.response); 
    data.forEach(perso => {

      const divCard = document.createElement('div');
      divCard.setAttribute('class', 'card')

      const pHistory = document.createElement('p');
      pHistory.textContent = perso.history;

      const img = document.createElement('img');
      img.textContent = perso.image;
      
      const h2Profile = document.createElement('h2');
      h2Profile.textContent = perso.profile.firstname + " " + perso.profile.lastname;
      
      const aWikilink = document.createElement('a');
      aWikilink.textContent = perso.wiki;

      console.log(perso.history);
      console.log(perso.profile);
      console.log(perso.wiki);
      console.log(perso.image);

    });
  } else {
    console.log('Error HTTP');
  }
}

// Send request
request.send();

// DISPLAYING THE DATA 

const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'BeCodeAPI.jpg';
const container = document.createElement('div');
container.setAttribute('class', 'container');

