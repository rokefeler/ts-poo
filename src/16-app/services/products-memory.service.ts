import { faker } from '@faker-js/faker';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

export class ProductMemoryService {
  
  private products: Product[] = [];

  getAll() : Product[]{
    return this.products;
  }

  create(data: CreateProductDto) : Product {
  const newProduct : Product = {
    id: faker.number.int({max: 9999,}),

    category:  {
      id: data.categoryId,
      name: faker.commerce.department(),
      image: faker.image.url(),
      updatedAt: faker.date.recent(),
      creationAt: faker.date.recent(),
    },
    ...data,
  }
  
    return this.add(newProduct);
  }

  add(product: Product){
    this.products.push(product);
    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto) : Product {
    const index = this.products.findIndex(i=>i.id==id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find(e=>e.id===id);
  }  

}