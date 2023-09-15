/*En TypeScript solo se pueden hacer operaciones numéricas entre números valga la redundancia.
Serán señalados como errores aquellas variables que queramos usar sin haberles dado un valor inicial.

Señalar que si no se va a inicializar aún la variable, definir explícitamente el tipo de dato,
pues TypeScript no puede inferirlo si no tiene un valor inicial.

TypeScript nos puede indicar error si intentamos definir números binarios que tengan números que
no sean 0 o 1 y si declaramos hexadecimales usando valores fuera del rango.

Consejo:
Cuando definas una variable de tipo de dato number, es preferible que el nombre de tipo sea
en minúscula. Esto como buena práctica, pues se hará referencia al tipo de dato number y
no al objeto Number propio del lenguaje:*/

(() => {
  let productPrice = 100; //De forma inferida, typescript infiere el tipo de dato
  productPrice = 12;
  console.log("productPrice: ", productPrice);

  let customerAge: number = 39; //De forma explícita se le específica que sólo sera númerico.
  customerAge = customerAge++;
  console.log("customerAge " + customerAge);

  let productInStock: number; //Podemos declarar variables sin inicializarlas.
  console.log("productInStock", productInStock);  //Podemos ver que typescript ya marca error

  if(productInStock > 10) {
    console.info("It is gt");
  }

  let discount = parseInt("123"); //Automaticamente discount pasa a ser de tipo number
  console.log("discount " + discount);

  let hex = 0xfff; //hexadecimal
  console.log("hex: ", hex);
  let bin = 0b1010; //binario Notese: 0b que indica que es binario
  console.log("bin: ", bin);


})();
