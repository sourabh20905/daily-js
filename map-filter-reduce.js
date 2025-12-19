// map
// used when you want to shape the data

const products = [
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Mouse", price: 500, inStock: true },
  { id: 3, name: "Keyboard", price: 1500, inStock: false },
  { id: 4, name: "Monitor", price: 12000, inStock: true },
];

const productNames = products.map((product) => product.name);
console.log(productNames);


