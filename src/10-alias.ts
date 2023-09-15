/*Los Alias nos permiten darle un nombre a uno o varios tipos de datos en conjunto.
Nota: la palabra type en los Alias es algo propio de TypeScript.

Tipos Literales (Literal Types)
Con los literal types podemos definir explícita y literalmente los posibles valores que puede
tomar nuestra variable. */

(() => {
  //La palabra type es exclusivo de ts, no existe en JS.
  //Esto es un alias
  type UserId = string | number;
  let userId: UserId;

  // Literal types
  //Le indicamos a la variable qué valores puede tener. Por lo que la ultima asignación
  // marca error.
  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'Otra cosas que no tiene que ver';

  // Otra manera de hacerlo es creando nuestro propios tipos (Tipos Literales)
  // Además podemos combinar alias con Tipos Literales.
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize2: Sizes;
  shirtSize2 = 'M';
  shirtSize2 = 'L';
  shirtSize2 = 'XL';

  function greeting(userId: UserId, size: Sizes) {
    if(typeof userId === 'string') {
      console.info("Resultado: ", userId.concat(" ||Texto concatenado|| ", ` ||${size}|| `));
    }
  }
  greeting("1111", "M");
})();
