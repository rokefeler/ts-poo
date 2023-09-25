import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from './base-http.service';

export class ProductCrudService{

  private URL = "https://api.escuelajs.co/api/v1/products";
  private http = new BaseHttpService<Product>(this.URL);

  async getAll() {
    return this.http.getAll();
  }

  async update(id: Product['id'], dto:UpdateProductDto)  {
    //permisos
    //logica
    return this.http.update(id,dto);
  }

  async create(dto: CreateProductDto): Promise<Product> {
    return this.http.create(dto);
  }

  async findOne(id: Product['id']) {
    return this.http.findOne(id);
  }

}