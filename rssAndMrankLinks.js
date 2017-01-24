// ==UserScript==
// @name          RSS Feed and M-rank links
// @author        skillup (skillup.lj.ru)
// @version       1.0
// @description   Adds RSS Feed and M-rank links to portfolio page
// @include       https://www.shutterstock.com/g/*
// ==/UserScript==

(() => {
    let node = document.createElement("p");
    let authorID = document.querySelector(".img-wrap").innerHTML.match(/logo\/\d+/g).map(x => x.slice(5)).join(', ');
    let authorName = document.querySelector(".description").innerHTML.match(/ng\>\w+(\s\w+)?/g).map(x => x.slice(3)).join(', ');
    let rssLink = `http://www.shutterstock.com/feed.mhtml?gallery_id=${authorID}`;
    let mrankLink = `http://www.m-rank.net/?search=${authorID}`;
    node.innerHTML = `${authorName}'s <a href="${rssLink}">RSS Feed</a> | <a href="${mrankLink}">M-rank</a>`;
    document.querySelector(".social-icons").appendChild(node);
})();