let length;
let breadth;

breadth=window.prompt("enter the width");
breadth=Number(breadth)

length= window.prompt("enter the length");
length=Number(length)

// result=Number(result);

result=area(length, breadth);

function area( length, breadth){
    
    let getarea=length* breadth;
    return getarea;
    
}
window.alert("the area is "+ result)