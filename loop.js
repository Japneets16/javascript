// let userName="";

// while(userName == "" || userName == null){
//     userName=window.prompt("enter ur name!");
// }

// console.log("hello" , userName); 


// another way of writing this code in the do while state

// do{
//     userName= window.prompt("enter ur name ");

// }while(userName ="" || userName== null)


//other loops (for looops)

// for(let i=0;i<=10;i++){
//     console.log(i);
// }


// break and the continue loops 

// break is used to loop entirely
// continue = oh particular iteration nu asi remove krde hnn

for(let i=1; i<20;i++){

    // if(i==13){
    //     break;
    // }
    if(i==13){
        continue;       //13 nu chdd ke baaki saare elements aa gye hai 
    }
    console.log(i)
}