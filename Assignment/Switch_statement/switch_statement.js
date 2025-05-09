// Switch Statement
const day = "monday";

switch (day) {
  case "monday":
    console.log("Job Day");
    console.log("wake up for job");
    break;
  case "tuesday":
    console.log("Second day");
    break;
  case "wednesday":
    console.log("Mid day");
    break;
  case "thursday":
    console.log("Secondlast day");
    break;
  case "friday":
  case "saturday":
  case "sunday":
    console.log("Last Day");
    console.log("Weekend");
    break;

  default:
    console.log("Invalid day");
}

// Switch Statement with if else

const day1 = "wednesday";

if (day1 === "monday") {
  console.log("Job Day");
  console.log("wake up for job");
} else if (day1 === "tuesday") {
  console.log("Second day");
} else if (day1 === "wednesday" || day1 === "thursday") {
  console.log("Mid day");
} else if (day1 === "friday" || day1 === "saturday" || day1 === "sunday") {
  console.log("Last Day");
  console.log("Weekend");
} else {
  console.log("Invalid day");
}
