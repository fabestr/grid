'use strict';

var imgs = document.querySelectorAll('.grid img');
var tab = []
imgs.forEach(function(element) {
    var src = element.getAttribute('src');
    tab.push(src);
    return tab;
});

console.log(tab);

