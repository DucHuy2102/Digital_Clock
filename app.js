let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let current_Time = new Date();
    hrs.innerHTML = (current_Time.getHours() < 10 ? "0" : "") + current_Time.getHours();
    min.innerHTML = (current_Time.getMinutes() < 10 ? "0" : "") + current_Time.getMinutes();
    sec.innerHTML = (current_Time.getSeconds() < 10 ? "0" : "") + current_Time.getSeconds();
}, 1000);
