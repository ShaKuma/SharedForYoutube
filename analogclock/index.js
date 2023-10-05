document.addEventListener('DOMContentLoaded', onPageLoad);

let second = document.querySelector('.second-hand');
let minute = document.querySelector('.minute-hand');
let hour = document.querySelector('.hour-hand');
let meridian = document.querySelector('.am-pm');
let ss, hh, mm;

function onPageLoad(){
    setInterval(handleClockDisplay, 1000);
}

function handleClockDisplay(){
    let date = new Date();
    hh = new Intl.DateTimeFormat('en', {hour: 'numeric'}).format(date);
    mm = new Intl.DateTimeFormat('en', {minute: 'numeric'}).format(date);
    ss = new Intl.DateTimeFormat('en', {second: 'numeric'}).format(date);

    newHH = hh.split(' ');
    minute.style.transform = `rotateZ(${mm * 6 - 90}deg)`;
    hour.style.transform = `rotateZ(${newHH[0] * 30 + (mm * 0.5) - 90}deg)`;
    second.style.transform = `rotateZ(${ss * 6 - 90}deg)`;
    meridian.innerHTML = newHH[1];
}