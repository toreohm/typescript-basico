/* Si estas queremos usarlos desde otro archivo, necesitamos usar la palabra reservada export
justo antes de definir nuestra función (lo mismo aplica para las variables).
De esta forma indicamos que serán exportados para ser utilizados desde otro
archivo JavaScript/TypeScript. */

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product =  {title: string, createdAt: Date, stock: number, size?: Sizes};
