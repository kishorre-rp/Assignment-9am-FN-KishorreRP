const products = [
  { name: "Laptop", price: 75000, brand: "Dell" },
  { name: "Phone", price: 25000, brand: "Samsung" },
  { name: "Tablet", price: 35000, brand: "iPad" }
];


products.forEach(({ name, price }) => {
  console.log(`${name}: ₹${price}`);
});

