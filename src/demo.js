//@ts-check "👈"

/*Al analizarlo nos damos cuenta de que tiene unos errores que podrían pasar desapercibidos
al no ver advertencias. Es hasta que lo ejecutamos en un navegador web o entornos como NodeJS
que los bugs saldrán a relucir. */

/*Si estás en Visual Studio Code, puedes activar el analizador de código estático de TypeScript
sobre un archivo JavaScript. Para esto, en la primera línea del archivo debe ir lo siguiente:
//@ts-check */

(()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      mehtod: 'GET'
    });
    const data = await rta.parseJson();
    products.concat(data);
  }
  function getTotal() {
    const total = 0;
    for (const i = 0; i < products.length(); i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProducto(1);
  addProducto(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = person +  limit;
  console.log(rta);
});
