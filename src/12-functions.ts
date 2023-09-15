
(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(title: string, createdAt: Date, stock: number, size: Sizes) {
    return {title, createdAt, stock, size};
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(producto1);

  //Hacemos que el parametro size sea opcional con el modificador ?
  const createProductToJsonV2 = (title: string, createdAt: Date, stock: number, size?: Sizes) => {
    return {title, createdAt, stock, size};
  }

  /*Nota: cuando definamos argumentos opcionales en una función, estas deben ubicarse al final, si no
  TypeScript nos indicará un error, ya que podría haber confusiones al momento de invocar la función
  y enviar los respectivos parámetros: */
  //En este ejemplo omitimos el argumento para el parametro size (3 argumentos en lugar de 4)
  const producto2 = createProductToJsonV2('P1', new Date(), 12);
  console.log(producto2);
})();
