// DOM
let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");

// GET TIME
let setData = () => {
    let time = new Date();

    let currentSeconds = time.getSeconds();
    let currentMinutes = time.getMinutes();
    let currentHours = time.getHours();

    secondHand.style.transform = `rotate(${180 + currentSeconds * 6}deg)`;
    minuteHand.style.transform = `rotate(${180 + currentMinutes * 6}deg)`;
    hourHand.style.transform = `rotate(${180 + currentHours * 30}deg)`;
}

let time = new Date();

setData();
setInterval(() => setData(), 1000)

