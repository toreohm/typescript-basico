
/*Inferencia de tipos
A partir de la inicialización de la variable TypeScript infiere el tipo que será a lo largo
del código y este no puede variar. let myName = "Victoria";
TypeScript infiere que la variable myName será del tipo string y en adelante
no podrá tomar un valor que no sea de este tipo de dato.*/

/*Nombres de variables iguales
 TypeScript te indicará como error aquellas variables con el mismo nombre a pesar de estar en
 archivos distintos.
 Esto no sucederá en entornos preconfigurados como por ejemplo Angular o React, ya que estos
 trabajan de forma modular o tienen un alcance (scope) para cada variable.
 Si deseas trabajar con los mismos nombres de variables en diferentes archivos, puedes crear
 una función anónima autoejecutada:*/

(() => {
  let myProductName: string = "Product 1";
  let myProductPrice: number = 500;

  myProductName = 'ChanGe';
  myProductName.toLowerCase();

  myProductPrice.toExponential();

  const myProductStock = 1000;

})();

