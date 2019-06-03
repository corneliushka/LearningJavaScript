// Execution 1
// La condition entre les parenthèse évalue à vrais,
// donc tout ce qui est à l'intérieur des accolades vas être exécuté.
var score = 10;
if( score === 10 ){
    alert("Oui, la condition a été remplie.");
}

// Execution 2
// La condition entre les parenthèse évalue à faux,
// donc tout ce qui est à l'intérieur des accolades vas être ignoré,
// et le moteur JavaScript va passer directement à la ligne qui suit l'instruction "if".
var score = 10;
if( score === 11 ){
    alert("Oui, la condition a été remplie.");
}

// Execution 3
// Si la clause "else" existe, et la condition entre les parenthèse de "if" évalue à faux,
// le moteur JavaScript va ignoré tout ce qui est a l'intérieur des accolades de "if",
// et il va aller directement pour exécuté tout ce qui est a l'intérieur des accolades de "else".
var score = 10;

if( score === 11 ){
    alert("Oui, la condition a été remplie.");
}
else{
    alert("Non, la condition n'a pas été remplie.");
}

// La condition entre les parenthèse de "if" évalue à vrais,
// donc le moteur JavaScript va exécuté tout ce qui est a l'intérieur des accolades de "if",
// et il va ignoré ce qui est a l'intérieur des accolades de "else".
if( score === 10 ){
    alert("Oui, la condition a été remplie.");
}
else{
    alert("Non, la condition n'a pas été remplie.");
}


// Execution 4
// Si la première condition évalue à vrais, donc la structure "if" vas être exécuté,
// et le reste (else if, if) va être ignoré.  
// si none, la deuxième condition va être testée, si la condition évalue à vrais
// la structure "else if" vas être exécuté, // et le reste (else) va être ignoré.  
// si none la structure "else" vas être exécuté
 var score = 10;

if( score === 10 ){
    alert("Oui, la condition a été remplie.");
}
else if( score === 11 ){
    alert("Oui, la seconde condition a été remplie.");    
}
else{
    alert("Non, la condition n'a pas été remplie.");
}


