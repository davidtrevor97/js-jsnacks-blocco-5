// JSnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore con handlebars.


var biciclette = [
  {
    nome: "merida",
    peso: 12,
  },
  {
    nome: "trek",
    peso: 8,
  },
  {
    nome: "cannondale",
    peso: 9,
  },
  {
    nome: "specialized",
    peso: 7.5,
  },
];

var biciLeggera = biciclette[0] ;

for (var i = 0; i < biciclette.length; i++) {
   if ( biciclette[i].peso < biciLeggera.peso ) {
     biciLeggera = biciclette[i];
   }
}
console.log(biciLeggera);

// HANDLEBARS
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

var context = { title: "La bici più leggera è :  " + biciLeggera.nome , body: "E pesa " + biciLeggera.peso + " Kg" };
var html = template(context);

$(".handlebar").append(html);
