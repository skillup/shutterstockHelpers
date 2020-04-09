// ==UserScript==
// @name          Shutterstock Keywords
// @author        Oleg Skillup (skillup.lj.ru)
// @source        http://skillup.lj.ru
// @version       1.6
// @description   Easy to copy image keywords.
// @include       https://www.shutterstock.com/image-photo/*
// @include       https://www.shutterstock.com/image-vector/*
// @include       https://www.shutterstock.com/image-illustration/*
// ==/UserScript==

(() => {
    const $ = document.querySelector.bind(document);
    let keywords = $('.oc_x_c').children,
        newKeywords = document.createElement("div"),
        my_parent = $('body');

    keywords = [...keywords].map(k => k.innerText).map(a => `<a href="/search/${a}">${a}</a>`);

    newKeywords.innerHTML = `${keywords.length} keywords:<br>${keywords.join(', ')}`;
    newKeywords.style.cssText = `
        text-align: left;
        width: 450px;
        background-color: white;
        line-height: 150%;
        position: absolute;
        padding: 20px;
        right: 10px;
        top: 150px;
        z-index: 9999999;`;
    my_parent.appendChild(newKeywords);

})();
