let total = sum(2,3)
displayDOM(total);

function sum(x,y){
    let result= x+y;
    return result
}

function displayConsole(output){

    console.log(output);

}

function displayDOM(output){
    document.getElementById("mylabel").innerHTML = output;

}


//displayConsole is for showing messages in the console, which is like a secret diary for programmers, and displayDOM is for updating information on a webpage, like changing a sign to show something new.






