/*Nuestro código puede ser dividido en varios módulos (archivos), por lo que para poder usar
las funciones o variables que existen en uno y queramos acceder desde otro, utilizamos import
y export.

Las funciones o variables que queramos utilizar desde otro archivo son importadas de la siguiente
manera:
1)Usamos la palabra reservada import
2)Entre llaves indicamos las funciones y/o variables que queremos acceder.
Hacemos una separación con comas.
3)Usamos la palabra reservada from, seguido de, entre comillas dobles o simples,
la ruta de la ubicación en la que se encuentra el archivo del cual estamos importando su código.
*/

import {addProduct, calcularStock, products} from './product.service';

addProduct({title:"chess", createdAt: new Date("2023-09-14T16:00:00Z"), stock: 15, size: "M"});
addProduct({title:"chess", createdAt: new Date("2023-09-14"), stock: 11});

console.log(products);

const total: number = calcularStock();
console.log(total);
