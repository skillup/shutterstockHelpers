// ==UserScript==
// @name          Shutterstock Keywords
// @author        skillup (skillup.lj.ru)
// @version       1.0
// @description   Easy to copy image keywords.
// @include       https://www.shutterstock.com/image-photo/*
// @include       https://www.shutterstock.com/image-vector/*
// @include       https://www.shutterstock.com/image-illustration/*
// ==/UserScript==

(function() {
    let keywords = document.getElementsByClassName("col-xs-12 text-left"),
        myKeys = keywords[0].innerHTML.match(/\/search\/\w+/g).map(x => x.replace(/\/search\//, '')).join(', '),
        node = document.createElement("p");
    node.style.cssText = 'padding: 14px; margin-top: 48px; text-align: left;';
    node.innerHTML = myKeys;
    document.querySelector(".product-page-keywords").appendChild(node);
})();