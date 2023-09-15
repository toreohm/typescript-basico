/*Recibir objetos como parametros en TS*/

(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const login = (email: string, password: string) => {
    console.log(email, password);
  };
  login("hector@nico.co", "abcde");

  //Ahora que reciba un objeto
  const login2 = (data: {email: string, password: string | number}) => {
    console.log(data.email, data.password);
  };
  login2({email: "hector@nico.co", password:"abcde"});

  //Otro ejemplo
  const products: any[] = [];
  //Así definimos el tipado de un objeto como parametro, la propiedad size es opcional
  const addProduct = (data: {title: string, createdAt: Date, stock: number, size?: Sizes}) => {
    products.push(data);
  };

  addProduct({title:"chess", createdAt: new Date("2023-09-14T16:00:00Z"), stock: 15, size: "M"});
  addProduct({title:"chess", createdAt: new Date("2023-09-14"), stock: 11});

  console.log(products);
})();
