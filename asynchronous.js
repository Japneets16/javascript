// Synchronous Code:

// In synchronous code, tasks are executed one after the other in a sequential manner.
// Each task must complete before the next one begins.


// console.log("start")
// console.log("this is sunchronous ")
// console.log("end")



// asynchronous code:

// it follows a non-blocking pattern where tasks can be initiated, and the program continues with other tasks without waiting for the completion of the asynchronous operations. 

console.log("start")
setTimeout(function(){ 
     console.log("this is asynchronous")},5000)

console.log("end")