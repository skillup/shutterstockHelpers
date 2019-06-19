// ==UserScript==
// @name          Shutterstock Keywords
// @author        skillup (skillup.lj.ru)
// @source        http://skillup.lj.ru
// @version       1.4
// @description   Easy to copy image keywords.
// @include       https://www.shutterstock.com/image-photo/*
// @include       https://www.shutterstock.com/image-vector/*
// @include       https://www.shutterstock.com/image-illustration/*
// ==/UserScript==

(() => {
    let keywords = document.querySelectorAll('.C_a_c')[0].children[0].children[0].children,
        newKeywords = document.createElement("p"),
        keys = document.querySelector(".C_a_c"),
        parent = keys.parentNode;

    keywords = [...keywords].map(k => k.innerText).map(a => `<a href="/search/${a}">${a}</a>`);

    newKeywords.innerHTML = `${keywords.length} keywords:<br>${keywords.join(', ')}`;
    newKeywords.style.cssText = 'padding-left: 14px; text-align: left; line-height: 150%';

    parent.appendChild(newKeywords);
    parent.removeChild(keys);
})();
