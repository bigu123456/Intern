import React from 'react'


const Learning = () => {
   
    const users = [
  { id: 1, name: "alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 30, isActive: false },
  { id: 3, name: "Charlie", age: 35, isActive: true },
  { id: 4, name: "David", age: 40, isActive: false },
  { id: 5, name: "Eve", age: 22, isActive: true },
  { id: 6, name: "bigyan", age: 28, isActive: false },
  { id: 7, name: "Grace", age: 33, isActive: true },
  { id: 8, name: "Hannah", age: 27, isActive: true },
  { id: 9, name: "Isaac", age: 45, isActive: false },
  { id: 10, name: "Julia", age: 29, isActive: true },
  { id: 11, name: "Kevin", age: 31, isActive: false },
  { id: 12, name: "Lily", age: 24, isActive: true },
  { id: 13, name: "Michael", age: 38, isActive: true },
  { id: 14, name: "Natalie", age: 26, isActive: false },
  { id: 15, name: "Oliver", age: 42, isActive: true },
  { id: 16, name: "Patricia", age: 36, isActive: false },
  { id: 17, name: "Quentin", age: 29, isActive: true },
  { id: 18, name: "Rachel", age: 34, isActive: true },
  { id: 19, name: "Sam", age: 41, isActive: false },
  { id: 20, name: "Tina", age: 23, isActive: true },
  { id: 21, name: "Uma", age: 50, isActive: false },
  { id: 22, name: "Victor", age: 32, isActive: true },
  { id: 23, name: "Wendy", age: 28, isActive: true },
  { id: 24, name: "Xavier", age: 47, isActive: false },
  { id: 25, name: "Yvonne", age: 25, isActive: true },
  { id: 26, name: "Zach", age: 39, isActive: false },
  { id: 27, name: "Amelia", age: 21, isActive: true },
  { id: 28, name: "Ben", age: 44, isActive: false },
  { id: 29, name: "Clara", age: 30, isActive: true },
  { id: 30, name: "Daniel", age: 37, isActive: true },
  { id: 31, name: "Emma", age: 26, isActive: false },
  { id: 32, name: "Finn", age: 33, isActive: true },
  { id: 33, name: "Gina", age: 29, isActive: true },
  { id: 34, name: "Henry", age: 46, isActive: false },
  { id: 35, name: "Isabelle", age: 24, isActive: true },
  { id: 36, name: "Jack", age: 41, isActive: false },
  { id: 37, name: "Kate", age: 27, isActive: true },
  { id: 38, name: "Liam", age: 35, isActive: true },
  { id: 39, name: "Mia", age: 22, isActive: false },
  { id: 40, name: "Noah", age: 48, isActive: true },
  { id: 41, name: "Olivia", age: 31, isActive: false },
  { id: 42, name: "Peter", age: 29, isActive: true },
  { id: 43, name: "Quinn", age: 43, isActive: false },
  { id: 44, name: "Rose", age: 26, isActive: true },
  { id: 45, name: "Steven", age: 38, isActive: true },
  { id: 46, name: "Tara", age: 25, isActive: false },
  { id: 47, name: "Ursula", age: 40, isActive: true },
  { id: 48, name: "Vince", age: 32, isActive: false },
  { id: 49, name: "Will", age: 28, isActive: true },
  { id: 50, name: "Zoe", age: 34, isActive: true }
];
// const uppercase=users.map(user=>user.name.toUpperCase())
// console.log( "The name of users starts with uppercase are",uppercase)
// const active=users.filter(person=>person.isActive)
// console.log("the users which have iscative is true are",active);
// const age=users.reduce((sum,agess)=>sum+ agess.age,0)
// console.log(" The total sum of age of all suers are",age)
// const under=users.filter(eighteen=>eighteen.age<23)
// console.log("the users whose ages are under 23 are",under)
// const over=users.filter(overr=>overr.age>18)
// console.log(over)
// const nameis=users.filter(is=>is.name==="Charlie")
// console.log(nameis)
// const descinding=users.slice().sort((a,b)=>b.age-a.age)
// console.log(descinding)
// const sort=users.filter(active=>active.isActive)
// .sort((a,b)=>a.age-b.age)
// .map(use=>use.name.toUpperCase())
// console.log(sort)

const uppercase=users.map(user=>user.name.toUpperCase())
console.log(uppercase)
const active=users.filter(act=>act.isActive)
console.log(active)
const sum=users.reduce((number, num)=>number+num.age,0)
console.log(sum)
const under=users.some(und=>und>23)
console.log(under)

  return (
    <>
  <h1> learning js methods</h1>
   
    
    </>
  )
}

export default Learning
