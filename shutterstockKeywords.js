// ==UserScript==
// @name          Shutterstock Keywords
// @author        skillup (skillup.lj.ru)
// @version       1.0
// @description   Easy to copy image keywords.
// @include       https://www.shutterstock.com/image-photo/*
// @include       https://www.shutterstock.com/image-vector/*
// @include       https://www.shutterstock.com/image-illustration/*
// ==/UserScript==

(() => {
    let node = document.createElement("p");
    node.innerHTML = document.getElementsByClassName("col-xs-12 text-left")[0].innerHTML.match(/h\/\w+((-|\+)\w+)?/g).map(x => x.slice(2).replace('+', ' ')).join(', ');
    node.style.cssText = 'padding: 14px; margin-top: 48px; text-align: left;';
    document.querySelector(".product-page-keywords").appendChild(node);
})();