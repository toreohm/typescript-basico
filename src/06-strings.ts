/*Usando backticks:
Esta forma de asignar string trae algunas ventajas:
1) Declarar valores de múltiples líneas
2) Concatenar dentro del mismo string. Para esto es necesario usar este símbolo del dólar
seguido de llaves ${} y escribir lo que queremos concatenar dentro de esas llaves
3) También respeta la indentación.*/

(() => {
  let productTitle = "My amazing product"; //De forma inferida, typescript infiere el tipo de dato
  let word: string = "My string"; //De forma explícita

  productTitle = "Value changed";
  word.toLowerCase();

  const stringComillaSimple = 'Hola';
  let backTik = `Mensaje: ${productTitle}. Con esto
  podemos manejar
  Multiple linea.`;
  console.log("backTik ", backTik);
})();
