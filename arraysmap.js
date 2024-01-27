// Array.map(): You can think of Array.map() as a method that transforms each element of an existing array and creates a new array with the transformed values.

let numbers=[1,2,3,4,5];
let squares = numbers.map(square);     //to create the a new array 

squares.forEach(print);     //it is used to print the each element in the square array 

function square(element){
     return Math.pow(element,2); 

}

function print(element){          //to print the element 
    console.log(element);
}