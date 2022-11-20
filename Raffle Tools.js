// ==UserScript==
// @name         Raffle Tools
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kraiiven
// @match        https://www.alphabot.app/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=alphabot.app
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function onEnter() {
        document.querySelector('#main-body > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.css-1tz8m30 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-4.css-1px0r2z > div > div > div.MuiBox-root.css-121kum4 > button').click();
    }
    function onKeydown(evt) {
        // Use https://keycode.info/ to get keys
        if (evt.keyCode == 13) {
            onEnter();
        }
    }
    document.addEventListener('keydown', onKeydown, true);
})();