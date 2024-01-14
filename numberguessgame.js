
 const answer=Math.floor( Math.random()*10+1);    // 10 rep the counting till 10
                                                //   1 rep stsrt from the 1 and const makes sure that it must be same


document.getElementById("submit").onclick=function(){


    let guess = document.getElementById("txt").value

    if(guess == answer){            //== means the comparison
        window.alert("right guess")
    }
    else if(guess < answer){
        window.alert("the guess has the less value")

    }
    else{
        window.alert("the guess has larger value")

    }
}
