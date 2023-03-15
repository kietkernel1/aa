// const aa = [11,22,33,44]
//  const bb= async a =>{
//     throw Error("meen")
//     return a
// }
//     arr = aa.map((item)=> {
//         return bb(item);
//     })
//     ;(async()=>{
//         try{
//             console.log(await Promise.all(arr)) 
//         }catch(err){
//             console.log(err.message)
//         }
//     }
//     )()

function aa (){
    let dd=0;
    function bb(){
        dd = dd+1
        return dd
    }

    return [dd, bb]
}
const [dd, a] = aa();
a();
console.log(a())
console.log(dd)

// function cc (){
//     const aa = setTimeout(()=>{
//         console.log("2")
//     },2000) 
//     return aa
// }

// const ff = cc()






















// function verifyPrime (n){
//     if (n < 2){
//         return false
//     }
//     for( let i = 2; i <= Math.sqrt(n); i++ ){

//         if (! (n % 2) ){

//             return false
//         }
//     }
//     return true
// }

// function isPowerOfTwo (n) {
//     const divide= Math.log2(n)
//    if (divide % Math.floor(divide) === 0){
//     return true
//    }

//    return false
// }

// function isPowerOfTwoBitWise (n) {
//     console.log((n & (n-1)))
//    return ((n & (n-1)) === 0)
// }

// function recursiveFibonacci (n , arr = [0, 1]) {
//     if(n < 2){
//         return n
//     }

//     if (arr.length === n ){
//         return arr[n - 1]
//     }
//     arr.push(arr[arr.length - 2] + arr[arr.length - 1])

//     console.log(arr)
//     return recursiveFibonacci(n, arr)
// }

// function recursiveFibonacci2 (n ) {
//     if(n < 2){
//         console.log(n)
//         return n
//     }
    
//     return recursiveFibonacci2(n-1) + recursiveFibonacci2(n-2)
// }

// console.log(recursiveFibonacci(40))