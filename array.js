//   arrays

/*
let fruits=[ "apples" , " orange" , "chicku"]

fruits.push("lemon");   //to add the element in the end of the array 
fruits.pop();         //to pop the element from the end 
fruits.unshift("mango")    //to add the element in the beginning 
fruits.shift();           //to remove the elements from the beginning 

let length= fruits.length;
let index= fruits.indexOf("apples");      //to find the index of the array elements 


console.log(index);

*/

// let money=[ 5,10,15,20,24];

 
// for(let i=0;i<money.length;i++){
//     console.log(money[i])

// another way of writing the above for loop


// for(let i of money){
//     console.log(i)
// }



// sort the array

let fruits= ["banana", "apple" , "orange" , "mango"];

// fruits= fruits.sort()      //to sort in the alphabetically order
fruits= fruits.sort().reverse();         // to reverse the sort process

for(let fruit of fruits){

    console.log(fruit)
}
