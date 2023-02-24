var date1 = new Date().getTime();
var date2 = new Date("05/02/2021");

// To calculate the time difference of two dates
var Difference_In_Time = date1 - date2.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

document.getElementById("count-days").innerText = Math.floor(Difference_In_Days)