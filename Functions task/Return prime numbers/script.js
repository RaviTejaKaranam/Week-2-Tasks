//Return all prime numbers
//Anonymous Functions

let findPrimes = (arr) => {
  let resultArray = []
  for(const el of arr){
    if(el > 1){
      let isPrime = true
      for(let i = 2;i < el;i++){
        if(el % i === 0){
          isPrime = false
          break
        }
      }
      if(isPrime){
        resultArray.push(el)
      }
    }
  }
  
  
  return resultArray
}
console.log(findPrimes([2,3,4,5,6,7]))


//IIFE
let findPrimesIIFE = ((arr) => {
  let resultArray = []
  for(const el of arr){
    if(el > 1){
      let isPrime = true
      for(let i = 2;i < el;i++){
        if(el % i === 0){
          isPrime = false
          break
        }
      }
      if(isPrime){
        resultArray.push(el)
      }
    }
  }
  
  
  return resultArray
})([2,3,4,5,6,7])

console.log(findPrimesIIFE)