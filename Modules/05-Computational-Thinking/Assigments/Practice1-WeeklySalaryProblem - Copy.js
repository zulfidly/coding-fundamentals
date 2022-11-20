// The input list hours is listed sequentially, ordered from Monday to Sunday.
// A worker earns $10 an hour for the first 8 hours.
// For every overtime hour, he earns $15.
// On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.

function weeklySalary(hours) {    
    // your code
    const usualRate = 10; //1st 8 hours
    const wkdyOTrate = usualRate*1.5;
    const wkndUsualRate = usualRate*2;
    const wkndOTrate = wkdyOTrate*2;

    const wkdyNormHrs = hours.slice(0, 5).map(hrsNormal)
    const wkdyOThrs = hours.slice(0, 5).map(hrsOT)
    const wkndNormHrs = hours.slice(5, 7).map(hrsNormal)
    const wkndOThrs = hours.slice(5, 7).map(hrsOT)

    // console.log(wkdyNormHrs, wkdyOThrs)
    // console.log(wkndNormHrs, wkndOThrs)

    totalPay = 
    wkdyNormHrs.reduce(sumBot)*usualRate +
    wkdyOThrs.reduce(sumBot)*wkdyOTrate +
    wkndNormHrs.reduce(sumBot)*wkndUsualRate +
    wkndOThrs.reduce(sumBot)*wkndOTrate;
    console.log('TotalPay : ',totalPay)

    function hrsNormal(c) {
        if(c <= 8) {
            return c;
        } else {
            return 8;
        }
    }
    function hrsOT(d) {
        if(d <= 8) {
            return 0;
        } else {
            return d-8;
        }
    }
    function sumBot(a,b) {
        return a+b;
    }

    return totalPay
}
console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]) === 400)
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]) === 410)
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]) === 280)