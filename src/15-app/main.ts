import axios from 'axios';
import {Category} from './models/category.model';
import {Product} from './models/product.model';
/*api https://fakeapi.platzi.com/  */

(async ()=>{
  
  const url = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=2';

  async function getProducts(): Promise<Product[]>{
    return axios.get<Product[]>(url)
      .then(data=>data.data)
      .catch(e=>{
        throw new Error(e);
      })
      .finally(()=>{
        console.log('getProductsV2 terminated');
      });
  }

  async function getProducts00(): Promise<Product[]>{
    const { data }  = await axios.get<Product[]>(url);
    return data;
  }

  async function getProducts01(): Promise<Product[]>{
    const { data }  = await axios.get(url);
    return data as Product[]; //forzado de tipado
  }

  // console.log('-.'.repeat(20));
  // const rpta = await delay(3000);
  // console.log(rpta);

  const products = await getProducts();
  console.log(products.map(e=>`${e.id} - ${e.title} - ${e.price.toFixed(4)}`))

  const products00 = await getProducts00();
  console.log(products00.map(e=>`${e.id} - ${e.title} - ${e.price.toFixed(4)}`))

  const products01 = await getProducts01();
  console.log(products01.map(e=>`${e.id} - ${e.title} - ${e.price.toFixed(4)}`))

})()