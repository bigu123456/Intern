import React from 'react'

const Calculator = () => {

    const products = [
  { id: 1, name: 'Laptop', price: 1200, category: 'Electronics', stock: 30 },
  { id: 2, name: 'Phone', price: 800, category: 'Electronics', stock: 100 },
  { id: 3, name: 'Shirt', price: 50, category: 'Apparel', stock: 200 },
  { id: 4, name: 'Shoes', price: 120, category: 'Apparel', stock: 150 },
  { id: 5, name: 'Watch', price: 200, category: 'Accessories', stock: 75 },
];
//Write a method to get all product names as an array.
const names=products.map(pro=>pro.name)
console.log(names)
// Write a method to find a product by its id.
const hero= products.find(i=>i.id===3)
console.log(hero)
//Write a method to filter all products belonging to the category "Electronics".
const elo=products.filter(eloo=>eloo.category==="Electronics")
console.log(elo)
//Write a method to calculate the total stock of all products combined.
const total=products.reduce((Sum, items)=>Sum+items.stock,0)
console.log(total);
//Write a method to check if there is any product with stock less than 50.
const fifty=products.filter(fil=>fil.stock<50)
console.log(fifty)
//Write a method to increase the price of all "Apparel" products by 10%.

products.forEach(all=>{
if(all.category==="Apparel"){
    all.price=all.price * 1.10;
}
})
console.log(products)
//Write a method that returns a new array of products sorted by price in ascending order.
const low=[...products].sort((a,b)=>b.price-a.price)
console.log(low);
//Write a method to find the average price of all products.
const avg=products.reduce((sum,items)=>sum+items.price,0)
const averages=avg/products.length
console.log(averages)








  return (
  <>
  <h1> learning js</h1>
  </>  
      
  
  )
}

export default Calculator
