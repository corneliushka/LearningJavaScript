// Execution 1
// Si nous exécutons ce code, nous allons voire 
// en premier "Oui, la troisième condition a été remplie", 
// puis quand nous cliquons sur "ok", nous allons voire, 
// Non, la condition n'a pas été remplie, 
// car nous n'avons pas fourni au navigateur qu'elle que chose qui lui dit 
// de ne pas executer la ligne suivant, ou de s'arrêter à tout moment.
// C'est pourquoi nous utilisons l’instruction " break " pour le faire
// dans l'exemple qui suit celui la

var score = 12;

switch(score) {
    case 10:
        alert("Oui, la première condition a été remplie");
    case 11:
        alert("Oui, la seconde condition a été remplie");
    case 12:
        alert("Oui, la troisième condition a été remplie");
    default:
        alert("Non, la condition n'a pas été remplie");
}

// Execution 3
// L’instruction break avec un point-virgule indique au navigateur 
// dès qu'il rencontre le break, de quiter l'instruction "switch". 
// Passez à la ligne suivante en sautant toute les autre instruction 
// a l'interieur de l’instruction" Switch ".
// Et je n'ai pas besoin d'ajouter une instruction " break " pour le cas de défault.

var score = 12;

switch(score) {
    case 10:
        alert("Oui, la première condition a été remplie"); break;
    case 11:
        alert("Oui, la seconde condition a été remplie"); break;
    case 12:
        alert("Oui, la troisième condition a été remplie"); break;
    default:
        alert("Non, la condition n'a pas été remplie");
}

// Execution 4
// Exemple de l'instruction switch avec des strings 

var reponse = window.prompt("Tapez blanc, rouge ou jaune puis clickez su OK")

switch (reponse.toLowerCase()) {
    case "blanc":
        alert("Vous avez tapé blanc."); break;
    case "rouge":
        alert("Vous avez tapé rouge."); break;
    case "jaune":
        alert("Vous avez tapé jaune."); break;
    default:
        alert("Désolé, cette couleur n'est pas disponible.");
}

// Execution 5
// Exemple de l'instruction switch avec plusieurs cas qui exécute le même code

var reponse = window.prompt("Tapez blanc, rouge ou jaune puis clickez su OK")

switch (reponse.toLowerCase()) {
    case "blanc":
    case "rouge":
        alert("Vous avez tapé rouge ou blanc."); break;
    case "jaune":
        alert("Vous avez tapé jaune."); break;
    default:
        alert("Désolé, cette couleur n'est pas disponible.");
}

// Execution 5
// Exemple de l'instruction switch avec des expressions 
// en tant que valeur de cas.

var reponse = window.prompt("tapez quelque chose, puis cliquer sur OK.")

switch (true) {
    case reponse.length < 3 :
        alert("La longeur de votre reponse est inférieur à trois");
    case reponse.length === 3 :
        alert("La longeur de votre reponse est égale à trois"); 
    default:
        alert("La longeur de votre reponse est supérieur à trois");        
}