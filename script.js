/**
 * Uppgift 1: klocka
 * 
 * Steg 1: Hämta ut timme, minut, sekund.
 * 
 * Steg 2: Uppdatera span taggarna med värdet.
 * 
 * Steg 3: Få en intervall att köra en gång i sekunden. Hämta ut timme, minut, sekund.
 * 
 * Uppgift 2: nedräknare
 * 
 * Steg 1: När sidan laddas börjar den på 1 minut.
 * 
 * Steg 2: Gör en knapp som börjar räkna ner från en minut till noll.
 * 
 * Steg 3: När den når noll går den över till negativt/stannar/ersätts av en emoji för att visa att det är klart.
 * 
 * För att stänga intervallen:
 * 
 * använd clearInterval(variabelNamn);
 * */

// Gets time
const now = new Date(); // gets current timestamp when this line was executed
console.log("Hour:", now.getHours());
console.log("Minute:", now.getMinutes());
console.log("Second:", now.getSeconds());

// Targets span elements
const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');

// Updates span elements with time
hourEl.textContent = now.getHours();
minuteEl.textContent = now.getMinutes();
secondEl.textContent = now.getSeconds();

// zeropad function that puts 0 in front of num if it's less than 10
const zeropad = num => {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

// Time function
const updateTime = () => {

    // Gets current time
    const currentTime = new Date();

    let hour = currentTime.getHours();
    // if hour is less than 10
    if (hour < 10) {
        // adds 0 before hour
        hour = '0' + hour;
    }

    let minute = currentTime.getMinutes();
    // if minute is less than 10
    if (minute < 10) {
        // adds 0 before minute
        minute = '0' + minute
    }

    let second = currentTime.getSeconds();
    // if second is less than 10
    if (second < 10) {
        // adds 0 before second
        second = '0' + second
    }

    // Updates clock in DOM
    hourEl.textContent = currentTime.getHours();
    minuteEl.textContent = currentTime.getMinutes();
    secondEl.textContent = currentTime.getSeconds();

    // Updates clock in DOM with zeropad
    hourEl.textContent = zeropad(currentTime.getHours());
    minuteEl.textContent = zeropad(currentTime.getMinutes());
    secondEl.textContent = zeropad(currentTime.getSeconds());
}

// Time interval: Updates hours, minutes and seconds with one second between each call. 
setInterval(()=> {
    // Calls updateTime function
    updateTime();    
}, 1000);

// Sets initial time
updateTime();

// Returns a string with current time
// currentTime.toLocaleTimeString()
