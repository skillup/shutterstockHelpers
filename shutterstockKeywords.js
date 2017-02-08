// ==UserScript==
// @name          Shutterstock Keywords
// @author        skillup (skillup.lj.ru)
// @source        http://skillup.lj.ru
// @version       1.1
// @description   Easy to copy image keywords.
// @include       https://www.shutterstock.com/image-photo/*
// @include       https://www.shutterstock.com/image-vector/*
// @include       https://www.shutterstock.com/image-illustration/*
// ==/UserScript==

(() => {
    let newKeywords = document.createElement("p"),
        keywordsCount = document.createElement("span"),
        keys = document.querySelector(".product-page-keywords"),
        parent = keys.parentNode;

    newKeywords.innerHTML = document.querySelector(".col-xs-12").innerHTML.match(/h\/\w+((-|\+)\w+(\+\w+)?)?/g).map(x => x.slice(2).replace(/\+/g, ' ')).join(', ');
    let html = newKeywords.innerHTML.split(', ');
    html = html.map(a => a = `<a href="/search/${a}">${a}</a>`);
    keywordsCount.innerHTML = `${html.length} keywords:<br>`;
    newKeywords.innerHTML = keywordsCount.innerHTML;
    newKeywords.innerHTML += html.join(', ');
    newKeywords.style.cssText = 'padding-left: 14px; text-align: left; line-height: 150%';
    parent.appendChild(newKeywords);
    parent.removeChild(keys);
})();