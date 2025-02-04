// ==UserScript==
// @name         Seterra Auto Click Hack
// @namespace    http://tampermonkey.net/
// @license      MIT
// @version      1
// @description  Automatically clicks the correct country in Seterra with adjustable speed.
// @author       VBV1
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// ==/UserScript==

// === Adjustable Speed ===
const clickSpeed = 0; // Change this value (in milliseconds). Lower = faster clicks.

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
                setTimeout(() => {
                    simulateClick(correctCountry);
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
