import { Product } from "../models/product.model";
import { Category } from "../models/category.model";

//export type createdProductDTO = Omit<productInterface, 'id' | 'createdAt' | 'updatedAt' | 'category'>;
export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id']; /* para el momento de la creación, solo necesito el Id de la categoria */
}

export interface UpdateProductDto extends Partial<CreateProductDto> {};

