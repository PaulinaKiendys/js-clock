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

const now = new Date(); // gets current timestamp when this line was executed
console.log("Hour:", now.getHours());
console.log("Minute:", now.getMinutes());
console.log("Second:", now.getSeconds());
