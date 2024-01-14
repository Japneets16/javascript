// Array.forEach()  is used once in the callback function fo the each callback array element 

let students = ["rahul", "sanyam"]
students.forEach(capital);
students.forEach(print);

function capital(element,index,array){
    array[index]= element[0].toUpperCase() + element.substring(1);

}

function print(element){
    console.log(element);

}