const currentYear = document.querySelector(".current-year")

const now = new Date();
const year = now.getFullYear();

currentYear.innerHTML = year;