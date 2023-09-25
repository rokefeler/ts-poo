import { ProductCrudService } from './services/product-crud.service';

(async ()=>{
  const productService = new ProductCrudService();
  console.log('--'.repeat(10));
  console.log('getall');
  const products = await productService.getAll();
  const productId = products[1].id;
  console.log(products.length);
  console.log(products.map(e=>e.title));


  await productService.update(productId,{
  title: "new title changed rokefeler",
  description: 'new description 2023 rokefeler'
});

const rta = await productService.findOne(productId);
console.log('rta',rta);

})()







/* Consumiendo ProductMemoryService */

