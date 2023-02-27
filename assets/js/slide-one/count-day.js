var date1 = new Date().getTime();
var date2 = new Date("05/02/2021");

// To calculate the time difference of two dates
var Difference_In_Time = date1 - date2.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// document.getElementById("count-days").innerText = Math.floor(Difference_In_Days)

// Number counter animation
const counterAnim = (qSelector, start, end, duration) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

document.addEventListener("DOMContentLoaded", () => {
    counterAnim("#count-days", 0 , Math.floor(Difference_In_Days)+1, 1000);
});