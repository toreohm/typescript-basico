/*Estos dos funcionan como dos tipos de datos, al igual que, por ejemplo, string o number.
El tipo de dato null es para indicar un valor nulo y undefined para algo indefinido.
Son tipos diferentes.
 */

(() => {
//En TypeScript, si no especificamos que va a ser null o undefined, estos son inferidos como tipo any.
  let myNull = null; //tipo any
  let myUndefined = undefined; //tipo any

//Se puede hacer que explicitamente sea de tipo null o undefined
  let myNull2: null = null; // Tipo null
  let myUndefined2: undefined = undefined; //Tipo undefined

  /*Podemos tener el caso de que ocupamos un variable de tipo number pero que la tengamos que
  inicializar con null. Esto lo podemos resolver con union types */
  let myNumber: number | null = null;
  myNumber = 12;

  // También se puede con undefined
  let myString: string | undefined = undefined;
  myString = "12";

  //Ejemplo con función
  function hello(name: string | null) {
    let hello = "Hola ";
    hello += name ? name : "Nombre no especificado";
    console.log(hello);
  }

  hello("Maria");
  hello(null);

//Optional chaining "?."
/*El operador "?." funciona de manera similar a el operador de encadenamiento ".", excepto que en lugar
de causar un error si una referencia es null | undefined, la expresión hace una evaluación
de circuito corto con un valor de retorno de undefined.
El optional chaining es "natural" de JavaScript.
En el siguiente ejemplo, en caso de que name sea null o undefined devuelve el valor default
(Lo que está después de ||)*/
function helloV2(name: string | null) {
  let hello = "Hola ";
  hello += name?.toLowerCase() || "Nombre no especificado";
  console.log(hello);
}

helloV2("Maria");
helloV2(null);
})();
