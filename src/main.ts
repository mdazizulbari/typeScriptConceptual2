import { PhysicalProduct } from "./models/PhysicalProduct";
import { Product } from "./models/Product";
// import { DigitalProduct } from "./models/DigitalProduct";

// const sampleProduct = new Product(1, "Demo Product", 20, 50);
// console.log(sampleProduct.getDetails());

// const digitalProduct = new DigitalProduct(1, "Demo Product", 20, 50, 100);
// console.log(digitalProduct.getDetails());
// console.log(digitalProduct.getStockValue());
// console.log(digitalProduct.getDownloadInfo());

const sampleProduct = new Product(1, "Demo Product", 20, 50);
// console.log(sampleProduct.getDetails());
// console.log(sampleProduct.sell(25));
// console.log(sampleProduct.getDetails());

const sampleProduct1 = new PhysicalProduct(1, "Demo Product", 20, 50);
console.log(sampleProduct.getStockValue());
console.log(sampleProduct1.getStockValue());
