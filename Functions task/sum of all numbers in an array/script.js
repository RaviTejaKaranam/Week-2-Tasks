//Sum of all numbers in an array
//Anonymous functions

const sum = (arr) => {
  let total = 0
  for(let el of arr){
    total = total + el
  }
  console.log(total)
  //return total
}
sum([1,2,3,4,5,6,7,8,9])
// console.log(sum([1,2,3,4,5,6,7,8,9]))

//IIFE
const sumIIFE = ((arr) => {
  let total = 0
  for(let el of arr){
    total = total + el
  }
  console.log(total)
  //return total
})([1,2,3,4,5,6,7,8,9])