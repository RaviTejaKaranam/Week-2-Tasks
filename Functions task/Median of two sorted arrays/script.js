//Find median of two sorted arrays
//Anonymous Function

const findMedian = (firstArray,secondArray) => {
  if(firstArray.length !== secondArray.length){
    return 'Invalid Input' //Given both arrays are of same length
  }
  let i = 0;
  let j = 0;
  let resultArray = []
  while(i < firstArray.length || j < secondArray.length){
    if(firstArray[i] < secondArray[j]){
      resultArray.push(firstArray[i])
      i++
    }
    else if(firstArray[i] === secondArray[j]){
      resultArray.push(firstArray[i],secondArray[j])
      i++
      j++
    }
    else{
      resultArray.push(secondArray[j])
      j++
    }
  }
  //As both arrays are of same size, resultArray length will be even
  let midLeft = (resultArray.length)/2 - 1
  let midRight = (resultArray.length)/2

  return ((resultArray[midLeft] + resultArray[midRight])/2)
}

console.log(findMedian([1,3,5,7,9],[2,4,6,8,10]))
console.log(findMedian([1,3,5],[2,4,6]))

//IIFE

const findMedianIIFE = ((firstArray,secondArray) => {
  if(firstArray.length !== secondArray.length){
    return 'Invalid Input' //Given both arrays are of same length
  }
  let i = 0;
  let j = 0;
  let resultArray = []
  while(i < firstArray.length || j < secondArray.length){
    if(firstArray[i] < secondArray[j]){
      resultArray.push(firstArray[i])
      i++
    }
    else if(firstArray[i] === secondArray[j]){
      resultArray.push(firstArray[i],secondArray[j])
      i++
      j++
    }
    else{
      resultArray.push(secondArray[j])
      j++
    }
  }
  //As both arrays are of same size, resultArray length will be even
  let midLeft = (resultArray.length)/2 - 1
  let midRight = (resultArray.length)/2

  return ((resultArray[midLeft] + resultArray[midRight])/2)
})([1,3,5,7,9],[2,4,6,8,10])

console.log(findMedianIIFE);

