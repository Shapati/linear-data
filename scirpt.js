// const array = [1,2,4,5]
// const second = [1,2,3]

// // if(second.includes(2)){
// //   console.log('hi')
// // }


// // const values = array.filter(value => !second.includes(value))
// // const val = second.filter(value => !array.includes(value))
// // console.log(val)
// // console.log(values)

const sum =(a,b) =>{
 
  const nifemi = a.filter((item)=>{
    return !b.includes(item)
  })
  const daniel = b.filter((Second)=>{
    return !a.includes(Second)
  })
  const total = daniel.concat(nifemi)
  let final = 0
  for(let i = 0; i<total.length ; i++){
  
   final+=total[i] 
   
  }
  return final

  
}


console.log(sum([1,2,3],[1,2,5,6]))




// let a = [2,1,1,0,2,5,4,0,2,8,7,7,9,2,0,1,9];


// for (let i = 0; i < a.length; i++) {
//   const element = a[i];

//   //  console.log(`original list: ${element}`);
// }

// while(true) {
//   let track = 0;

//   // stops at the second to the last number
//   for (let i = 0; i < a.length - 1; i++) {
//     if(a[i] > a[i + 1]){
//       let temp = a[i];
//       a[i] = a[i + 1];
//       a[i + 1] = temp;
//       track = 1;
//     }
    
    
//   }

//   if(track === 0) {
//     break;
//   }
  
// }

// for (let i = 0; i < a.length; i++) {
//   console.log(`sorted list: ${a[i]}`);
// }



// const prices=[200,400,600,1200]

// const discount = prices.map((price)=>{
//   return price
// })

// console.log(discount)