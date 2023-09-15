
(() => {
  //De forma inferida declaramos un array de sólo numeros.
  //Entonces todos los elementos que se le agreguen tendrán que ser númericos.
  //En este caso NO podra haber elementos de diferente tipo.
  let numbers = [1, 1, 22, 54, 69, 77, 1001];
  numbers.push({mensaje: "Esto da error"});
  numbers.push("Esto da error");
  numbers.push(5000);

  numbers = [100]; //valido
  numbers.map(item => item * 2);

  //De forma inferida declaramos un array de diferentes tipos de datos y es valido.
  //Entonces sólo podra tener/agregar elementos de tipo number,string,boolean.
  let cosas = [1, 2, 3, true, "hola", 100];

  //Podemos definir de forma explícita qué tipo de datos queremos para nuestro array.
  let mixedArray: (number | string | boolean | object)[] = ['hola', true];
  mixedArray.unshift(12, {mensaje: "Esto es válido"}, false);
  mixedArray.unshift(function (x:any) {return x;});

})();
