// Array.filter() : is used to create the new array with all elements that pass the test provided by a function 

let age = [18,16,21,17,19];
let adults = age.filter(checkage);         


adults.forEach(print);
function checkage(element){
    return element >= 18;            //this is the test that is to be passed 
}

function print(element){
    console.log(element);
}