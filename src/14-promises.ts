import axios from 'axios';

(async ()=>{
  
  const url = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=2';

  function delay(time: number){
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('ok terminado');
      }, time);
    });
    return promise;
  }

  function getProducts(){
    const promise = axios.get(url);
    return promise;
  }

  async function getProductsAsync(){
    const promise = await axios.get(url);
    return promise.data;
  }

  function getProductsV2(){
    return axios.get(url)
      .then(data=>data.data)
      .catch(e=>{
        throw new Error(e);
      })
      .finally(()=>{
        console.log('getProductsV2 terminated');
      });
  }

  // console.log('-.'.repeat(20));
  // const rpta = await delay(3000);
  // console.log(rpta);

  const products = await getProducts();
  console.log('.-.'.repeat(30));
  console.log('Products',products.data);
  console.log('.-.'.repeat(30));
  const productsV2 = await getProductsV2();
  console.log('Products V2',productsV2);
  
  console.log('.-.'.repeat(30));
  const productsAsync =  await getProductsAsync();
  console.log('ProductsAsync',productsAsync);

})()