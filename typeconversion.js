//this is used to convert the data types (num,string,boolean )

let age = window.prompt('what is your age')

age= Number(age)        //used to convert the string into the number 

console.log(typeof age);  // to check the data type of the number 
age +=1;

console.log('ur age is ', age);

//result will be (ur age is  221) which must be 23 instead of the 221 . so this is the string so we have to convert the string into the number 

