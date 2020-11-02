// // JSnack 1
// // Creare un array di oggetti
// // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// // Stampare a schermo la bici con peso minore con handlebars.
//
//
// var biciclette = [
//   {
//     nome: "merida",
//     peso: 7,
//   },
//   {
//     nome: "trek",
//     peso: 8,
//   },
//   {
//     nome: "cannondale",
//     peso: 9,
//   },
//   {
//     nome: "specialized",
//     peso: 7.5,
//   },
// ];
//
// var biciLeggera = biciclette[0] ;
//
// for (var i = 0; i < biciclette.length; i++) {
//    if ( biciclette[i].peso < biciLeggera.peso ) {
//      biciLeggera = biciclette[i];
//    }
// }
// console.log(biciLeggera);
//
// // HANDLEBARS
// var source = document.getElementById("entry-template").innerHTML;
// var template = Handlebars.compile(source);
//
// var context = { title: "La bici più leggera è :  " + biciLeggera.nome , body: "E pesa " + biciLeggera.peso + " Kg" };
// var html = template(context);
//
// $(".handlebar").append(html);


// JSnack 2
// Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
// Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
// Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.

var nomi = [ "david", "riccardo", "andrea", "alessandro" , "achraf"];
var numero1 = parseInt( prompt("inserisci un numero compreso tra 1 e " + nomi.length ));
while ( numero1 < 1 || numero1 > nomi.length) {
  numero1 = parseInt( prompt("inserisci un numero compreso tra 1 e " + nomi.length ));
}
var numero2 = parseInt( prompt("inserisci un altro compreso tra " + numero1 + " e " + nomi.length));
while ( numero2 < numero1 || numero2 > nomi.length) {
  numero2 = parseInt( prompt("inserisci un altro compreso tra " + numero1 + " e " + nomi.length));
}
var nomiSelezionati = [];
for (var i = 0; i < nomi.length; i++) {
  nomiSelezionati.push( nomi[i] );
}
numero1 = numero1 - 1 ;
numero2 = numero2 - 1 ;

var arrayDefinito = [];

for (var i = numero1 ; i <= numero2; i++) {
  arrayDefinito.push( nomiSelezionati[i] ) ;
}

// HANDLEBARS
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

var context = { title: "Questo è l'array risultante :  ", body: arrayDefinito};
var html = template(context);

$(".handlebar").append(html);
