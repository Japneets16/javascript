//  spread operator used in spreading the elements in the code of the js 
// we use the [... operator] this is used in the spread operato r


// let num=[ 1,2,3,4,5,6,7,8,9]

// console.log( ...num);



//rest parameter that is used to collect the function arguments into an array 

let a=2;
let b=7;
let c=4;
let d=5;

console.log("this is the sum of numbers" , sum(a,b,c))
function sum(...numbers){                                //...numbers  is the rest parameter
    let total =0;

    for(let number of numbers){
        total+=number;
    }
    return total
}