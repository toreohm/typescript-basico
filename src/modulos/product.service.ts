/* Si estas queremos usarlos desde otro archivo, necesitamos usar la palabra reservada export
justo antes de definir nuestra función (lo mismo aplica para las variables).
De esta forma indicamos que serán exportados para ser utilizados desde otro
archivo JavaScript/TypeScript. */

import {Product} from "./product.model"

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
};

export const calcularStock = (): number => {
  let total = 0;
  products.forEach(item => {total += item.stock});
  return total;
};
