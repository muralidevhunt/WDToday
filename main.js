let dayRef = document.getElementById("day");
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dateToday = new Date();
let dayToday = dateToday.getDay();
dayRef.innerHTML = `Today is <span> ${daysOfWeek[dayToday]} </span>`;