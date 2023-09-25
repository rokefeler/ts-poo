import axios from 'axios';
import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.models";
import { Product } from "../models/product.model";

export class ProductHttService implements ProductService{

  private URL = "https://api.escuelajs.co/api/v1/products";

  async getAll() {
    const { data } = await axios.get<Product[]>(this.URL);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto)  {
    const { data } = await axios.put(`${this.URL}/${id}`,changes);
    return data;
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await axios.post(`${this.URL}`,dto);
    return data;
  }

  async findOne(id: Product['id']) {
    const { data } = await axios.get(`${this.URL}/${id}`);
    return data;
  }

}