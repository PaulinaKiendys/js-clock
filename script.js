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

/**
 * Steg 1: Användaren anger minuter/sekunder timer:n ska vara på
 * 
 * Steg 2: När användaren klickar på "Starta timer" så omvandlar du detta till millisekunder (minuter * 60 * 1000 + sekunder * 1000)
 * 
 * Steg 3: Därefter ta ut tidpunkt i epoch-millisekunder (tid sedan 1 Januari 1970 UTC) som timern startade med const starttime = Date.now()
 * 
 * Steg 4: Ta de framräknade millisekunder från steg 2 (om du sparat dem i t.ex. duration) och skapa en "end-time" genom att lägga till de till starttiden const endtime = starttime + duration
 * 
 * Steg 5: Sätt upp en interval-timer som kör var 100:e millisekund och där kolla om Date.now() > endtime, i så fall kör clearInterval(timerId) och visa nått roligt meddelande eller spela en ljudeffekt
 * 
 * Steg 6: Du kan också i steget ovan passa på att uppdatera DOM med en nedräkning till sluttiden (endtime - Date.now() och dela det på 1000 för att få antal sekunder kvar till sluttiden). Om du vill visa det i minuter också så kan du använda modulus-operatorn % och dela på 60.
 * */

// Targets timer elements
const timerEl = document.querySelector("#timer");
const timerBtn = document.querySelector(".start-button");

timerBtn.addEventListener('click', () => {
    // Converts duration of timer (1 minute) to milliseconds
    const duration = 1 * 60 * 1000;
    // Gets current time in epoch-milliseconds
    const starttime = Date.now();
    const endtime = starttime + duration;

    // Updates timer every 100 milliseconds
    const timerId = setInterval(() => {

        // Gets total number of seconds left to end of timer
        const secondsLeft = Math.floor((endtime - Date.now()) / 1000);
        // Gets number of minutes left to end of timer
        const minutesLeft = Math.floor((secondsLeft / 60) % 60);

        // Updates DOM with minutes and seconds left
        timerEl.innerHTML = `${minutesLeft}:${secondsLeft}`;

        // Checks if time is up
        if (Date.now() > endtime) {
            // Stops timer
            clearInterval(timerId);
            // Displays message
            alert("Time's up!⌛");
        }
    }, 100);
});