// ==UserScript==
// @name          M-rank Vector Position
// @author        skillup (skillup.lj.ru)
// @version       1.0
// @description   M-rank position and link for vector illustration
// @include       https://www.shutterstock.com/image-vector/*
// @grant         GM_xmlhttpRequest
// @grant         GM_setValue
// @grant         GM_getValue
// ==/UserScript==

(() => {
    let node = document.createElement("span");
    let vectorID = document.querySelector(".img-wrap").innerHTML.match(/\/\d+\/\d+/).toString().replace(/(\/\d+)\/(\d+)/, '$2');
    let myURL = `http://www.m-rank.net/?search=${vectorID}`;
    GM_xmlhttpRequest({
        method: "GET",
        url: myURL,
        onload: function(response) {
            let temp = response.responseText.match(/\d+<\/big>-ÿ/g) || '---';
            let position = temp === '---' ? temp : temp[0].replace(/(\d+)(.+)/g, '$1');
            node.innerHTML = ` | <a href="http://www.m-rank.net/?search=${vectorID}">M-rank position ${position}</a>`;
            document.querySelector(".contrib-byline").appendChild(node);
        }
    });
})();