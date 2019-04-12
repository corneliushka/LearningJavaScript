// Execution 1
function compte_a_rebours(nombre) {

  if(nombre === 0) {
    return console.log("Terminé");
  }

  console.log(nombre);
  nombre--;
  compte_a_rebours(nombre);
}

compte_a_rebours(10);

// Execution 2
function compte_a_rebours(nombre) {

  if(nombre === 0) {
    return console.log("Terminé");
  }

  console.log(nombre);
  nombre;
  compte_a_rebours(nombre);
}

compte_a_rebours(10);


// Execution 3
function compte_a_rebours(nombre) {

  if(nombre === 0) {
    return console.log("Terminé");
  }

  console.log(nombre);
  nombre--;
  compte_a_rebours(nombre);
}

compte_a_rebours(10000);


// Execution 4
function compte_a_rebours(nombre) {

  for(var i = nombre; i > 0; i--) {
    console.log(i);
  }

  console.log("Terminé");
}

compte_a_rebours(10000);


