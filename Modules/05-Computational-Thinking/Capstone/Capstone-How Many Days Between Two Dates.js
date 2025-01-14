// Create a function that takes two dates and returns the number of days between the first and second date.

function getDays(d1, d2) {
    console.log((d2-d1)/1000/60/60/24);
    return (d2-d1)/1000/60/60/24;
}
console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  )) //➞ 6
getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
) //➞ 3
// Dates may not all be in the same month/year. 
getDays(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
) //➞ 10
getDays(
    new Date("February 28, 2020"),
    new Date("March 1, 2020")
) //➞ leap year