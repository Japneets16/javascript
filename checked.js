document.getElementById("submit").onclick= function(){

    if(document.getElementById("visabtn").checked){
        window.alert("U are using the visa option");
    }
    else if(document.getElementById("mastercardbtn").checked){
        window.alert("U are using the mastercard option");

    }
    else if(document.getElementById("phonepebtn").checked){
        window.alert("U are using the phonepe option");

    }
    else{
        window.alert("choose atleast one option for the payment")
    }
}