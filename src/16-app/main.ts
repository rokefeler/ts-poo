import { faker } from '@faker-js/faker';
import {Product} from './models/product.model'
import {Category} from './models/category.model'
import {CreateProductDto} from './dtos/product.dto'
import {ProductMemoryService} from './services/products-memory.service'


const productService = new ProductMemoryService();
for(let i=0; i<10;i++){
  //const data : productInterface =  {}
   productService.create({
    title:faker.commerce.productName(),
    categoryId: faker.number.int({max: 9999,}),
    price: parseInt(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    images : [faker.image.urlLoremFlickr()],
    creationAt:  faker.date.recent(),
    updatedAt:   faker.date.recent(),
  });
}

console.log(productService.getAll())