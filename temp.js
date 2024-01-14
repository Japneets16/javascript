document.getElementById("submit").onclick = function () {
  let temp;

  const cel=document.getElementById("cbtn").checked
    const fah = document.getElementById("fbtn").checked


  if (cel) {

      temp= document.getElementById("text").value;
      temp = Number(temp)
      temp= toCelsius(temp);
       document.getElementById("templabel").innerHTML= temp + "°C"


  } 
  else if (fah) {

    temp= document.getElementById("text").value;
    temp = Number(temp)
    temp= toFahrenheit(temp);
     document.getElementById("templabel").innerHTML= temp + "°F"

  }
   else {
    window.alert("select the unit")

  }
}

function toCelsius(temp){
    return (temp-32)*(5/9);

}
function toFahrenheit(temp){
    return temp * 9/5 + 32;

}
