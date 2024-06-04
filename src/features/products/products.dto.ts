export class Product {
  id: string;
  name: string;
  price: number;
}

export class ProductUpdated {
  id: string;
  name?: string;
  price?: number;
}
