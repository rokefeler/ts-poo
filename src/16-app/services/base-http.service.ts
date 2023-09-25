import axios from 'axios'

export class BaseHttpService<T>{
  constructor(
    private URL: string
  ){}

  async getAll() {
    const { data } = await axios.get<T[]>(this.URL);
    return data;
  }

  async update<ID, DTO>(id: ID, changes:DTO)  {
    const { data } = await axios.put(`${this.URL}/${id}`,changes);
    return data;
  }

  async create<DTO>(dto: DTO): Promise<T> {
    const { data } = await axios.post(`${this.URL}`,dto);
    return data;
  }

  async findOne<ID>(id: ID) {
    const { data } = await axios.get<T>(`${this.URL}/${id}`);
    return data;
  }

}

// (async()=>{
//   const url = 'https://api.escuelajs.com/api/v1/products';
//   const productService = new BaseHttpService<Product>(url);
//   const rta = await productService.getAll();
//   console.log('rta',rta);

//   const url1 = 'https://api.escuelajs.com/api/v1/categories';
//   const categoryService = new BaseHttpService<Category>(url1);
//   const rta1 = await categoryService.getAll();
//   console.log('rta1',rta1);

// })();
