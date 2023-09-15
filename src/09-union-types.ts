/*Los union types nos permite definir más de un tipo de dato a una variable,
argumento de una función, etc.

Una mejor práctica
El tipo de dato any nos brinda la flexibilidad de JavaScript en TypeScript con respecto al tipado.
Sin embargo, si deseamos eso, es mejor hacer uso de los Union Types.*/

(() => {
  let userId: string | number = "Yes";
  console.log("userId ", userId);

  userId = "Id1";
  userId = 1212;

   //El parametro puede ser string o number
   //Y dependiendo de su tipo, se ejecuta un cuerpo distinto.
  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      console.info("Resultado: ", myText.concat(" ||Texto concatenado|| "));
    } else {
      console.info("Resultado: ", Number(myText.toPrecision(2)));
    }
  }

  greeting("Ana");
  greeting(100.100);

})();
