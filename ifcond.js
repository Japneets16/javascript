// if statements

let age;
document.getElementById("result").onclick = function () {

    let ageinput= document.getElementById("tell").value;

  age = Number(ageinput);
  
  if (age >= 18) {
    document.getElementById("ans").innerHTML = "u are adult";
  } else {
    document.getElementById("ans").innerHTML = "u are not adult ";
  }
};
