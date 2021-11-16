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
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

// Updates span elements with time
hour.textContent = now.getHours();
minute.textContent = now.getMinutes();
second.textContent = now.getSeconds();

// TODO: Double-check instructions for this step.
// Time interval: Gets hours, minutes and seconds with one second between each call. 
setInterval(()=> {
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
}, 1000);

console.log("Timer started");


