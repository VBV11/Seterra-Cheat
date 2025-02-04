# Seterra Auto Click Hack

## 📌 Description
A Tampermonkey script that automatically clicks the correct country in Seterra quizzes. This enhances gameplay by selecting the right answer instantly. You can also adjust the clicking speed to your preference.

## 🚀 Features
- ✅ **Auto-clicks the correct country**
- ✅ **Supports hitbox dots (if present)**
- ✅ **Highlights the correct location**
- ✅ **Adjustable speed**
- ✅ **Lightweight & efficient**

## 🛠 Installation
1. **Install Tampermonkey** (if you haven’t already):  
   🔗 [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
   🔗 [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
2. **Click on Tampermonkey Extension** ➝ *Create a new script*
3. **Copy & Paste** the script below:

```javascript
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
```

4. **Save & Enable** the script.
5. **Refresh** the Seterra game page and play!

## ⚙️ Adjusting Click Speed
Change the `clickSpeed` value in milliseconds:
- **Faster clicks:** Lower the value (e.g., `100`)
- **Slower clicks:** Increase the value (e.g., `500`)

---
Enjoy auto-clicking through Seterra! 🌍🚀

