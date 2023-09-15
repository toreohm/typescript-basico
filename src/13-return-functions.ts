/*Retornos tipados en TypeScript
1) Void: funciones sin retorno. Este tipo de función ejecuta ciertas instrucciones,
pero no devuelve dato alguno. Estas son conocidas como funciones de tipo void.

2) Funciones con retorno. Por el contrario, si en la función devolveremos algún valor,
podemos especificar el tipo de dato de este. */

(function () {
  //De forma inferida esta función regresa un número.
  const calcularTotal = (prices: number[]) => {
    return prices.reduce((total, num) => total + num);
  };

  //Por inferencia rta es de tipo number, ya que la función devuelve un número.
  const rta = calcularTotal([1,2,3,4,5]);
  console.log(rta);

  //De forma explícita hacemos que el return sea de tipo number
  const calcularTotal2 = (prices: number[]): number => {
    return prices.reduce((total, num) => total + num);
  };

  //Ahora tenemos un función sin valor de retorno: void
  const printTotal = (prices: number[]) => {
    const rta = calcularTotal(prices);
    console.log("Total: " + rta);
  };

  printTotal([1,2,3,4,5]);

  //Explicitamente declaramos que la función no tiene valor de retorno
  const printTotal2 = (prices: number[]): void => {
    const rta = calcularTotal(prices);
    console.log("Total: " + rta);
  };

  //También los retornos pueden ser más de un tipo de dato:
  function devolverMayor(a: number, b: number): number | string {
    if(a > b){
        // Retorna un número
        return a;
    } else if(b > a) {
        // Retorna un número
        return b;
    } else {
        // Retorna un string
        return `Los números ${a} y ${b} son iguales`;
    }
}

})();
