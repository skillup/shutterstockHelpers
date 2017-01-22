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
    node.innerHTML = document.querySelector(".col-xs-12").innerHTML.match(/h\/\w+((-|\+)\w+(\+\w+)?)?/g).map(x => x.slice(2).replace(/\+/g, ' ')).join(', ');
    node.style.cssText = 'padding: 14px; margin-top: 48px; text-align: left;';
    document.querySelector(".product-page-keywords").appendChild(node);
})();