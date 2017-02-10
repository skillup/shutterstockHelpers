// ==UserScript==
// @name          Shutterstock Zenboard
// @author        skillup (skillup.lj.ru)
// @source        http://skillup.lj.ru
// @version       1.0
// @description   Clears the dashboard of unnecessary items :)
// @include       https://submit.shutterstock.com/dashboard*
// @include       https://submit.shutterstock.com/
// ==/UserScript==

(() => {
    let temp = document.querySelectorAll('.row');
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    };
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for (var i = this.length - 1; i >= 0; i--)
            if (this[i] && this[i].parentElement) this[i].parentElement.removeChild(this[i]);
    };
    for (let i = 8; i < temp.length; i++)
        temp[i].remove();
    temp[7].parentNode.className = '';
    temp[7].parentNode.style.cssText = 'width: 400px; margin: 0 auto; margin-top: 200px;';
})();