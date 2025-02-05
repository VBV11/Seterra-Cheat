// ==UserScript==
// @name         Seterra Auto Click Hack
// @namespace    http://tampermonkey.net/
// @license      MIT
// @version      1.5
// @description  Automatically clicks the correct country in Seterra with adjustable speed.
// @author       azzlam (Modified by ChatGPT)
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @grant        none
// @downloadURL  https://update.greasyfork.org/scripts/474936/Seterra%20AutoClick.user.js
// @updateURL    https://update.greasyfork.org/scripts/474936/Seterra%20AutoClick.meta.js
// ==/UserScript==

// === Adjustable Speed ===
const clickSpeed = 200; // Change this value (in milliseconds). Lower = faster clicks.

function simulateClick(element) {
    if (element) {
        let rect = element.getBoundingClientRect();
        let clickEvent = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: rect.left + rect.width / 2,
            clientY: rect.top + rect.height / 2
        });
        element.dispatchEvent(clickEvent);
        console.log("Clicked:", element);
    }
}

setInterval(() => {
    const gameHeader = document.querySelector("[class^='game-header_wrapper']");
    
    if (gameHeader) {
        const currentQuestionId = gameHeader.getAttribute('data-current-question-id');
        if (currentQuestionId) {
            const correctCountry = document.querySelector(`#${CSS.escape(currentQuestionId)}`);
            
            if (correctCountry) {
                correctCountry.style.setProperty("--fill-color", "black"); // Highlight the correct country
                
                setTimeout(() => {
                    simulateClick(correctCountry);
                    
                    // Check for dot and click it if present
                    const correctDot = correctCountry.querySelector("[class^='hitbox-dot']");
                    if (correctDot) {
                        correctDot.style.fill = "black";
                        correctDot.style.display = "none"; // Hide the dot
                        simulateClick(correctDot);
                    }
                }, clickSpeed); // Uses adjustable speed
            } else {
                console.log("Correct country not found.");
            }
        } else {
            console.log("Current question ID not found.");
        }
    } else {
        console.log("Game element not found.");
    }
}, clickSpeed);