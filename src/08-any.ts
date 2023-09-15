/*any es un tipo de dato exclusivo de TypeScript. Esto nos permite almacenar cualquier tipo de dato
en una variable.
*/

(() => {
  let myVar: any;
  myVar = "string";
  myVar = 100;
  myVar = true;
  myVar = {a: 100};

  myVar = 'Hola';
  /*Considerando el último valor de myVar podemos hacer que el tipo "any" sea tratado exclusivamente
  como un string. Esto lo hacemos a través de un casting*/
  let sentence = (myVar as string).toLowerCase();
  console.log("sentence: ", sentence);

 //Otra manera de hacer casting en typescript

 myVar = 1212.8745;
 let number = Number((<number>myVar).toFixed(2));
 console.log("number ", number);
})();
