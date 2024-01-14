// hypotunese ques

// let a;
// let b;
// let c;

// a= window.prompt("enter the a");
// a=Number(a);

// b= window.prompt("enter the b");
// b=Number(b);

// c= (Math.pow(a,2) + Math.pow(b,2));
// c=Math.sqrt(c);

// console.log("the size is :",c);

// using the html

document.getElementById("mybutton").onclick = function () {

  a = document.getElementById("inputa").value;
  a = Number(a);

  b = document.getElementById("inputb").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("ctextbox").innerHTML = "the value of c is " + c;
};
