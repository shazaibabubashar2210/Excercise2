let num = parseInt(prompt("Enter any number to check whether it is positive negative or zero"));
if (num < 0) 
{
  console.log("Number is Negative");
} else if (num === 0) 
{
  console.log("Number is 0");
}
else if(num>0)
{
    console.log("Number is Positive");
}
else{
    console.error("Wrong Input!");
}
