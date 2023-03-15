// function pairwise(arr, arg) {
//     const sortArr = arr.map((item, index) =>[item, index]).sort((a, b)=> a[0]-b[0])
//     let pointL = 0;
//     let pointR = arr.length - 1;
//     let result;
//     let count = 0;

//     while((pointR - pointL) > 0 ){
//         result = sortArr[pointL][0] + sortArr[pointR][0]
//         if(result > arg){
//             pointR--;
//         }else if(result <arg){
//             pointL++;
//         }else{
//             // if(sortArr[pointR+1] && sortArr[pointR][0] === sortArr[pointR+1][0]){
//             //     count = count - sortArr[pointR+1][1] + sortArr[pointR][1]
//             // }else{
//                 count = count + sortArr[pointL][1] + sortArr[pointR][1]
            
//             pointR--;
//         }
//     }
//     return count;
//   }
  
//   console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
// const promise = new Promise((resolve, reject)=>{
//     console.log(2)
//     setTimeout(()=>{
//     resolve(123)
//     },1000)
// })
// promise.then((data)=> console.log(data))
// console.log(promise)
console.log(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
function insertionSort(array) {
    // Only change code below this line
    const sortArr = [array[0]];
    let interVar 
    for(let i = 0; i< array.length; i++){
        if(sortArr[i] > array[i+1]){
            interVar = array[i+1]
            sortArr[i+1] = array[i]
            sortArr[i] = interVar
            
        }else{
            sortArr.push(array[i+1])
        }
        for(let j = sortArr.length - 2; j > 0; j--){
            if(sortArr[i] < sortArr[i-1]){
                interVar = sortArr[i-1]
                sortArr[i] = sortArr[i-1]
                sortArr[i-1] = interVar
            }
        }
        
    }
    return sortArr;
    // Only change code above this line
  }


// function sym(...args) {
//   const arr = [...args]
   
//   const symmetric = (arrayResult, arrayNext)=>{
//     const arr = [];
//     arrayNext.forEach(element => {
//         if(arr.indexOf(element)===-1){
//             arr.push(element)
//         }        
//     });
    
//     arr.forEach(item => {
//         if(arrayResult.indexOf(item) !== -1){
//             arrayResult.splice(arrayResult.indexOf(item), 1)
//         }else {
//             arrayResult.push(item)
//         }
//     })

//     return arrayResult
//   }
//   return arr.reduce(symmetric,[])
// }

// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
// console.log(!true)

// class Bird{
//     constructor(){
        
//         this.fight = true
//     }
//     aa(){
//         console.log(ss)
//     }
// }

// const aa = {
//     aa(){

//     },

// }
// class Animal{
    
//     constructor(){

//     }
// }
// Animal.prototype = {
//     numLeg: 4
// }

// const terrier = Object.create(Animal.prototype)

// console.log(terrier.hasOwnProperty("numLeg"))

// function updateInventory(arr1, arr2) {
//     const invNew = [];
//     const invObj = arr1.reduce((obj, item) =>{
        
//         obj[item[1]] = [item[0], item[1]];
//         return obj;
//     },{})

//     arr2.forEach(item => {
//         if(invObj.hasOwnProperty(item[1])){
//             invObj[item[1]][0] += item[0]
//         }else{
//             invObj[item[1]] = [item[0], item[1]];
//         }
//     })

//     const property = Object.keys(invObj).sort()

//     for(let i = 0; i < property.length; i++){
//         invNew.push(invObj[property[i]])
//     }
    
//     return invNew
// }

// // Example inventory lists
// var curInv = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ];

// var newInv = [
//     [2, "Hair Pin"],
//     [3, "Dlf-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ];

// console.log(updateInventory(curInv, newInv));