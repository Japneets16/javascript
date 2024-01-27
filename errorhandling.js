// it is used to show errors in the program 

// try Block:

// The try block encloses code that might throw an exception. If an exception occurs, control moves to the catch block.
// catch Block:

// The catch block handles exceptions caught in the try block. It contains code to manage or log the error. After execution, the program continues with the code following the try-catch block.
// throw Statement:

// The throw statement is used to manually throw exceptions. It allows you to create custom errors or handle specific error conditions.
// finally Block:

// The finally block contains code that always runs, regardless of whether an exception occurred or not. It is commonly used for cleanup operations.


function age(age){
    if( age<18){
        throw new Error("age must be greater than the 18");
    }
    else{
        console.log("age is valid")
    }
}
try{
    age(16);
}
catch(error){
    console.log(`there is an error: ${error.message}`)
}
finally{
    console.log("This always runs, whether there was an exception or not");

}