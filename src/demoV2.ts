/*npx tsc src/demoV2.ts*/

/*Compilación a una versión específica: npx tsc archivo_typescript.ts --target es6 */

/*Enviando compilación a una carpeta:
npx tsc archivo_typescript.ts --target es6 --outDir carpeta_destino */

/*También podrías indicar que deseas aplicar la anterior operación a todos los archivos
con extensión TypeScript: npx tsc *.ts --target es6 --outDir carpeta_destino*/

/*Deno: un entorno nativo para ambos lenguajes.
Deno, del mismo creador de Node.js, es un nuevo entorno de ejecución para JavaScript
que puede correr también nativamente TypeScript. Sin embargo, aún no tiene la madurez
en el ecosistema de Node.js*/

(async ()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products.push(data);
  }
  function getTotal() {
    let total = 0;
    for (const i = 0; i < products.length; i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = person +  limit;
  console.log(rta);
});
