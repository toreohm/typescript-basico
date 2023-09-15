/*El ecosistema de TypeScript ha creado unos módulos para agregar manualmente el tipado a las
librerías que no tienen soporte de tipos.
Por ejemplo, si quieres trabajar con la librería lodash, en Visual Studio Code al pasar el mouse
sobre 'lodash' se te indicará que instales un sistema de tipos para que puedas desarrollar
sin problemas desde TypeScript: npm i --save-dev @types/lodash
*/

//var _ = require('lodash'); Con JS
import _ from 'lodash'; //con TS

const data = [
  {username: 'nico', role: 'admin'},
  {username: 'valentina', role: 'seller'},
  {username: 'zulema', role: 'seller'},
  {username: 'santiago', role: 'customer'},
];

//La asignación de una variable porque al parecer el método es inmutable
const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

//Resultado de la función groupBy
const rtaGroupBy = {
  admin: [{ username: 'nico', role: 'admin' } ],
  seller: [{ username: 'valentina', role: 'seller' }, { username: 'zulema', role: 'seller' }],
  customer: [{username: 'santiago', role: 'customer'}]
};

//Haciendo groupBy con reduce.
const miReduce = data.reduce((obj: any, item: any) => {
if (!obj[item.role]) {
  obj[item.role] = [];
  obj[item.role].push(item);
} else {
  obj[item.role].push(item);
}
 return obj;
}, {});

console.log("GROUPBY CON REDUCE ", miReduce);
