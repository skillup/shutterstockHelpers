// ==UserScript==
// @name          Shutterstock M-rank Vector Link
// @author        skillup (skillup.lj.ru)
// @version       1.0
// @description   M-rank link for vector illustration
// @include       https://www.shutterstock.com/image-vector/*
// ==/UserScript==

(() => {
    let node = document.createElement("span");
    let vectorID = document.querySelector(".img-wrap").innerHTML.match(/\/\d+\/\d+/).toString().replace(/(\/\d+)\/(\d+)/, '$2');
    node.innerHTML = ` | <a href="http://www.m-rank.net/?search=${vectorID}">M-rank</a>`;
    document.querySelector(".contrib-byline").appendChild(node);
})();