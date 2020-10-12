// Inizializzazione variabili

var  name = prompt("Scrivi il tuo nome") ;
var  surname = prompt("Scrivi il tuo cognome") ;
var  fav_color = prompt("Qual'è il tuo colore preferito?") ;



// document.getElementById('name').innerHTML = name  ;
// document.getElementById('surname').innerHTML = surname ;
// document.getElementById('fav_color').innerHTML = fav_color ;
// Cosi funziona ma si può fare di meglio....

//  "generatore" di password

document.getElementById('password').innerHTML = name + surname + fav_color + "20" ;

// è possibile concatenare le variabili per "creare la password"
