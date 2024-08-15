export class Product {
  name: string;
  price: number;
  description: string;
  constructor(name: string, price: number = 0, description: string = "") {
    this.name = name
    this.price = price
    this.description = description
  }
}
