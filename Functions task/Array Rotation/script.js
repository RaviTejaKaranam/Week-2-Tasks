//Rotate Array by k times ( Assuming right rotation )
//Anonymous Function
//[1,2,3,4,5] -> [5,1,2,3,4] -> [4,5,1,2,3] (when k = 2)

const rightRotate  = (arr,k) =>{
  const endElements = []
  for(let i = arr.length - k; i < arr.length;i++){
    endElements.push(arr[i])
  }
  const startElements = []
  for(let i = 0;i < arr.length - k;i++){
    startElements.push(arr[i])
  }
  return endElements.concat(startElements)
}

console.log(rightRotate([1,2,3,4,5],2))


//leftRotateIIFE

const rightRotateIIFE = ((arr,k) =>{
  const endElements = []
  for(let i = arr.length - k; i < arr.length;i++){
    endElements.push(arr[i])
  }
  const startElements = []
  for(let i = 0;i < arr.length - k;i++){
    startElements.push(arr[i])
  }
  return endElements.concat(startElements)
})([1,2,3,4,5],5)

console.log(rightRotateIIFE)
