import { User } from 'src/users/users.entity';
import { Product } from 'src/products/products.entity';

export class Order {
  date: Date;
  user: User;
  products: Product[];
}
