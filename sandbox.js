var prenoms = [], // creation d'un tableau vide
    prenom;

while (prenom = prompt("Entrez un prenom: ")) { //boucle while qui va demander d'encoder et enregisrer dans la variable 'prenom'
    prenoms.push(prenom); // on ajoute chaque insertion dans le tableau 'prenoms'
}

if (prenoms.length > 2) { // on va regarder le nombre d'items 
    alert(prenoms.join(', ')); // affiche les prenoms a la suite
} else {
    alert('Il n\'y a pas assez d\'elements dans le tableau');
}


