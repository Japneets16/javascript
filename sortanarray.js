
let grades=[100,50,90,60,80,70];

grades= grades.sort(descending);

grades.forEach(print);
function descending(x,y){
    return y-x;  
    
    
//The expression y - x performs a numeric comparison. If y is greater than x, the result is a positive number, indicating that y should come before x in the sorted array. If y is smaller than x, the result is a negative number, indicating that x should come before y in the sorted array. If x and y are equal, the result is 0.

}

function print(element){
    console.log(element);
}