//Convert all strings to title caps
//Anonymous Functions

let titleCaps = (arr) => {
  let stringCapitalise = []
  let resultArray = []
  for (let el of arr){
    el = el.split(" ")
    for(let item of el){
      item = item[0].toUpperCase() + item.slice(1)
      //console.log(item)
      stringCapitalise.push(item)
    }
    //console.log(el)
    
      resultArray.push(stringCapitalise.join(" "))
      stringCapitalise = []
    }
    console.log(resultArray)
  }

titleCaps(["ravi teja","hello world","messi"])


//IIFE
let titleCapsIIFE = ((arr) => {
  let stringCapitalise = []
  let resultArray = []
  for (let el of arr){
    el = el.split(" ")
    for(let item of el){
      item = item[0].toUpperCase() + item.slice(1)
      //console.log(item)
      stringCapitalise.push(item)
    }
    //console.log(el)
    
      resultArray.push(stringCapitalise.join(" "))
      stringCapitalise = []
    }
    console.log(resultArray)
  })(["ravi teja","hello world","messi"])
