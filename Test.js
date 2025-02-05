// ==UserScript==
// @name         Seterra Auto-Click Correct Country
// @namespace    http://tampermonkey.net/
// @license      MIT
// @version      1.0
// @description  Klik automatisch op het juiste land op de Seterra-kaart zonder kleurveranderingen.
// @author       You
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @grant        none
// ==/UserScript==

setInterval(() => {
    // Zoek de huidige vraag met de naam van het land
    const questionElement = document.querySelector('.question-box-text, .game-question');
    
    if (questionElement) {
        const countryName = questionElement.textContent.trim();
        console.log(`Land dat geklikt moet worden: ${countryName}`);
        
        // Zoek het land op de kaart door de naam te matchen
        const countryElement = [...document.querySelectorAll('path, polygon')]
            .find(e => e.getAttribute('data-name')?.toLowerCase().includes(countryName.toLowerCase()));

        if (countryElement) {
            // Simuleer een klik op het land
            countryElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            console.log(`Geklikt op: ${countryName}`);
        } else {
            console.log(`Land ${countryName} niet gevonden op de kaart.`);
        }
    } else {
        console.log("Huidige vraag niet gevonden.");
    }
}, 150);  // Elke 150ms proberen om te klikken.