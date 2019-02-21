
// RETRIEVING THE DATA WITH AN HTTP REQUEST
var request = new XMLHttpRequest();
request.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json', true);
request.onload = function () { 

  if (request.status >= 200 && request.status < 400) { // requete vers le serveur reussie 
    
    // WORKING WITH THE JSON RESPONSE 
    var array = JSON.parse(this.response); 
    array.forEach(perso => {

      const card = document.createElement('div');
      card.setAttribute('class', 'card')

      const pHistory = document.createElement('p');
      pHistory.textContent = perso.history;

      const image = document.createElement('img');
      image.src = perso.image;
      image.setAttribute("width", "200px");
      image.setAttribute("float", "right");
      
      const h2Profile = document.createElement('h2');
      h2Profile.textContent = perso.profile.firstname + " " + perso.profile.lastname;
      
      const aWikilink = document.createElement('a');
      aWikilink.textContent = " Lien Wikipedia : " + perso.wiki;
      aWikilink.setAttribute("href", perso.wiki);

      console.log(perso.history);
      console.log(perso.profile);
      console.log(perso.wiki);
      console.log(perso.image);

      container.appendChild(card);

      card.appendChild(h2Profile);
      card.appendChild(pHistory);
      card.appendChild(image);
      card.appendChild(aWikilink);
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

app.appendChild(logo); 
app.appendChild(container);
