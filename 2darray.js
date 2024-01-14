 let fruits= ["apples" , "oranges" , "bananas"];
 let vegetables = ["carrots", "onions" , " potatoes"]
 let meats= ["eggs" , "chicken" , "fish"]

 let grocerylist = [fruits , vegetables , meats];

 for(let list of grocerylist){
    for(let fruits of list){

        console.log(fruits);
    }
 }