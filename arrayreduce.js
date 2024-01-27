// Array.reduce() : it is used to reduce the array in the single value 

let prices = [5,1,15,20,25,30];
let total = prices.reduce(checkout);

console.log(`the total is : $ ${total}`)      
//first dollar isgn is to show the symbol of the dollar and the next dollar sign which is the close to the total it is to do the total

function checkout(element, total)
{
    return total+element;
}
