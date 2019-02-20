// creation d'une variable de requete et lui affecter le XMLHttpREquest
var request = new XMLHttpRequest();


// ouvrir une nouvelle connexion, utiliser la requete GET sur l'url pour extraire les data
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// notre fonction qui fera la requete
request.onload = function () {
    // acces des donnees JSON ici 
} 


// envoi de la requete 
request.send();