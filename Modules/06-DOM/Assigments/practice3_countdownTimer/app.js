const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let YYYY = new Date().getFullYear();
let MM = (new Date().getMonth() +1).toString().padStart(2, '0');
let DD = new Date().getDate().toString().padStart(2, '0');
let HH = new Date().getHours().toString().padStart(2, '0');
let mm = new Date().getMinutes().toString().padStart(2, '0');
let ss = "00";

let timeNow =  HH + ":" + mm; // "00:00"
let dateToday =  YYYY + "-" + MM + "-" + DD; // "2022-11-27"
document.querySelector("#dateOnly").value = dateToday; //"2022-11-27"//
document.querySelector("#timeOnly").value = timeNow; //"00:00"//

const startBtn = document.getElementById("submitBtn");

// to start countdown
startBtn.addEventListener("click", () => {
    const timeSet = document.querySelector("#timeOnly");
    const dateSet = document.querySelector("#dateOnly");
    let targetDateTime = dateSet.value + "T" + timeSet.value;

    // console.log(dateSet.value, typeof timeSet.value);

// ISO-8601 format is: YYYY-MM-DDTHH:mm:ss.sssZ 
// let targetDateTime = YYYY + "-" + MM + "-" + DD + "T" + HH + ":" + mm + ":" + ss;

    // console.log("diffff",(new Date(targetDateTime).getTime()-Date.now()))

    if((new Date(targetDateTime).getTime()-Date.now()) <= 0) {
        console.log("target earlier than current time")
        alert("Please set target ahead in future !");
    } else {
        console.log("target is ahead")
        myInterval = setInterval(runPerSec, 1000);
        // console.log("exiting ELSE")
    };
    // console.log("END")
});

function runPerSec () {
    const timeSet = document.querySelector("#timeOnly");
    const dateSet = document.querySelector("#dateOnly");
    let targetDateTime = dateSet.value + "T" + timeSet.value;

    if((new Date(targetDateTime).getTime()-Date.now()) <= 0) {
        clearInterval(myInterval);    
        alert("Target time reached !");
    } 
    else {    
        // console.log("target:", targetDateTime, typeof targetDateTime)
        // console.log(new Date("2022-11-27T00:00"))

        let daysToGo = Math.floor((new Date(targetDateTime).getTime()-Date.now())/day);
        let hoursToGo = Math.floor((new Date(targetDateTime).getTime()-Date.now())/hour);
        let minutesToGo = Math.floor((new Date(targetDateTime).getTime()-Date.now())/minute);
        let secondsToGo = Math.floor((new Date(targetDateTime).getTime()-Date.now())/1000);

        let dispHoursToGo = hoursToGo - Math.floor(hoursToGo/24)*24;
        let dispMinutesToGo = minutesToGo - Math.floor(minutesToGo/60)*60;
        let dispSecondsToGo = secondsToGo - Math.floor(secondsToGo/60)*60;
        
        // console.log("******************");
        // console.log("daysToGo :", daysToGo, typeof daysToGo);
        // console.log("hoursToGo :", dispHoursToGo, typeof dispHoursToGo);
        // console.log("minutesToGo :", dispMinutesToGo, typeof dispMinutesToGo);
        // console.log("secondsToGo :", dispSecondsToGo, typeof dispSecondsToGo);

        document.querySelector("#days").innerHTML = daysToGo.toString().padStart(2, '0');
        document.querySelector("#hours").innerHTML = dispHoursToGo.toString().padStart(2, '0');
        document.querySelector("#minutes").innerHTML = dispMinutesToGo.toString().padStart(2, '0');
        document.querySelector("#seconds").innerHTML = dispSecondsToGo.toString().padStart(2, '0');
    }
}
