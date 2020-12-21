//Print odd numbers in an array
//Anonymous Function
let printOdds = (arr) => {
  for(const el of arr){
    if(el % 2 !== 0){
      console.log(el)
    }
  }
}

printOdds([1,2,3,4,5,6,7,8])

//IIFE 
let findOdds = ((arr) => {
  for(const el of arr){
    if(el % 2 !== 0){
      console.log(el)
    }
  }
})([1,2,3,4,5,6,7,8])