let age=prompt("Enter age");
if(age>=0 && age <=2)
{
    console.log("Cute Baby ):");
}
else if(age>=3 && age <=5)
{
  console.log("You are toddler ):");
}
else if(age>=6 && age <=12)
{
    console.log("You are child ):");
}
else if(age>=13 && age <=18)
{
    console.log("You are teenager ):");
}
else if(age>=19)
{
    console.log("You are old or older ):");
}
else{
    console.error("Wrong Input!");
}