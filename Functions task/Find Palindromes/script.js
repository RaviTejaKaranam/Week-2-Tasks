//Return all palindromes in an array
//Anonymous Function

let checkPalindromes = (arr) => {
  let resultArray = []
  for(const el of arr){
    
    let start = 0
    let end = el.length - 1
    let mid = Math.floor((start+end)/2)
    let isPalindrome = true
    for(let i = 0;i <= mid;i++){
      if(el[start] !== el[end]){
        isPalindrome = false
        break
      }
      start++
      end--
    }
    if(isPalindrome){
      resultArray.push(el)
    }
  }
  
  
  return resultArray
}
console.log(checkPalindromes(["malayalam","moon","noon"]))

//IIFE

let checkPalindromesIIFE = ((arr) => {
  let resultArray = []
  for(const el of arr){
    
    let start = 0
    let end = el.length - 1
    let mid = Math.floor((start+end)/2)
    let isPalindrome = true
    for(let i = 0;i <= mid;i++){
      if(el[start] !== el[end]){
        isPalindrome = false
        break
      }
      start++
      end--
    }
    if(isPalindrome){
      resultArray.push(el)
    }
  }
  
  
  return resultArray
})(["malayalam","moon","noon"])

console.log(checkPalindromesIIFE)



