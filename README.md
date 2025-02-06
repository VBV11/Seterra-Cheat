# 🖱️ Seterra Auto Click Hack

## 📌 Description
A Violentmonkey script that automatically clicks the correct country in Seterra quizzes. This script enhances gameplay by instantly selecting the right answer. Users can also adjust the clicking speed to their preference.

## 🚀 Features
- ✅ **Auto-clicks the correct country**
- ✅ **Supports hitbox dots (if present)**
- ✅ **Highlights the correct location**
- ✅ **Adjustable speed settings**
- ✅ **Lightweight & efficient**

## 🛠 Installation
1. **Install Violentmonkey** (if you haven’t already):  
   🔗 [Chrome Web Store](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)  
   🔗 [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
   🔗 [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao)
3. **Open Violentmonkey Extension** ➝ *Create a new script*
4. **Copy & Paste** the following script:

```javascript
// ==UserScript==
// @name         Seterra Auto Click Hack
// @namespace    http://violentmonkey.net/
// @license      MIT
// @version      1.0
// @description  Automatically clicks the correct country in Seterra with adjustable speed.
// @author       VBV1
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// ==/UserScript==

// === Adjustable Speed ===
const clickSpeed = 0; // Adjust speed in milliseconds (Lower = faster clicks)

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
5. **Refresh** the Seterra game page and enjoy automated gameplay! 🎯

## ⚙️ Adjusting Click Speed
Modify the `clickSpeed` value in milliseconds to control the clicking speed:
- **Faster clicks:** Set a lower value (e.g., `100` ms)
- **Slower clicks:** Set a higher value (e.g., `500` ms)

---
Enjoy effortless Seterra gameplay! 🌍🚀

