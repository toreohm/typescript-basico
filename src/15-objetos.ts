/*Recibir objetos como parametros en TS y definir su tipado usando type*/

(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  /*En TypeScript también podemos usar los Alias para definir la estructura de tipado
  que debería tener un objeto. Y dentro del tipado ponemos la propiedad size como opcional. */
  type Product =  {title: string, createdAt: Date, stock: number, size?: Sizes};

  //Ahora podemos definir que va a ser un array de objetos tipo Product
  const products: Product[] = [];

  //El parametro es un objeto cuya estructura es de tipo Product
  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({title:"chess", createdAt: new Date("2023-09-14T16:00:00Z"), stock: 15, size: "M"});
  addProduct({title:"chess", createdAt: new Date("2023-09-14"), stock: 11});

  console.log(products);
})();

