// ==UserScript==
// @name         Raffle Tools
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Kraiiven
// @match        https://www.alphabot.app/*
// @match        https://twitter.com/intent/retweet*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=alphabot.app
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function onKeydown(evt) {
    let str = location.href;
    if (str.split("/")[2] == "www.alphabot.app") {Alphabot()};
    if (str.split("/")[2] == "twitter.com") {Twitter()};
    }


    function Alphabot() {
        document.querySelector('#main-body > form > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4.css-1tz8m30 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-lg-4.css-1px0r2z > div > div > div.MuiBox-root.css-121kum4 > button').click();
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function Retweet() {
        document.querySelector('#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-1kihuf0.r-18u37iz.r-1pi2tsx.r-1777fci.r-1pjcn9w.r-xr3zp9.r-1xcajam.r-ipm5af.r-9dcw1g > div.css-1dbjc4n.r-z6ln5t.r-kemksi.r-1867qdf.r-1jgb5lz.r-pm9dpa.r-1ye8kvj.r-1rnoaur.r-494qqr.r-13qz1uu > div.css-1dbjc4n.r-eqz5dr.r-1hc659g.r-1n2ue9f.r-11c0sde.r-13qz1uu > div.css-18t94o4.css-1dbjc4n.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-16y2uox.r-6gpygo.r-peo1c.r-1ps3wis.r-1ny4l3l.r-1udh08x.r-1guathk.r-1udbk01.r-o7ynqc.r-6416eg.r-lrvibr.r-3s2u2q').click();
    }

    function Like(){
        document.querySelector('[aria-label=Like]').click();
    }

    async function Twitter(evt) {
        Retweet();
        await sleep(2000);
        Like();
    }

    document.addEventListener('keydown', onKeydown, true);
})();
