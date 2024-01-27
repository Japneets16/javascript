// let total = sum(6,3)
// displayConsole(total);
// displayDOM(total);

// function sum(x,y){
//     let result= x+y;
//     return result
// }

// function displayConsole(total){

//     console.log(total);

// }

// function displayDOM(total){
//     document.getElementById("mylabel").innerHTML = total;

// }


//displayConsole is for showing messages in the console, which is like a secret diary for programmers, and displayDOM (document object model) is for updating information on a webpage, like changing a sign to show something new.


// using the callback function 

// sum(2,8,displayConsole);          //numbers to add and the callback fucn

// function sum(x,y,callback){
//     let result = x+y;
//     callback(result);

// }

// function displayConsole(total){

//     console.log(total);

// }

// function displayDOM(total){
//     document.getElementById("mylabel").innerHTML = total;

// }

//In programming, callbacks work similarly. You make an initial request (like requesting data from a server), and instead of waiting for the response doing nothing, you provide a callback function. This callback function gets executed when the response is ready. So, callbacks help you perform actions or handle data once a certain task (like fetching data) is completed.



// Function to perform operations (sum or subtract) and use a callback
function performOperation(x, y, operationCallback) {
    // Perform the operation and pass the result to the callback
    const result = operationCallback(x, y);
    // Display the result
    console.log("Result:", result);
}

// Callback function for addition
function add(x, y) {
    return x + y;
}

// Callback function for subtraction
function subtract(x, y) {
    return x - y;
}

// Using the performOperation function with the add callback
performOperation(5, 3, add);

// Using the performOperation function with the subtract callback
performOperation(10, 4, subtract);









