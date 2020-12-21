//Remove Duplicates from an array
//Anonymous Function

let removeDuplicates = (arr) => {
  let frequencyCounter = {}
  let resultArray = []
  for(const el of arr){
    frequencyCounter[el] = (frequencyCounter[el] || 0) + 1
  }
  
  for(let key in frequencyCounter){
    resultArray.push(parseInt(key))
  }
  
  return (resultArray)
}

console.log(removeDuplicates([1,1,1,2,2,2,3,3,3,4,4]))

//IIFE

let removeDuplicatesIIFE = ((arr) => {
  let frequencyCounter = {}
  let resultArray = []
  for(const el of arr){
    frequencyCounter[el] = (frequencyCounter[el] || 0) + 1
  }
  
  for(let key in frequencyCounter){
    resultArray.push(parseInt(key))
  }
  
  return (resultArray)
})([1,1,1,2,2,2,3,3,3,4,4])

console.log(removeDuplicatesIIFE)