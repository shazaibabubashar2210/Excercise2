let compliment = prompt("Enter grade for compliement");
if (compliment === "A"||compliment === "a") {
  console.log("Great Job!");
} else if (compliment === "B"||compliment === "b") {
  console.log("Good Work");
} else if (compliment === "C" || compliment === "c") {
  console.log("Satisfactory");
} else if (compliment === "D" || compliment === "d") {
  console.log("Not a Satisfactory!Keep Work Hard");
} else if (compliment === "E" || compliment === "e") {
  console.log("Not a Good Work! Work Hard Let's you get good grade");
} else if (compliment === "F" || compliment === "f") {
  console.log("Fail! Better luck next time");
} else {
  console.error("Wrong Input!");
}
